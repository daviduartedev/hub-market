import { MessageCircle } from "lucide-react";

export function WhatsappCTA() {
  return (
    <section id="whatsapp" className="bg-[#E7EAEE] py-10">
      <div className="border-y border-[#0A2F1A] bg-[#128C7E] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B9FBC0]">
              Grupo do Radar
            </p>
            <h2 className="mt-2 max-w-4xl font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Receba o Radar direto no WhatsApp.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/82">
              Ofertas selecionadas por categoria, com leitura rápida e sem
              precisar garimpar em várias lojas.
            </p>
          </div>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-base font-black text-[#07130B] outline-none transition-colors hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#128C7E]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Entrar no grupo
          </a>
        </div>
      </div>
    </section>
  );
}
