import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

export function ProductRail() {
  return (
    <section id="ofertas" className="bg-[#E7EAEE] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden border border-[#D8DDE6] bg-white">
        <div className="flex flex-col gap-3 border-b border-[#D8DDE6] bg-[#111111] px-5 py-6 text-white sm:flex-row sm:items-end sm:justify-between lg:px-7">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFB703]">
              Ofertas no Radar
            </p>
            <h2 className="mt-1 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
              Achados monitorados hoje
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border-b border-r border-[#E5E7EB] p-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
