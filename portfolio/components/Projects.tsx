import Reveal from "./Reveal";

const OTHER_PROJECTS = [
  {
    title: "EcoBook UMS",
    subtitle: "Eco Campus booking system — Final Year Project",
    stack: ["Python", "PHP", "MySQL", "A-Frame (AR)", "JavaScript"],
    desc: "Web-based booking and management system for UMS Eco Campus services, with real-time reservation handling and an AR virtual-environment tour built on A-Frame.",
  },
  {
    title: "Kokol Mamahill",
    subtitle: "Campsite management system",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    desc: "Booking and reservation management for a campsite, with availability tracking and a straightforward admin interface.",
  },
  {
    title: "Employee Leave Management",
    subtitle: "Android application",
    stack: ["Kotlin", "SQLite", "Android Studio"],
    desc: "Mobile app for submitting and approving employee leave, with request tracking backed by a local SQLite database.",
  },
  {
    title: "Hijab Tudung E-Commerce",
    subtitle: "Web storefront",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    desc: "Product listings, cart, and order management for a hijab retail storefront, with a responsive front end.",
  },
  {
    title: "The Strangers Encounter Pt. 3",
    subtitle: "AR colouring book",
    stack: ["Unity", "C#", "AR"],
    desc: "Interactive AR colouring book with storytelling elements, designed around a child-friendly interaction flow.",
  },
  {
    title: "Smart Fire Alarm System",
    subtitle: "IoT early-detection device",
    stack: ["IoT", "Sensors", "Microcontroller"],
    desc: "Sensor-driven fire detection with a microcontroller and real-time alerting to notify users of hazards early.",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-accent mb-4">Selected work</p>
          <h2 className="font-display font-semibold tracking-tighter text-[32px] md:text-[40px] leading-[1.1] text-ink max-w-[20ch]">
            Six projects, one habit: ship it properly or don't ship it.
          </h2>
        </Reveal>

        {/* Featured project */}
        <Reveal delay={100}>
          <div className="mt-14 border border-hairline rounded-2xl overflow-hidden bg-ink text-white">
            <div className="p-8 md:p-12">
              <p className="font-mono text-[12px] text-accent mb-3">Featured — Personal project</p>
              <h3 className="font-display font-semibold text-[26px] md:text-[32px] tracking-tight">
                DevSecOps CI/CD Pipeline
              </h3>
              <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-white/65">
                An end-to-end pipeline in GitHub Actions that scans every pull
                request and release for leaked secrets, vulnerable dependencies,
                insecure code, and risky container images before deployment.
                Trivy handles secrets, dependency, and image scanning; Semgrep
                runs static analysis for SQL injection, hardcoded keys, and
                missing auth; OWASP ZAP dynamically scans the running app. Each
                finding routes through a defined gate — block, warn-and-track, or
                accept-and-log — so critical issues never reach production.
                Documented end-to-end: pipeline walkthrough, run guide, and a
                technical writeup of every tool and policy decision.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["GitHub Actions", "Trivy", "Semgrep", "OWASP ZAP"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[12px] text-white/80 border border-white/20 rounded px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid of other projects */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <div className="h-full border border-hairline rounded-2xl p-7 hover:border-ink/30 transition-colors">
                <h3 className="font-display font-semibold text-[19px] text-ink tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-[13px] text-accent">{p.subtitle}</p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-fog">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11.5px] text-ink/70 border border-hairline rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
