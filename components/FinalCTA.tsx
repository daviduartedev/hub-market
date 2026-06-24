import { ArrowRight, Send } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#DDE1E7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto rounded-lg bg-[#18181B] px-5 py-8 text-center text-white shadow-[0_16px_40px_rgba(24,24,27,0.16)] sm:px-8 lg:max-w-7xl">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-black tracking-tight sm:text-5xl">
          Escolha uma oferta ou entre em um canal
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/75 sm:text-base">
          Acompanhe produtos selecionados por nicho e compre apenas quando fizer
          sentido.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#ofertas"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-5 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#B91C1C] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B]"
          >
            Ver ofertas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FFE600] px-5 py-3 text-sm font-black text-[#18181B] outline-none transition-colors hover:bg-[#FDFBF7] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B]"
          >
            Entrar no WhatsApp
            <Send className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
