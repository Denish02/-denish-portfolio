import Reveal from "./Reveal";

const CERTS = [
  { name: "DevSecOps Foundation", org: "PeopleCert", date: "Jul 2026" },
  { name: "Data Analysis — Microsoft Power BI", org: "Microsoft", date: "Jul 2025" },
  { name: "Apple Teacher Certification", org: "Apple Education", date: "May 2025" },
  { name: "CCNAv7: Introduction to Networks", org: "Cisco Network Academy", date: "Sep 2024" },
  { name: "HCIA-AI V3.5", org: "Huawei ICT Academy", date: "Jul 2024" },
];

export default function Education() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <p className="font-mono text-[13px] text-accent mb-4">Education</p>
            <div className="border border-hairline rounded-2xl p-8 bg-paper">
              <p className="text-[19px] font-medium text-ink">
                Universiti Malaysia Sabah
              </p>
              <p className="text-[15px] text-fog mt-1">
                Bachelor of Computer Science (Hons.), Software Engineering
              </p>
              <div className="flex items-baseline justify-between mt-5 pt-5 border-t border-hairline">
                <span className="font-mono text-[12px] text-fog">Oct 2022 — Present</span>
                <span className="font-mono text-[12px] text-accent">CGPA 3.52</span>
              </div>
            </div>
            <div className="border border-hairline rounded-2xl p-8 bg-paper mt-5">
              <p className="text-[19px] font-medium text-ink">Labuan Matriculation College</p>
              <p className="text-[15px] text-fog mt-1">Certificate in Pure Science</p>
              <div className="flex items-baseline justify-between mt-5 pt-5 border-t border-hairline">
                <span className="font-mono text-[12px] text-fog">Aug 2020 — May 2022</span>
                <span className="font-mono text-[12px] text-accent">CGPA 3.79</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-[13px] text-accent mb-4">Certifications</p>
            <ul className="border-t border-hairline">
              {CERTS.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between gap-4 py-4 border-b border-hairline"
                >
                  <div>
                    <p className="text-[15px] text-ink font-medium">{c.name}</p>
                    <p className="text-[13px] text-fog">{c.org}</p>
                  </div>
                  <span className="font-mono text-[12px] text-fog whitespace-nowrap">{c.date}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
