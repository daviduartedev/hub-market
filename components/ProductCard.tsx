import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import {
  marketplaceBadgeClass,
  marketplaceCtaLabels,
  marketplaceLabels,
} from "@/components/marketplace";

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white transition-colors hover:bg-[#FFF7E0]">
      <div className="relative border-b border-[#E5E7EB] bg-[#F6F7F9]">
        <img
          src={product.image}
          alt={`Imagem ilustrativa de ${product.name}`}
          className={compact ? "h-40 w-full object-cover" : "h-56 w-full object-cover"}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span
            className={`relative inline-flex items-center gap-2 overflow-hidden rounded-md border px-2.5 py-1 pl-4 text-xs font-black shadow-sm before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${marketplaceBadgeClass[product.marketplace]}`}
          >
            {marketplaceLabels[product.marketplace]}
          </span>
          {!compact && (
            <span className="rounded-md bg-[#F97316] px-2.5 py-1 text-xs font-black text-white shadow-sm">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        {!compact && (
          <p className="-mx-4 -mt-4 mb-4 bg-[#111111] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#FFB703]">
            {product.badge}
          </p>
        )}
        <p className="text-xs font-black uppercase tracking-wide text-[#E11D2E]">
          {product.category}
        </p>
        <h3
          className={
            compact
              ? "mt-2 min-h-[2.5rem] font-display text-base font-black leading-tight text-[#111111]"
              : "mt-2 min-h-[3.5rem] font-display text-xl font-black leading-tight text-[#111111]"
          }
        >
          {product.name}
        </h3>

        <div className="mt-4 flex items-end gap-2">
          <span className="font-display text-2xl font-black text-[#111111]">
            {moneyFormatter.format(product.price)}
          </span>
          {product.oldPrice ? (
            <span className="pb-1 text-sm font-bold text-[#555555] line-through">
              {moneyFormatter.format(product.oldPrice)}
            </span>
          ) : null}
        </div>

        {product.discountPercent ? (
          <p className="mt-1 text-sm font-black text-[#B91C1C]">
            {product.discountPercent}% abaixo do preço anterior informado
          </p>
        ) : null}

        <p className="mt-2 text-xs font-bold text-[#555555]">{product.note}</p>

        <div className="mt-auto pt-4">
          <div className="flex gap-2">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#E11D2E] px-3 text-xs font-black leading-none text-white outline-none transition-colors hover:bg-[#B91C1C] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2 sm:text-sm"
            >
              {compact ? "Abrir" : marketplaceCtaLabels[product.marketplace]}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir link externo de ${product.name}`}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#E5E7EB] bg-white text-[#18181B] outline-none transition-colors hover:border-[#18181B] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-2 text-center text-[11px] font-bold text-[#555555]">
            Link afiliado
          </p>
        </div>
      </div>
    </article>
  );
}
