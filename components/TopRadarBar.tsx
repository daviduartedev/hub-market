import { AlertTriangle } from "lucide-react";

export function TopRadarBar() {
  return (
    <div className="bg-[#E11D2E] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 text-xs font-black sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>Se é promoção, passa pelo Radar.</span>
        <span className="inline-flex items-center gap-1 text-white/85">
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
          Preços e disponibilidade podem mudar sem aviso.
        </span>
      </div>
    </div>
  );
}
