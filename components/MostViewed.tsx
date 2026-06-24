import { ProductCard } from "@/components/ProductCard";
import { mostViewedProducts } from "@/data/products";

const marqueeProducts = [...mostViewedProducts, ...mostViewedProducts];

export function MostViewed() {
  return (
    <section id="mais-vistos" className="bg-[#E7EAEE] py-10">
      <div className="border-y border-[#111111]/10 bg-[#111111] px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFB703]">
              Mais vistos agora
            </p>
            <h2 className="mt-1 font-display text-3xl font-black tracking-tight sm:text-4xl">
              Esteira de ofertas que o público abriu mais
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-6 text-white/70">
            Uma faixa contínua, sem espaçamentos laterais, para navegar como
            prateleira de marketplace.
          </p>
        </div>
      </div>

      <div className="overflow-hidden border-y border-[#D8DDE6] bg-white">
        <div className="radar-marquee flex w-max">
          {marqueeProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="w-[18rem] shrink-0 border-r border-[#E5E7EB] sm:w-[20rem] lg:w-[22rem]"
            >
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
