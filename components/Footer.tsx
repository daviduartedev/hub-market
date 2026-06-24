import { Flame, Mail, MessageCircle, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#18181B] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FFB703] text-[#18181B]">
              <Flame className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-3xl font-black leading-none">
              Radar
              </p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-[#FFB703]">
                Curadoria comercial independente
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-lg text-sm font-semibold leading-6 text-white/70">
            Curadoria independente de ofertas e produtos. Organizamos links,
            marketplaces e avisos comerciais para você comparar com mais
            contexto antes de comprar.
          </p>
          <div className="mt-5 grid max-w-lg grid-cols-2 gap-3">
            <div className="rounded-md border border-white/10 bg-white/5 p-3">
              <p className="font-display text-2xl font-black text-[#FFB703]">
                2
              </p>
              <p className="text-xs font-black uppercase tracking-wide text-white/65">
                marketplaces
              </p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 p-3">
              <p className="font-display text-2xl font-black text-[#FFB703]">
                V1
              </p>
              <p className="text-xs font-black uppercase tracking-wide text-white/65">
                hub de ofertas
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="font-display text-lg font-black text-white">
              Navegue
            </p>
            <nav className="mt-4 grid gap-3 text-sm font-bold text-white/70">
              <a href="#ofertas" className="hover:text-[#FFB703]">
                Ofertas em destaque
              </a>
              <a href="#mais-vistos" className="hover:text-[#FFB703]">
                Mais vistos
              </a>
              <a href="#whatsapp" className="hover:text-[#FFB703]">
                Grupo do Radar
              </a>
              <a href="#aviso-afiliado" className="hover:text-[#FFB703]">
                Aviso de afiliado
              </a>
            </nav>
          </div>

          <div>
            <p className="font-display text-lg font-black text-white">
              Contato
            </p>
            <div className="mt-4 grid gap-3">
              <a
                href="mailto:contato@radardeofertas.local"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-[#FFB703]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                contato@radardeofertas.local
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-[#FFB703]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Grupo no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white p-5 text-[#18181B]">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#FFB703]">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="font-display text-xl font-black">Política de links</p>
          </div>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#555555]">
            Alguns links podem gerar comissão sem custo adicional para você.
            Preços, prazos e disponibilidade são definidos pelas lojas
            parceiras.
          </p>
          <a
            href="#aviso-afiliado"
            className="mt-5 inline-flex w-full justify-center rounded-md bg-[#E11D2E] px-4 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#B91C1C] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
          >
            Ler aviso de afiliado
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-xs font-bold text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Radar. Curadoria independente de ofertas e produtos.</p>
        <p>Sem promessas absolutas. Sempre confira as condições na loja.</p>
      </div>
    </footer>
  );
}
