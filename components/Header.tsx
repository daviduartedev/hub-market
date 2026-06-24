"use client";

import {
  Flame,
  Menu,
  Search,
  Send,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const navItems = [
  { label: "Ofertas", href: "#ofertas" },
  { label: "Categorias", href: "#categorias" },
  { label: "Mais vistas", href: "#mais-vistos" },
  { label: "WhatsApp", href: "#whatsapp" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    closeMobileMenu();
    window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>("#ofertas");
      const header = document.querySelector<HTMLElement>("header");

      if (!target) {
        return;
      }

      const offset = (header?.getBoundingClientRect().height || 0) + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      if (window.location.hash !== "#ofertas") {
        window.location.hash = "ofertas";
      }

      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, 0);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#D8DDE6] bg-white shadow-[0_4px_18px_rgba(17,17,17,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <a
          href="#inicio"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-3 rounded-md text-[#111111] outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
        >
          <span className="grid h-14 w-14 place-items-center rounded-md bg-[#E11D2E] text-white shadow-[inset_0_-5px_0_rgba(17,17,17,0.35)]">
            <Flame className="h-6 w-6" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-3xl font-black leading-none tracking-tight">
              Radar
            </span>
            <span className="hidden text-[11px] font-black uppercase tracking-[0.16em] text-[#525252] sm:block">
              Se é promoção, passa
            </span>
          </span>
        </a>

        <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-md border-2 border-[#111111] bg-[#F6F7F9] px-4 py-3 text-[#525252] md:flex">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-[#111111] text-[#FFB703]">
            <Search className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate text-base font-bold">
            Buscar ofertas no Radar
          </span>
        </div>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md text-[0.95rem] font-bold text-[#18181B] outline-none transition-colors hover:text-[#E11D2E] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-4 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#991B1B] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2 sm:px-5"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Entrar no grupo</span>
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#18181B] bg-[#FDFBF7] text-[#18181B] outline-none transition-colors hover:border-[#18181B] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2 lg:hidden"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-[#E5E7EB] bg-white px-4 py-4 shadow-[0_20px_35px_rgba(24,24,27,0.18)] lg:hidden"
        >
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <label className="sr-only" htmlFor="mobile-search">
              Buscar ofertas
            </label>
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border-2 border-[#18181B] bg-[#EFE6D7] px-3 py-2">
              <Search className="h-4 w-4 shrink-0 text-[#E11D2E]" aria-hidden="true" />
              <input
                id="mobile-search"
                type="search"
                placeholder="Buscar ofertas"
                className="min-w-0 flex-1 bg-transparent text-base font-bold text-[#18181B] outline-none placeholder:text-[#555555]"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#18181B] px-4 py-2 text-sm font-black text-white outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
            >
              Ver
            </button>
          </form>

          <nav aria-label="Menu mobile" className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex min-h-12 items-center justify-between rounded-md border border-[#D8D1C5] bg-[#EFE6D7] px-4 py-3 text-base font-black text-[#18181B] outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
              >
                {item.label}
                <span className="text-[#E11D2E]" aria-hidden="true">
                  #
                </span>
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-4 py-3 text-base font-black text-white outline-none transition-colors hover:bg-[#B91C1C] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Entrar no grupo
          </a>
        </div>
      ) : null}
    </header>
  );
}
