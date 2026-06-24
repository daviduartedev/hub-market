import { ProductCard } from "@/components/ProductCard";
import { mostViewedProducts } from "@/data/products";

export function MostViewed() {
  return (
    <section id="mais-vistos" className="bg-[#F6F7F9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0_16px_38px_rgba(17,17,17,0.07)]">
        <div className="flex flex-col gap-2 border-b border-[#E5E7EB] bg-[#111111] px-5 py-5 text-white sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFB703]">
              Mais vistos pelo Radar
            </p>
            <h2 className="mt-1 font-display text-3xl font-black tracking-tight">
              A prateleira que mais chamou atenção
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-6 text-white/70">
            Uma seleção compacta para escanear rápido antes de abrir a loja.
          </p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {mostViewedProducts.map((product) => (
            <div
              key={product.id}
              className="border-b border-[#E5E7EB] p-4 sm:border-r lg:border-b-0"
            >
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
