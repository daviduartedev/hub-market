"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setOpen(true), 700);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/55 px-4">
      <div className="relative w-full max-w-md border-4 border-[#111111] bg-[#FFB703] p-6 text-[#111111] shadow-[14px_14px_0_rgba(17,17,17,0.55)]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar newsletter"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center border-2 border-[#111111] bg-white text-[#111111] outline-none transition-colors hover:bg-[#111111] hover:text-white focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="text-xs font-black uppercase tracking-[0.2em]">
          Newsletter Radar
        </p>
        <h2 className="mt-3 max-w-sm font-display text-4xl font-black leading-[0.95]">
          Receba achados antes de todo mundo.
        </h2>
        <p className="mt-4 text-sm font-bold leading-6">
          Campo travado por enquanto. A tela serve só para validar o visual da
          captura de e-mail.
        </p>

        <label className="mt-6 block text-xs font-black uppercase tracking-wide">
          Seu melhor e-mail
        </label>
        <input
          type="email"
          disabled
          placeholder="voce@email.com"
          className="mt-2 h-13 w-full border-2 border-[#111111] bg-white px-4 text-base font-black text-[#111111] placeholder:text-[#555555] disabled:cursor-not-allowed disabled:opacity-100"
        />
        <button
          type="button"
          disabled
          className="mt-4 h-13 w-full border-2 border-[#111111] bg-[#111111] px-4 text-sm font-black uppercase tracking-wide text-white disabled:cursor-not-allowed"
        >
          Entrar na lista
        </button>
      </div>
    </div>
  );
}
