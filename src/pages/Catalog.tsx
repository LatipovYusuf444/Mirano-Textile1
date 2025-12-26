import ProductCard from "@/components/ProductCard";
import { product } from "@/data/products";

const Catalog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {product.map(p => (
        <ProductCard key={p.id}{...p} />
      ))}
    </div>
  )
}
export default Catalog
