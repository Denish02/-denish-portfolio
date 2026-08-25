import Reveal from "./Reveal";

const LINKS = [
  { label: "Email", value: "denishjumad@gmail.com", href: "mailto:denishjumad@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/mdenishjumad", href: "https://www.linkedin.com/in/mdenishjumad" },
  { label: "GitHub", value: "github.com/Denish02", href: "https://github.com/Denish02" },
  { label: "Phone", value: "+60 13-280 9762", href: "tel:+60132809762" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-void text-white py-24 md:py-36">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-[13px] text-accent mb-4">Contact</p>
          <h2 className="font-display font-semibold tracking-tightest text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] max-w-[16ch]">
            Let's build something that has to work.
          </h2>
          <p className="mt-6 text-[17px] text-white/55 max-w-[48ch]">
            Open to internships and software engineering roles. I reply fastest
            over email.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid sm:grid-cols-2 gap-x-8 gap-y-0 border-t border-white/10">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-6 border-b border-white/10"
              >
                <span className="font-mono text-[13px] text-white/40">{l.label}</span>
                <span className="text-[16px] text-white/90 group-hover:text-accent transition-colors">
                  {l.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-content px-6 mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p className="font-mono text-[12px] text-white/35">
          Mohamad Denish Jumad bin Jamil — Kota Kinabalu, Sabah
        </p>
        <p className="font-mono text-[12px] text-white/35">
          Built with Next.js & Tailwind
        </p>
      </div>
    </section>
  );
}
