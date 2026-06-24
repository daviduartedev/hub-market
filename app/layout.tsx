import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://radardeofertas.local",
  ),
  title: "Radar | Ofertas selecionadas da Amazon e Mercado Livre",
  description:
    "Se é promoção, passa pelo Radar. Vitrine curada de ofertas com links afiliados para Amazon e Mercado Livre.",
  openGraph: {
    title: "Radar | Se é promoção, passa pelo Radar",
    description:
      "Produtos úteis monitorados em uma vitrine simples, direta e curada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
