import { categories } from "@/data/categories";

export function CategorySection() {
  return (
    <section id="categorias" className="bg-[#DDE3E8] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E11D2E]">
            Categorias monitoradas
          </p>
          <h2 className="mt-1 font-display text-4xl font-black text-[#111111]">
            O Radar filtra por interesse
          </h2>
        </div>
        <div className="no-scrollbar flex snap-x gap-3 overflow-x-auto [-webkit-overflow-scrolling:touch] lg:grid lg:grid-cols-6 lg:overflow-visible">
          {categories.map((category) => (
            <a
              key={category.label}
              href={category.href}
              className="group relative min-h-48 w-56 shrink-0 snap-start overflow-hidden rounded-lg bg-[#111111] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2 lg:w-auto"
            >
              <img
                src={category.image}
                alt={`Imagem realista da categoria ${category.label}`}
                className="absolute inset-0 h-full w-full object-cover opacity-62 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-2xl font-black">
                  {category.label}
                </h3>
                <p className="mt-2 text-xs font-bold leading-5 text-white/75">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
