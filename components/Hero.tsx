"use client";

import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  Clock3,
  ExternalLink,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Esquenta de ofertas",
    title: "Monte seu setup sem garimpar loja por loja",
    description:
      "Achados de tecnologia, escritorio e games com marketplace visivel antes do clique.",
    cta: "Ver ofertas de Tech",
    href: "#ofertas",
    bg: "bg-[#FFE600]",
    text: "text-[#171717]",
    badge: "bg-[#18181B] text-white",
    accent: "bg-[#3483FA]",
    image: "/products/headset.svg",
    imageAlt: "Headset gamer em destaque",
    stat: "Tech + Games",
  },
  {
    eyebrow: "Radar Prime",
    title: "Livros, leitores e itens uteis para comprar com criterio",
    description:
      "Uma vitrine enxuta para comparar oportunidade, preco anterior e aviso de afiliado.",
    cta: "Abrir curadoria",
    href: "#mais-vistos",
    bg: "bg-[#0F7AF5]",
    text: "text-white",
    badge: "bg-white text-[#111111]",
    accent: "bg-[#FFB703]",
    image: "/products/reader.svg",
    imageAlt: "Leitor digital em destaque",
    stat: "Livros + Tech",
  },
  {
    eyebrow: "Casa e escritorio",
    title: "Coisas simples que melhoram a rotina de trabalho",
    description:
      "Suportes, luminarias e acessorios escolhidos para uma compra menos impulsiva.",
    cta: "Ver escritorio",
    href: "#ofertas",
    bg: "bg-[#18181B]",
    text: "text-white",
    badge: "bg-[#FFB703] text-[#18181B]",
    accent: "bg-[#E11D2E]",
    image: "/products/stand.svg",
    imageAlt: "Suporte para notebook em destaque",
    stat: "Mesa pronta",
  },
];

const quickCards = [
  {
    title: "Seu historico de busca",
    name: "Mouse ergonomico",
    price: "R$ 89,90",
    image: "/products/mouse.svg",
  },
  {
    title: "Boa oportunidade",
    name: "SSD externo compacto",
    price: "R$ 299,90",
    image: "/products/ssd.svg",
  },
  {
    title: "Menos de R$100",
    name: "Luminaria LED",
    price: "R$ 74,90",
    image: "/products/lamp.svg",
  },
  {
    title: "Mais visto hoje",
    name: "Suporte notebook",
    price: "R$ 69,90",
    image: "/products/stand.svg",
  },
];

const SLIDE_DELAY_MS = 10000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_DELAY_MS);

    return () => window.clearInterval(interval);
  }, []);

  function previousSlide() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  return (
    <section id="inicio" className="bg-[#DDE1E7] pb-8">
      <div className="mx-auto max-w-[108rem] px-0 sm:px-4 lg:px-8">
        <div className="relative overflow-hidden bg-[#C9CED6] sm:rounded-b-xl">
          <div
            className={`relative min-h-[31rem] overflow-hidden px-4 py-7 transition-colors duration-500 sm:min-h-[34rem] sm:px-10 lg:min-h-[30rem] lg:px-16 ${activeSlide.bg} ${activeSlide.text}`}
          >
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-black/10 lg:block" />
            <div className="absolute inset-y-0 right-0 hidden w-28 bg-white/15 lg:block" />
            <div
              className={`absolute right-[8%] top-12 hidden h-32 w-32 rounded-full ${activeSlide.accent} opacity-95 lg:block`}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#DDE1E7]/95 to-transparent" />

            <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_25rem] lg:items-center">
              <div className="max-w-3xl">
                <span
                  className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] ${activeSlide.badge}`}
                >
                  <BadgePercent className="h-4 w-4" aria-hidden="true" />
                  {activeSlide.eyebrow}
                </span>
                <h1 className="mt-5 max-w-[11ch] font-display text-[3rem] font-black leading-[0.92] tracking-tight sm:text-[4.5rem] lg:text-[5.75rem]">
                  {activeSlide.title}
                </h1>
                <p className="mt-5 max-w-xl text-base font-bold leading-7 opacity-85 sm:text-lg">
                  {activeSlide.description}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={activeSlide.href}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-5 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#B91C1C] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B]"
                  >
                    {activeSlide.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-current bg-white px-5 py-3 text-sm font-black text-[#18181B] outline-none transition-colors hover:bg-[#FFB703] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B]"
                  >
                    Entrar no canal
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <div className="absolute -left-4 top-5 z-10 rounded-md bg-white px-4 py-3 text-[#18181B] shadow-[0_12px_24px_rgba(0,0,0,0.16)]">
                  <p className="text-xs font-black uppercase tracking-wide text-[#E11D2E]">
                    Radar ativo
                  </p>
                  <p className="font-display text-2xl font-black">
                    {activeSlide.stat}
                  </p>
                </div>
                <img
                  src={activeSlide.image}
                  alt={activeSlide.imageAlt}
                  className="relative z-[1] h-72 w-full rotate-2 rounded-xl object-cover shadow-[0_26px_50px_rgba(0,0,0,0.18)] sm:h-80"
                />
                <div className="absolute -bottom-5 right-3 z-10 rounded-md bg-[#18181B] px-4 py-3 text-white shadow-xl">
                  <p className="text-xs font-bold text-white/70">Atualizacao</p>
                  <p className="font-display text-2xl font-black">10s</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar campanha ${index + 1}`}
                  className={`h-2.5 rounded-full border border-white/60 transition-all ${
                    activeIndex === index
                      ? "w-10 bg-white"
                      : "w-2.5 bg-[#18181B]/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Campanha anterior"
              className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#18181B] shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] md:inline-flex"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Proxima campanha"
              className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#18181B] shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] md:inline-flex"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="absolute left-0 top-0 h-1 w-full bg-black/10">
              <div
                key={activeIndex}
                className="h-full bg-[#E11D2E] motion-safe:animate-[carousel-progress_10s_linear]"
              />
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-10 grid max-w-7xl gap-3 px-4 pb-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickCards.map((card) => (
              <article
                key={card.name}
                className="grid min-h-32 grid-cols-[5.5rem_1fr] gap-3 rounded-lg border border-[#D1D5DB] bg-[#FDFBF7] p-3 shadow-[0_14px_28px_rgba(24,24,27,0.12)]"
              >
                <img
                  src={card.image}
                  alt=""
                  className="h-24 w-full rounded-md bg-[#E7EAEE] object-cover"
                />
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-[#E11D2E]">
                    {card.title}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-black leading-tight text-[#111111]">
                    {card.name}
                  </h2>
                  <p className="mt-2 text-sm font-black text-[#008A3D]">
                    {card.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-7xl gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          { label: "Marketplaces claros", icon: PackageCheck },
          { label: "Preco sujeito a mudanca", icon: Clock3 },
          { label: "Aviso afiliado visivel", icon: ShieldCheck },
        ].map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-md border border-[#CBD1DA] bg-[#FDFBF7] px-4 py-3 text-sm font-black text-[#18181B]"
          >
            <span className="grid h-9 w-9 place-items-center rounded bg-[#FFE600]">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
