export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F0F0F] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <p className="font-display text-4xl font-black leading-none tracking-tight">
            Radar
          </p>
          <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-white/68">
            Uma vitrine editorial para ofertas úteis, com origem visível,
            aviso comercial claro e navegação pensada para abrir a loja certa
            sem ruído.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Prateleiras
            </p>
            <nav className="mt-4 grid gap-3 text-sm font-bold text-white/62">
              <a href="#inicio" className="hover:text-[#FFB703]">
                Destaque rotativo
              </a>
              <a href="#ofertas" className="hover:text-[#FFB703]">
                Ofertas no Radar
              </a>
              <a href="#categorias" className="hover:text-[#FFB703]">
                Categorias monitoradas
              </a>
              <a href="#mais-vistos" className="hover:text-[#FFB703]">
                Mais vistos
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Transparência
            </p>
            <nav className="mt-4 grid gap-3 text-sm font-bold text-white/62">
              <a href="#whatsapp" className="hover:text-[#FFB703]">
                Grupo do WhatsApp
              </a>
              <a
                href="mailto:contato@radardeofertas.local"
                className="hover:text-[#FFB703]"
              >
                contato@radardeofertas.local
              </a>
            </nav>
          </div>
        </div>

        <div className="border border-white/12 bg-white/[0.06] p-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FFB703]">
            Atualizações no grupo
          </p>
          <p className="mt-4 text-2xl font-black leading-tight">
            Receba alertas sem transformar sua compra em caça ao tesouro.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#25D366] px-4 py-3 text-sm font-black text-[#07130B] outline-none transition-colors hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F0F]"
          >
            Entrar no WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-xs font-bold text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Radar. Ofertas organizadas para comparação rápida.</p>
        <p>Links, preços e disponibilidade podem mudar nas lojas parceiras.</p>
      </div>
    </footer>
  );
}
