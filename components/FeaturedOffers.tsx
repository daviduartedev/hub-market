import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

export function FeaturedOffers() {
  return (
    <section id="ofertas" className="bg-[#DDE1E7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E11D2E]">
              Vitrine principal
            </p>
            <h2 className="mt-1 font-display text-3xl font-black tracking-tight text-[#111111] sm:text-4xl">
              Ofertas em destaque
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-6 text-[#555555]">
            Selecao enxuta para comparar marketplace, preco anterior e contexto
            antes de abrir a loja.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
