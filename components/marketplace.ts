import type { Marketplace } from "@/data/products";

export const marketplaceLabels: Record<Marketplace, string> = {
  amazon: "Amazon",
  mercado_livre: "Mercado Livre",
};

export const marketplaceCtaLabels: Record<Marketplace, string> = {
  amazon: "Ver na Amazon",
  mercado_livre: "Ver no Mercado Livre",
};

export const marketplaceBadgeClass: Record<Marketplace, string> = {
  amazon: "border-[#111111] bg-[#111111] text-white before:bg-[#FF9900]",
  mercado_livre:
    "border-[#FFE600] bg-[#FFE600] text-[#1F2937] before:bg-[#3483FA]",
};
