import { ChannelCard } from "@/components/ChannelCard";
import { channels } from "@/data/channels";

export function ChannelsSection() {
  return (
    <section className="bg-[#DDE1E7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E11D2E]">
            Canais de curadoria
          </p>
          <h2 className="mt-1 font-display text-3xl font-black tracking-tight text-[#111111] sm:text-4xl">
            Entre pelo nicho que faz sentido
          </h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#555555]">
            Acompanhe listas enxutas por interesse e compre apenas quando a
            oportunidade encaixar na sua necessidade.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <ChannelCard key={channel.name} channel={channel} />
          ))}
        </div>
      </div>
    </section>
  );
}
