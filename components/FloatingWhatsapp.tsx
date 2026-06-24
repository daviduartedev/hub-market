function WhatsAppLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-8 w-8"
      fill="currentColor"
    >
      <path d="M16.04 3.2A12.72 12.72 0 0 0 5.1 22.38L3.56 28.8l6.56-1.54A12.7 12.7 0 1 0 16.04 3.2Zm0 22.95c-1.9 0-3.76-.53-5.37-1.54l-.38-.23-3.88.91.92-3.78-.25-.39a10.2 10.2 0 1 1 8.96 5.03Zm5.6-7.64c-.31-.15-1.82-.9-2.1-1-.28-.11-.49-.16-.7.15-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.52-.91-.81-1.53-1.82-1.71-2.13-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.55 0 1.5 1.1 2.95 1.25 3.16.16.2 2.15 3.28 5.22 4.6.73.31 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.34Z" />
    </svg>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar no grupo de WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.38)] outline-none transition-transform hover:-translate-y-1 hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <WhatsAppLogo />
    </a>
  );
}
