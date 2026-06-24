import { ArrowUpRight } from "lucide-react";
import type { Channel } from "@/data/channels";

type ChannelCardProps = {
  channel: Channel;
};

export function ChannelCard({ channel }: ChannelCardProps) {
  const Icon = channel.icon;

  return (
    <article className="rounded-lg border border-[#C9CED6] bg-[#FDFBF7] p-5 shadow-[0_8px_18px_rgba(24,24,27,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#18181B] text-[#FFB703]">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="rounded-md bg-[#FFB703] px-2.5 py-1 text-xs font-black text-[#18181B]">
          Canal
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-black text-[#111111]">
        {channel.name}
      </h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#555555]">
        {channel.description}
      </p>
      <p className="mt-3 rounded-md bg-[#EDE6DA] p-3 text-sm font-black text-[#18181B]">
        {channel.benefit}
      </p>
      <a
        href={channel.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#E11D2E] px-4 py-3 text-sm font-black text-white outline-none transition-colors hover:bg-[#B91C1C] focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2"
      >
        Entrar no canal
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
