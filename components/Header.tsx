"use client";

import {
  Menu,
  MessageCircle,
  Search,
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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111111] text-white shadow-[0_8px_28px_rgba(17,17,17,0.22)]">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <a
          href="#inicio"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center rounded-md text-white outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
        >
          <span>
            <span className="block font-display text-3xl font-black leading-none tracking-tight">
              Radar
            </span>
            <span className="hidden text-[11px] font-black uppercase tracking-[0.16em] text-[#FFB703] sm:block">
              hub market
            </span>
          </span>
        </a>

        <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-md border border-white/15 bg-white/[0.08] px-4 py-3 text-white/70 md:flex">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-[#FFB703] text-[#111111]">
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
              className="rounded-md text-[0.95rem] font-bold text-white/78 outline-none transition-colors hover:text-[#FFB703] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-black text-[#07130B] outline-none transition-colors hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] sm:px-5"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Entrar no grupo</span>
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white outline-none transition-colors hover:border-white/45 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] lg:hidden"
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
          className="border-t border-white/10 bg-[#151515] px-4 py-4 shadow-[0_20px_35px_rgba(24,24,27,0.28)] lg:hidden"
        >
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <label className="sr-only" htmlFor="mobile-search">
              Buscar ofertas
            </label>
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/15 bg-white/[0.08] px-3 py-2">
              <Search className="h-4 w-4 shrink-0 text-[#FFB703]" aria-hidden="true" />
              <input
                id="mobile-search"
                type="search"
                placeholder="Buscar ofertas"
                className="min-w-0 flex-1 bg-transparent text-base font-bold text-white outline-none placeholder:text-white/50"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#FFB703] px-4 py-2 text-sm font-black text-[#111111] outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
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
                className="flex min-h-12 items-center justify-between rounded-md border border-white/12 bg-white/[0.07] px-4 py-3 text-base font-black text-white outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
              >
                {item.label}
                <span className="text-[#FFB703]" aria-hidden="true">
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
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-base font-black text-[#07130B] outline-none transition-colors hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Entrar no grupo
          </a>
        </div>
      ) : null}
    </header>
  );
}
