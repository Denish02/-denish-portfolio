import Reveal from "./Reveal";

const ACTIVITIES = [
  { name: "U-Science UMS", role: "Facilitator", date: "Dec 2024 — Oct 2025" },
  { name: "Ahli Kelab Rakan Pustaka", role: "Unit Perhubungan Korporat", date: "Oct 2024 — Oct 2025" },
  { name: "Little Innovators", role: "Ketua Unit Pengangkutan", date: "Jun 2025" },
  { name: "Pesta Buku Mini", role: "Unit Urusetia", date: "May 2025" },
  { name: "TechTrek Hackathon", role: "Participant", date: "Dec 2025" },
  { name: "Program Simbes", role: "Participant", date: "Nov 2024" },
];

export default function Activities() {
  return (
    <section className="bg-paper py-24 md:py-32 border-t border-hairline">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-accent mb-4">Activities & leadership</p>
          <h2 className="font-display font-semibold tracking-tighter text-[28px] md:text-[34px] leading-[1.1] text-ink max-w-[24ch]">
            Outreach, facilitation, and a lot of workshops.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {ACTIVITIES.map((a, i) => (
            <Reveal key={a.name} delay={(i % 3) * 80}>
              <div className="border-l-2 border-hairline pl-4">
                <p className="text-[15px] text-ink font-medium">{a.name}</p>
                <p className="text-[13.5px] text-fog mt-0.5">{a.role}</p>
                <p className="font-mono text-[11.5px] text-accent mt-1">{a.date}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
