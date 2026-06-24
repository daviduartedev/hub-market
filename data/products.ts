import { productImages } from "@/data/product-images";

export type Marketplace = "amazon" | "mercado_livre";

export type ProductBadge =
  | "Passou pelo Radar"
  | "Oferta monitorada"
  | "Mais visto"
  | "Boa oportunidade";

export type Product = {
  id: string;
  name: string;
  category: string;
  marketplace: Marketplace;
  image: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  badge: ProductBadge;
  affiliateUrl: string;
  note: string;
};

export const products: Product[] = [
  {
    id: "mouse-ergonomico",
    name: "Mouse sem fio ergonômico",
    category: "Tech",
    marketplace: "amazon",
    image: productImages.mouse,
    price: 89.9,
    oldPrice: 129.9,
    discountPercent: 31,
    badge: "Passou pelo Radar",
    affiliateUrl: "https://www.amazon.com.br/",
    note: "Preço sujeito a alteração",
  },
  {
    id: "headset-gamer",
    name: "Headset gamer",
    category: "Games",
    marketplace: "mercado_livre",
    image: productImages.headset,
    price: 159.9,
    oldPrice: 219.9,
    discountPercent: 27,
    badge: "Oferta monitorada",
    affiliateUrl: "https://www.mercadolivre.com.br/",
    note: "Preço sujeito a alteração",
  },
  {
    id: "suporte-notebook",
    name: "Suporte para notebook",
    category: "Escritório",
    marketplace: "mercado_livre",
    image: productImages.notebook,
    price: 69.9,
    oldPrice: 99.9,
    discountPercent: 30,
    badge: "Mais visto",
    affiliateUrl: "https://www.mercadolivre.com.br/",
    note: "Preço sujeito a alteração",
  },
  {
    id: "livro-negocios",
    name: "Livro de negócios",
    category: "Livros",
    marketplace: "amazon",
    image: productImages.businessBook,
    price: 54.9,
    oldPrice: 79.9,
    discountPercent: 31,
    badge: "Boa oportunidade",
    affiliateUrl: "https://www.amazon.com.br/",
    note: "Preço sujeito a alteração",
  },
  {
    id: "livro-tecnologia",
    name: "Livro de tecnologia",
    category: "Livros / Tech",
    marketplace: "amazon",
    image: productImages.techBook,
    price: 64.9,
    oldPrice: 89.9,
    discountPercent: 28,
    badge: "Passou pelo Radar",
    affiliateUrl: "https://www.amazon.com.br/",
    note: "Preço sujeito a alteração",
  },
  {
    id: "luminaria-led",
    name: "Luminária de mesa LED",
    category: "Casa / Escritório",
    marketplace: "mercado_livre",
    image: productImages.lamp,
    price: 74.9,
    oldPrice: 109.9,
    discountPercent: 32,
    badge: "Boa oportunidade",
    affiliateUrl: "https://www.mercadolivre.com.br/",
    note: "Preço sujeito a alteração",
  },
  {
    id: "ssd-externo",
    name: "SSD externo compacto",
    category: "Tech",
    marketplace: "amazon",
    image: productImages.ssd,
    price: 299.9,
    oldPrice: 379.9,
    discountPercent: 21,
    badge: "Mais visto",
    affiliateUrl: "https://www.amazon.com.br/",
    note: "Preço sujeito a alteração",
  },
  {
    id: "cadeira-escritorio",
    name: "Cadeira de escritório",
    category: "Escritório",
    marketplace: "mercado_livre",
    image: productImages.chair,
    price: 549.9,
    oldPrice: 699.9,
    discountPercent: 21,
    badge: "Oferta monitorada",
    affiliateUrl: "https://www.mercadolivre.com.br/",
    note: "Preço sujeito a alteração",
  },
];

export const featuredProducts = products;
export const radarFeaturedProduct = products[0];
export const mostViewedProducts = products.filter((product) =>
  ["suporte-notebook", "ssd-externo", "headset-gamer", "mouse-ergonomico"].includes(
    product.id,
  ),
);
