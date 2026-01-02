import ProductCard from "@/components/ProductCard";
import { product } from "@/data/products";

const Catalog = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#0e0e0e] to-black text-white w-full min-h-screen">
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
  );
};

export default Catalog;
