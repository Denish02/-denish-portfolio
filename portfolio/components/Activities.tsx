import Reveal from "./Reveal";

const ACTIVITIES = [
  { name: "TechTrek Hackathon", role: "Participant", date: "Dec 2025", desc: "Collaborated on SKILL UP, a green workforce learning prototype. Received a team participation award and developed pitching, teamwork and app planning skills.", href: "#skill-up" },
  { name: "U-Science UMS", role: "Facilitator", date: "Dec 2024 — Oct 2025", desc: "Conducted school workshops and guided students through practical IoT and technology activities." },
  { name: "Kelab Rakan Pustaka", role: "Corporate Relations Unit", date: "Oct 2024 — Oct 2025", desc: "Acted as a liaison with corporate partners, coordinated communications and supported engagement activities." },
  { name: "Little Innovators", role: "Transportation Unit Lead", date: "Jun 2025", desc: "Led transportation coordination for remote school outreach, taught IoT and mBlock, and helped design learning materials and visual aids using Figma." },
  { name: "Pesta Buku Mini", role: "Secretariat Unit", date: "May 2025", desc: "Managed registration, nametag design and logistics coordination, and supported event operations." },
  { name: "Program Simbes", role: "Participant", date: "Nov 2024", desc: "Joined team activities and workshops to develop technical and teamwork skills." },
];

export default function Activities() {
  return (
    <section id="activities" className="bg-paper py-24 md:py-32 border-t border-hairline">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-accent mb-4">Activities & leadership</p>
          <h2 className="font-display font-semibold tracking-tighter text-[28px] md:text-[34px] leading-[1.1] text-ink max-w-[24ch]">Outreach, facilitation, and learning together.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, index) => (
            <Reveal key={activity.name} delay={(index % 3) * 80}>
              <div className="border-l-2 border-hairline pl-4">
                <h3 className="text-[15px] text-ink font-medium">{activity.name}</h3>
                <p className="text-[13.5px] text-fog mt-1">{activity.role}</p>
                <p className="font-mono text-xs text-accent mt-2">{activity.date}</p>
                <p className="text-sm text-fog leading-relaxed mt-3">{activity.desc}</p>
                {activity.href && <a href={activity.href} className="inline-block mt-3 text-sm text-accent underline underline-offset-4">View SKILL UP project</a>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
