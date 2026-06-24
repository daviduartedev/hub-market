import { Info } from "lucide-react";

export function AffiliateNotice() {
  return (
    <section id="aviso-afiliado" className="bg-[#E7EAEE] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-4 rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_20px_rgba(17,17,17,0.06)]">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#FFB703] text-[#18181B]">
          <Info className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-black text-[#111111]">
            Aviso de afiliado
          </h2>
          <p className="mt-2 text-sm font-semibold leading-7 text-[#555555]">
            Alguns links desta página são links de afiliado. Podemos receber uma
            comissão quando você compra por esses links, sem custo adicional para
            você. Os preços, prazos, disponibilidade e condições dos produtos
            são definidos pelas lojas parceiras e podem mudar a qualquer
            momento.
          </p>
        </div>
      </div>
    </section>
  );
}
