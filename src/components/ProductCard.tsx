import { useDispatch } from "react-redux"
import { addToCart } from "@/features/cart/cartSlice"
import type { CartItem } from "@/features/cart/cartSlice"

type Props = Omit<CartItem, "quantity">

const ProductCard = ({ id, title, price, image }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className="rounded-2xl border p-4 shadow hover:scale-105 transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-xl"
      />

      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="text-lg font-bold">${price}</p>

      <button
        onClick={() => dispatch(addToCart({ id, title, price, image }))}
        className="mt-3 w-full rounded-xl bg-black py-2 text-white"
      >
        Karzinkaga qo‘shish
      </button>
    </div>
  )
}

export default ProductCard
