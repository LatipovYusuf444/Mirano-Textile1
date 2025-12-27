import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/App/store"
import { clearCart } from "@/features/cart/cartSlice"
import { sendToTelegram } from "@/lib/telegram"
import { Button } from "./ui/button"
import { useState } from "react"

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
    await sendToTelegram(items)
    dispatch(clearCart())
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">
          ✅ Zakaz muvaffaqiyatli yuborildi!
        </h2>
        <p className="mt-2 text-gray-500">
          Tez orada siz bilan bog‘lanamiz
        </p>

        <Button className="mt-4" onClick={onClose}>
          Yopish
        </Button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🛒 Karzinka</h2>
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
      </div>

      {items.length === 0 && (
        <p className="text-gray-500">Karzinka bo‘sh</p>
      )}

      {items.map(item => (
        <div key={item.title} className="flex justify-between mb-3">
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500">
              {item.quantity} x ${item.price}
            </p>
          </div>
          <p className="font-bold">
            ${item.price * item.quantity}
          </p>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <div className="mt-4 font-bold text-lg">
            Umumiy: ${total}
          </div>

          <Button
            className="mt-4 w-full"
            onClick={handleOrder}
          >
            Zakaz berish
          </Button>
        </>
      )}
    </div>
  )
}

export default CartDrawer
