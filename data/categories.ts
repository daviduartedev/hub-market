export type Category = {
  label: string;
  href: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    label: "Tech",
    href: "#ofertas",
    description: "Periféricos, armazenamento e eletrônicos úteis.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Livros",
    href: "#ofertas",
    description: "Negócios, tecnologia e repertório para comprar com critério.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Casa",
    href: "#ofertas",
    description: "Achados para rotina, mesa e organização.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Games",
    href: "#ofertas",
    description: "Audio, conforto e acessorios para jogar melhor.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Escritório",
    href: "#ofertas",
    description: "Produtos para montar uma mesa mais funcional.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Mais vistos",
    href: "#mais-vistos",
    description: "O que mais chamou atenção no Radar.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
  },
];
