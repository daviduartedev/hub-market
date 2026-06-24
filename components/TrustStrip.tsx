import { BadgeCheck, Link2, Radar, Store } from "lucide-react";

const items = [
  {
    label: "Curadoria por categoria",
    text: "O Radar separa ofertas por uso real, não por volume.",
    icon: Radar,
  },
  {
    label: "Amazon e Mercado Livre",
    text: "Origem da oferta sempre visível antes do clique.",
    icon: Store,
  },
  {
    label: "Links diretos",
    text: "Você abre a loja parceira sem caminho confuso.",
    icon: Link2,
  },
  {
    label: "Afiliado transparente",
    text: "Aviso claro sobre comissão e condições da loja.",
    icon: BadgeCheck,
  },
];

export function TrustStrip() {
  return (
    <section className="bg-[#111111] text-white">
      <div className="grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ label, text, icon: Icon }) => (
          <div
            key={label}
            className="group min-h-44 border-b border-white/10 px-5 py-8 sm:border-r lg:border-b-0 lg:px-8 lg:py-10"
          >
            <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FFB703] text-[#111111]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 max-w-xs text-2xl font-black leading-tight">
              {label}
            </h2>
            <p className="mt-3 max-w-sm text-sm font-semibold leading-6 text-white/65">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
