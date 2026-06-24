import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar no grupo de WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-[#07130B] shadow-[0_18px_38px_rgba(37,211,102,0.38)] outline-none transition-transform hover:-translate-y-1 hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
