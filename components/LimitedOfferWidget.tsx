import { ArrowRight, Clock, Zap } from "lucide-react";

export function LimitedOfferWidget() {
  return (
    <section id="radar-rapido" className="bg-[#DDE1E7] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-lg bg-[#E11D2E] p-5 text-white shadow-[0_14px_30px_rgba(225,29,46,0.2)] md:grid-cols-[1fr_auto] md:items-center md:p-7">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#18181B] text-[#FFB703]">
            <Zap className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/75">
              Oferta valida por tempo limitado
            </p>
            <h2 className="mt-1 font-display text-3xl font-black">Radar rapido</h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/85">
              Algumas ofertas podem expirar ou mudar de preco a qualquer
              momento.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:items-center">
          <div className="grid gap-2 min-[380px]:grid-cols-3">
            {["Hoje", "24h", "Preco sujeito a alteracao"].map((item) => (
              <div
                key={item}
                className="min-h-16 rounded-md border border-white/20 bg-white px-3 py-2 text-center text-[#18181B]"
              >
                <Clock className="mx-auto mb-1 h-4 w-4 text-[#E11D2E]" aria-hidden="true" />
                <p className="text-xs font-black leading-tight">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="#ofertas"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#18181B] px-5 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#111111] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E11D2E]"
          >
            Ver ofertas ativas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
