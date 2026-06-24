import { categories } from "@/data/categories";

export function CategoryNav() {
  return (
    <nav
      id="categorias"
      aria-label="Categorias"
      className="border-b border-[#E5E7EB] bg-[#18181B]"
    >
      <div className="mx-auto flex max-w-7xl snap-x gap-2 overflow-x-auto px-4 py-3 [-webkit-overflow-scrolling:touch] sm:px-6 lg:px-8">
        {categories.map((category) => (
          <a
            key={category.label}
            href={category.href}
            className="min-h-11 shrink-0 snap-start rounded-md border border-white/15 bg-white px-4 py-2 text-sm font-black text-[#18181B] outline-none transition-colors hover:bg-[#FFB703] focus-visible:ring-2 focus-visible:ring-[#FFB703] focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B]"
          >
            {category.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
