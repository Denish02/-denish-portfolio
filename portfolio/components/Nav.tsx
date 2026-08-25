"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-md border-b border-hairlineDark" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-content px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-[13px] tracking-tight text-white/90 hover:text-white transition-colors"
        >
          DJ<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-[13px] text-white/90 border border-white/25 rounded-full px-4 py-1.5 hover:border-white/60 hover:bg-white/5 transition-colors"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
