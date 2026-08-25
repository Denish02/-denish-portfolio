import Reveal from "./Reveal";

const NOW = [
  { role: "B.CS (Hons.) Software Engineering", org: "Universiti Malaysia Sabah", status: "Graduating 2026" },
  { role: "Freelance Facilitator", org: "Smart Native Maker", status: "Since May 2025" },
  { role: "Volunteer", org: "Petrosains Sdn Bhd", status: "Since Apr 2025" },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <p className="font-mono text-[13px] text-accent mb-4">About</p>
            <h2 className="font-display font-semibold tracking-tighter text-[32px] md:text-[40px] leading-[1.1] text-ink">
              Systems thinking, applied to real institutions.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-fog max-w-[52ch]">
              My work sits at the intersection of full-stack development and
              system analysis — designing ERDs and architecture before writing a
              line of backend code, then implementing authentication, role-based
              access, and multilingual interfaces on top of it. I've carried that
              across government and enterprise digital systems: MyJetti Semporna,
              Rural Tourism, RUTEC, ST Care Hub, DOFi, and IDS.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-fog max-w-[52ch]">
              Outside client work, I teach — running workshops on app development
              and generative AI for learners with Smart Native Maker, and
              volunteering on STEM programming at Petrosains. I'd rather explain a
              system clearly than leave it a black box, for users or for teammates.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="border-t border-hairline pt-6">
              <p className="font-mono text-[13px] text-fog mb-6">Right now</p>
              <ul className="space-y-6">
                {NOW.map((item) => (
                  <li
                    key={item.role}
                    className="flex items-baseline justify-between gap-4 border-b border-hairline pb-5"
                  >
                    <div>
                      <p className="text-[16px] text-ink font-medium">{item.role}</p>
                      <p className="text-[14px] text-fog mt-0.5">{item.org}</p>
                    </div>
                    <span className="font-mono text-[12px] text-accent whitespace-nowrap">
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
