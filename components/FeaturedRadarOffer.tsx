import { ExternalLink, Radar } from "lucide-react";
import { marketplaceLabels } from "@/components/marketplace";
import { products } from "@/data/products";

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function FeaturedRadarOffer() {
  const product = products[1];

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden border-y border-[#D8DDE6] bg-[#111111] text-white shadow-[0_18px_45px_rgba(17,17,17,0.08)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-80 bg-[#111111]">
          <img
            src={product.image}
            alt={`Imagem realista representando ${product.name}`}
            className="h-full min-h-80 w-full object-cover opacity-92"
          />
          <div className="absolute left-4 top-4 rounded-md bg-[#E11D2E] px-3 py-2 text-xs font-black uppercase tracking-wide text-white">
            Passou pelo Radar
          </div>
        </div>
        <div className="flex flex-col justify-center border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-md bg-[#FFB703] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#111111]">
            <Radar className="h-4 w-4" aria-hidden="true" />
            Oferta em destaque
          </span>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-black leading-tight text-white sm:text-5xl">
            Uma vitrine principal para abrir antes de comparar.
          </h2>
          <p className="mt-4 max-w-lg text-base font-semibold leading-7 text-white/70">
            A oferta entra no destaque quando combina preço, categoria e contexto
            de compra. A origem fica visível antes do clique.
          </p>
          <div className="mt-7 border border-white/10 bg-white p-4 text-[#111111]">
            <p className="text-xs font-black uppercase tracking-wide text-[#E11D2E]">
              {marketplaceLabels[product.marketplace]} / {product.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-black text-[#111111]">
              {product.name}
            </h3>
            <div className="mt-3 flex items-end gap-2">
              <strong className="font-display text-3xl font-black">
                {moneyFormatter.format(product.price)}
              </strong>
              {product.oldPrice ? (
                <span className="pb-1 text-sm font-bold text-[#525252] line-through">
                  {moneyFormatter.format(product.oldPrice)}
                </span>
              ) : null}
            </div>
          </div>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-5 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#991B1B] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2 sm:w-auto"
          >
            Abrir oferta
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs font-bold text-white/55">
            Preço sujeito a alteração.
          </p>
        </div>
      </div>
    </section>
  );
}
