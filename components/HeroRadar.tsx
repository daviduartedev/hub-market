"use client";

import { ArrowLeft, ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { marketplaceLabels } from "@/components/marketplace";
import { products } from "@/data/products";

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const slideCopy = [
  {
    eyebrow: "Oferta abrindo a vitrine",
    title: "Tecnologia útil com preço para decidir rápido.",
    text: "Uma seleção rotativa no ritmo de marketplace: imagem grande, preço claro e origem visível antes do clique.",
  },
  {
    eyebrow: "Mais procurado agora",
    title: "Achados para trabalho, casa e rotina conectada.",
    text: "O Hub Market troca o destaque automaticamente para você ver oportunidades diferentes sem garimpar.",
  },
  {
    eyebrow: "Curadoria em movimento",
    title: "A vitrine muda, o critério continua.",
    text: "Ofertas passam pelo Radar com preço de referência, categoria e aviso comercial sempre por perto.",
  },
];

export function HeroRadar() {
  const slides = useMemo(
    () =>
      products.slice(0, 5).map((product, index) => ({
        product,
        ...slideCopy[index % slideCopy.length],
      })),
    [],
  );
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const slide = slides[activeSlide];
  const product = slide.product;

  function goToSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <section id="inicio" className="overflow-hidden bg-[#101010] text-white">
      <div className="relative mx-auto min-h-[620px] max-w-[1600px]">
        {slides.map(({ product: item }, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Imagem realista representando ${item.name}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeSlide ? "opacity-45" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#101010_0%,rgba(16,16,16,0.9)_34%,rgba(16,16,16,0.38)_68%,rgba(16,16,16,0.8)_100%)]" />

        <div className="relative grid min-h-[620px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_25rem] lg:px-8 lg:py-16 xl:px-12">
          <div className="flex max-w-4xl flex-col justify-center">
            <span className="inline-flex w-fit rounded-md bg-[#FFB703] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#111111]">
              {slide.eyebrow}
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-[3rem] font-black leading-[0.95] tracking-tight sm:text-[4.75rem] lg:text-[6rem]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/78 sm:text-lg">
              {slide.text}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-black text-[#07130B] outline-none transition-colors hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                Entrar no grupo de WhatsApp
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/70 bg-white px-5 py-3 text-sm font-black text-[#111111] outline-none transition-colors hover:bg-[#FFB703] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                Abrir oferta em destaque
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="self-end border border-white/12 bg-white p-4 text-[#111111] shadow-[0_24px_70px_rgba(0,0,0,0.35)] lg:self-center">
            <div className="relative overflow-hidden bg-[#E7EAEE]">
              <img
                src={product.image}
                alt={`Imagem realista representando ${product.name}`}
                className="h-60 w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-md bg-[#111111] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#FFB703]">
                {marketplaceLabels[product.marketplace]}
              </span>
            </div>
            <div className="pt-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E11D2E]">
                {product.badge}
              </p>
              <h2 className="mt-2 font-display text-3xl font-black leading-tight">
                {product.name}
              </h2>
              <div className="mt-3 flex flex-wrap items-end gap-2">
                <strong className="font-display text-3xl font-black">
                  {moneyFormatter.format(product.price)}
                </strong>
                {product.oldPrice ? (
                  <span className="pb-1 text-sm font-bold text-[#525252] line-through">
                    {moneyFormatter.format(product.oldPrice)}
                  </span>
                ) : null}
              </div>
              {product.discountPercent ? (
                <p className="mt-1 text-sm font-black text-[#15803D]">
                  {product.discountPercent}% abaixo do preço anterior informado
                </p>
              ) : null}
              <p className="mt-2 text-xs font-bold text-[#525252]">
                Preço sujeito a alteração. Link afiliado.
              </p>
            </div>
          </aside>

          <div className="absolute bottom-5 left-4 right-4 flex items-center justify-between gap-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 xl:left-12 xl:right-12">
            <div className="flex gap-2">
              {slides.map(({ product: item }, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Ver oferta ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-10 bg-[#FFB703]"
                      : "w-2.5 bg-white/45 hover:bg-white"
                  }`}
                />
              ))}
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                aria-label="Oferta anterior"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white outline-none transition-colors hover:bg-white hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-white"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                aria-label="Próxima oferta"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white outline-none transition-colors hover:bg-white hover:text-[#111111] focus-visible:ring-2 focus-visible:ring-white"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div
              key={activeSlide}
              className="absolute -bottom-5 left-0 h-1 bg-[#25D366]"
              style={{ animation: "carousel-progress 10s linear forwards" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
