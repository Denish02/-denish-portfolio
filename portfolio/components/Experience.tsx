import Reveal from "./Reveal";

const ROLES = [
  {
    period: "Mar 2026 — Aug 2026",
    title: "Software Engineering Intern",
    org: "ST Datablu · Kota Kinabalu (On-site)",
    bullets: [
      "Developed and enhanced full-stack web applications: backend APIs, frontend interfaces, and system modules for authentication, role management, receipts, and reporting.",
      "Designed responsive UI components and prototypes in Figma, improving usability across multiple enterprise systems.",
      "Ran system analysis, requirement gathering, ERD design, documentation, and testing for government and enterprise projects, working directly with stakeholders.",
      "Supported data preparation and technical documentation for digital transformation projects.",
    ],
  },
  {
    period: "May 2025 — Present",
    title: "Freelance Facilitator / Teacher",
    org: "Smart Native Maker · Kota Kinabalu (Hybrid)",
    bullets: [
      "Delivered hands-on training using MIT App Inventor, covering mobile app UI design and application logic.",
      "Ran workshops on generative AI and prompt engineering with Google Gemini for diverse learner groups.",
      "Handled lesson prep, participant guidance, and post-session support.",
    ],
  },
  {
    period: "Apr 2025 — Present",
    title: "Volunteer",
    org: "Petrosains Sdn Bhd · Kota Kinabalu (On-site)",
    bullets: [
      "Assisted staff with exhibitions, STEM activities, and daily operational support.",
      "Supported STEM sessions, including introductory Arduino Uno activities for children.",
      "Engaged visitors and students to build understanding of science and technology concepts.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ink text-white py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-accent mb-4">Experience</p>
          <h2 className="font-display font-semibold tracking-tighter text-[32px] md:text-[40px] leading-[1.1] max-w-[18ch]">
            Where the work actually happened.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 100}>
              <div className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-10">
                <div>
                  <p className="font-mono text-[13px] text-white/50">{role.period}</p>
                </div>
                <div>
                  <h3 className="text-[20px] font-medium text-white">{role.title}</h3>
                  <p className="text-[14px] text-accent mt-1">{role.org}</p>
                  <ul className="mt-4 space-y-2.5">
                    {role.bullets.map((b) => (
                      <li key={b} className="text-[15px] leading-relaxed text-white/65 pl-4 relative">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-white/25" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
