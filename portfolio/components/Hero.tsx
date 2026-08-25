import Image from "next/image";
import { basePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-void text-white pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
          <div>
            <p className="font-mono text-[13px] text-accent tracking-tight mb-6">
              Kota Kinabalu, Sabah — B.CS (Hons.) Software Engineering, 2026
            </p>
            <h1 className="font-display font-semibold tracking-tightest text-[44px] leading-[1.05] sm:text-[58px] md:text-[68px]">
              I build full-stack
              <br />
              systems that <span className="text-accent">real</span>
              <br />
              organisations run on.
            </h1>
            <p className="mt-8 max-w-[46ch] text-[17px] md:text-[19px] leading-relaxed text-white/60">
              Software Engineering student who has shipped backend APIs, role-based
              access control, and admin systems for government and enterprise
              platforms — including MyJetti Semporna, RUTEC, and ST Care Hub —
              during a full-stack internship at ST Datablu.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-white text-void text-[15px] font-medium rounded-full px-6 py-3 hover:bg-white/90 transition-colors"
              >
                View my work
              </a>
              <a
                href={`${basePath}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 text-white text-[15px] rounded-full px-6 py-3 hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Download résumé
              </a>
            </div>
          </div>

          <div className="relative mx-auto md:mx-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-full md:h-auto md:aspect-square rounded-full overflow-hidden border border-white/15">
              <Image
                src={`${basePath}/images/profile.jpg`}
                alt="Portrait of Mohamad Denish Jumad"
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover"
                style={{ objectPosition: "50% 22%" }}
                priority
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:right-2 md:translate-x-0 font-mono text-[11px] text-white/50 bg-void border border-white/15 rounded-full px-3 py-1 whitespace-nowrap">
              open to work · aug 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
