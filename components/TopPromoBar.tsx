import { AlertCircle } from "lucide-react";

export function TopPromoBar() {
  return (
    <div className="bg-[#E11D2E] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>Ofertas selecionadas com links diretos para Amazon e Mercado Livre</span>
        <span className="inline-flex items-center gap-1 text-white/85">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          Precos e disponibilidade podem mudar sem aviso
        </span>
      </div>
    </div>
  );
}
