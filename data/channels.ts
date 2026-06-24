import { BookOpen, MonitorSmartphone, type LucideIcon } from "lucide-react";

export type Channel = {
  name: string;
  description: string;
  benefit: string;
  href: string;
  icon: LucideIcon;
};

export const channels: Channel[] = [
  {
    name: "Tech",
    description: "Alertas de tecnologia, escritório e acessórios úteis.",
    benefit: "O Radar encontra. Você decide se vale a pena.",
    href: "https://wa.me/",
    icon: MonitorSmartphone,
  },
  {
    name: "Livros",
    description: "Livros de negócios, tecnologia e repertório.",
    benefit: "Achados selecionados antes de chegarem até você.",
    href: "https://wa.me/",
    icon: BookOpen,
  },
];
