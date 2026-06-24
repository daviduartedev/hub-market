import { ArrowRight, ExternalLink, Radar, ShieldCheck } from "lucide-react";
import { marketplaceLabels } from "@/components/marketplace";
import { radarFeaturedProduct } from "@/data/products";

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function HeroRadar() {
  const product = radarFeaturedProduct;

  return (
    <section id="inicio" className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_28rem] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-md bg-[#FFB703] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#111111]">
            <Radar className="h-4 w-4" aria-hidden="true" />
            Radar de ofertas
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-[3.25rem] font-black leading-[0.9] tracking-tight sm:text-[5rem] lg:text-[6.25rem]">
            Se é promoção, passa pelo Radar.
          </h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/75 sm:text-lg">
            Produtos úteis da Amazon e Mercado Livre, selecionados em uma
            vitrine simples para você comprar com mais critério e menos ruído.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-5 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#991B1B] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
            >
              Entrar no grupo de WhatsApp
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#ofertas"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-5 py-3 text-sm font-black text-[#111111] outline-none transition-colors hover:bg-[#FFB703] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
            >
              Ver ofertas de hoje
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/60">
            <ShieldCheck className="h-4 w-4 text-[#FFB703]" aria-hidden="true" />
            O Radar encontra. Você decide se vale a pena.
          </p>
        </div>

        <aside className="relative rounded-xl bg-[#F6F7F9] p-3 text-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <span className="absolute -left-3 top-6 z-10 rounded-md bg-[#E11D2E] px-3 py-2 text-xs font-black uppercase tracking-wide text-white">
            Passou pelo Radar
          </span>
          <img
            src={product.image}
            alt={`Imagem realista representando ${product.name}`}
            className="h-72 w-full rounded-lg object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-md bg-[#111111] px-3 py-1 text-xs font-black text-white">
                {marketplaceLabels[product.marketplace]}
              </span>
              <span className="rounded-md bg-[#FFB703] px-3 py-1 text-xs font-black">
              {product.discountPercent}% off ref.
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight">
              {product.name}
            </h2>
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
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-5 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#991B1B] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
            >
              Abrir oferta
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-2 text-center text-xs font-bold text-[#525252]">
              Preço sujeito a alteração. Link afiliado.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
