import Reveal from "./Reveal";

const TIERS = [
  {
    label: "Advanced",
    items: ["HTML", "CSS", "PHP", "IoT Sensor Integration", "Microcontroller Programming", "Data Visualisation"],
  },
  {
    label: "Intermediate",
    items: ["Python", "JavaScript", "MySQL", "Database Design", "UI/UX Design", "Figma", "Java", "C++", "MIT App Inventor"],
  },
  {
    label: "Basic",
    items: ["C#", "Ruby on Rails", "Power BI", "SQLite", "AR/VR Development", "Cisco Packet Tracer", "Android Studio", "Linux", "Huawei Cloud", "Unity", "DBeaver"],
  },
];

const TOOLS = ["Docker", "CI/CD", "REST APIs", "Vue i18n", "Git", "GitHub Actions", "Trivy", "Semgrep", "OWASP ZAP"];

export default function Skills() {
  return (
    <section id="skills" className="bg-void text-white py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-accent mb-4">Stack</p>
          <h2 className="font-display font-semibold tracking-tighter text-[32px] md:text-[40px] leading-[1.1] max-w-[18ch]">
            Proficiency, by how much I've shipped with it.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-hairlineDark">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.label} delay={i * 80}>
              <div className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8 py-7 border-b border-hairlineDark items-baseline">
                <p className="font-mono text-[13px] text-white/50">{tier.label}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {tier.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[13px] text-white/90 border border-white/15 rounded px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-10">
            <p className="font-mono text-[13px] text-white/50 mb-4">Engineering practice</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[13px] text-accent border border-accent/40 rounded px-2.5 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
