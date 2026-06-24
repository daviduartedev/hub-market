import { MessageCircle, Radar } from "lucide-react";

export function WhatsappCTA() {
  return (
    <section id="whatsapp" className="bg-[#E7EAEE] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 border border-[#0F0F0F]/10 bg-[#128C7E] p-6 text-white shadow-[0_18px_45px_rgba(18,140,126,0.22)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-md bg-[#07130B] px-3 py-1.5 text-xs font-black uppercase tracking-wide">
            <Radar className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
            Alertas selecionados
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">
            Receba o Radar direto no WhatsApp.
          </h2>
          <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-white/85">
            Entre no grupo e acompanhe ofertas selecionadas por categoria, sem
            precisar ficar garimpando em várias lojas.
          </p>
        </div>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-base font-black text-[#07130B] outline-none transition-colors hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#128C7E]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Entrar no grupo de WhatsApp
        </a>
      </div>
    </section>
  );
}
