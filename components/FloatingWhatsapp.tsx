import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar no grupo de WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-black text-[#07130B] shadow-[0_18px_38px_rgba(37,211,102,0.38)] outline-none transition-transform hover:-translate-y-1 hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:px-5"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Grupo no WhatsApp</span>
    </a>
  );
}
