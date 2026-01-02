import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/App/store"
import { clearCart } from "@/features/cart/cartSlice"
import { sendToTelegram } from "@/lib/telegram"
import { Button } from "./ui/button"
import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CartDrawerProps {
  onClose: () => void
}

const CartDrawer = ({ onClose }: CartDrawerProps) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [success, setSuccess] = useState(false)

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleOrder = async () => {
    // * 🔴 BACKEND INTEGRATION
    //  * Bu joyda:
    //  * - Telegram
    //  * - REST API
    //  * - Firebase
    //  * - Admin panel
    //  * ulanishi mumkin
    //  */
    await sendToTelegram(items)
    dispatch(clearCart())
    setSuccess(true)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* OVERLAY */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* DRAWER */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25 }}
          className="
            relative
            w-full sm:w-[420px]
            h-full
            bg-gradient-to-b from-[#0b0b0b] to-black
            text-white
            p-6
            flex flex-col
          "
        >
          {/* HEADER */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-xl font-semibold tracking-wide">
              🛒 Karzinka
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <X />
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto mt-4 space-y-4 scrollbar-hide">
            {success && (
              <div className="text-center mt-20">
                <h2 className="text-2xl font-bold text-green-500">
                  ✅ Zakaz yuborildi
                </h2>
                <p className="text-white/60 mt-2">
                  Tez orada siz bilan bog‘lanamiz
                </p>
                <Button className="mt-6 w-full" onClick={onClose}>
                  Yopish
                </Button>
              </div>
            )}

            {!success && items.length === 0 && (
              <p className="text-white/50 text-center mt-20">
                Karzinka bo‘sh
              </p>
            )}

            {!success &&
              items.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex justify-between items-center
                    p-4 rounded-xl
                    bg-white/6
                    border border-white/10
                    hover:bg-white/10
                    transition
                  "
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-white/60">
                      {item.quantity} x ${item.price}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              ))}
          </div>

          {/* FOOTER */}
          {!success && items.length > 0 && (
            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between mb-4 text-lg font-semibold">
                <span>Umumiy:</span>
                <span>${total}</span>
              </div>

              <Button
                onClick={handleOrder}
                className="
                  w-full h-12
                  bg-white text-black
                  hover:bg-orange-400
                  transition-all
                "
              >
                Zakaz berish
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CartDrawer
