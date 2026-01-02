import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import type { CartItem } from "@/features/cart/cartSlice";
import { motion } from "framer-motion";

type Props = Omit<CartItem, "quantity">;

const ProductCard = ({ id, title, price, image }: Props) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        h-full
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        overflow-hidden
        flex flex-col
        group
      "
    >
      {/* IMAGE */}
      <div className="relative h-[55%] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-wide text-white">
            {title}
          </h3>
          <p className="text-orange-400 font-bold mt-2 text-xl">
            ${price}
          </p>
        </div>

        <button
          onClick={() =>
            dispatch(addToCart({ id, title, price, image }))
          }
          className="
            mt-4
            w-full
            h-11
            rounded-xl
            bg-orange-500/90
            hover:bg-orange-400
            transition-all
            text-white
            font-medium
          "
        >
          Karzinkaga qo‘shish
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
