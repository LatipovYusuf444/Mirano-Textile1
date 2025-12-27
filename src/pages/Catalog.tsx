import ProductCard from "@/components/ProductCard";
import { product } from "@/data/products";

const Catalog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gradient-to-b from-black via-[#0e0e0e] to-black text-white">
      {product.map(p => (
        <ProductCard key={p.id}{...p} />
      ))}
    </div>
  )
}
export default Catalog
