import { BadgeCheck, Boxes, Link2, Megaphone } from "lucide-react";

const benefits = [
  {
    metric: "01",
    title: "Links diretos",
    text: "CTA para abrir a loja parceira sem etapas extras.",
    icon: Link2,
  },
  {
    metric: "02",
    title: "Amazon e Mercado Livre",
    text: "Marketplace visivel antes do clique em cada produto.",
    icon: Boxes,
  },
  {
    metric: "03",
    title: "Curadoria por nicho",
    text: "Produtos organizados para comparar com rapidez.",
    icon: BadgeCheck,
  },
  {
    metric: "04",
    title: "Afiliado transparente",
    text: "Aviso claro sobre comissao e condicoes das lojas.",
    icon: Megaphone,
  },
];

export function BenefitStrip() {
  return (
    <section className="bg-[#DDE1E7] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-lg border border-[#C7CDD6] bg-[#FDFBF7] shadow-[0_12px_24px_rgba(24,24,27,0.08)] lg:max-w-7xl">
        <div className="border-b border-[#D6C45B] bg-[#FFE600] px-4 py-3 sm:px-5">
          <p className="font-display text-lg font-black text-[#18181B]">
            Como o radar organiza as ofertas
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ metric, title, text, icon: Icon }) => (
          <div
            key={title}
            className="group relative min-h-36 border-b border-[#D8D1C5] p-4 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#18181B] text-[#FFB703] transition-colors group-hover:bg-[#E11D2E] group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-3xl font-black leading-none text-[#D4D0C8]">
                {metric}
              </span>
            </div>
            <p className="mt-4 font-display text-xl font-black leading-tight text-[#111111]">
              {title}
            </p>
            <p className="mt-2 text-sm font-semibold leading-5 text-[#555555]">
              {text}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
