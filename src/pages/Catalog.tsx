import ProductCard from "@/components/ProductCard"
import { product } from "@/data/products"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"
import type { RootState } from "@/App/store"

interface CatalogProps {
  onCartOpen: () => void
}

const Catalog = ({ onCartOpen }: CatalogProps) => {
  const navigate = useNavigate()
  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <div className="bg-gradient-to-b from-black via-[#0e0e0e] to-black text-white w-full min-h-screen">
      
      {/* TOP BAR */}
      <div className="px-4 sm:px-6 lg:px-12 pt-8 flex justify-between items-center">
        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="
            inline-flex items-center gap-2
            px-5 py-2.5
            rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/15
            text-white text-sm font-medium
            hover:bg-white/20
            transition
          "
        >
          <ArrowLeft size={16} />
          Orqaga
        </button>

        {/* CART */}
        <button
          onClick={onCartOpen}
          className="
            relative
            p-3
            rounded-full
            bg-white/10
            border border-white/15
            hover:bg-white/20
            transition
          "
        >
          <ShoppingCart size={18} />

          {items.length > 0 && (
            <span
              className="
                absolute -top-1 -right-1
                bg-orange-500
                text-black
                text-xs
                font-bold
                px-1.5 py-0.5
                rounded-full
              "
            >
              {items.length}
            </span>
          )}
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
          px-4 sm:px-6 lg:px-12
          py-12
        "
      >
        {product.map((p) => (
          <div
            key={p.id}
            className="
              h-[440px]
              sm:h-[480px]
              lg:h-[520px]
            "
          >
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog
