"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "prerequisites", label: "Prerequisites" },
  { id: "quickstart", label: "Quickstart" },
  { id: "step-1", label: "1. Clone the repo", indent: true },
  { id: "step-2", label: "2. Install Keploy", indent: true },
  { id: "step-3", label: "3. Start Redis", indent: true },
  { id: "step-4", label: "4. Build the image", indent: true },
  { id: "step-5", label: "5. Record test cases", indent: true },
  { id: "step-6", label: "6. Make API calls", indent: true },
  { id: "step-7", label: "7. Run tests", indent: true },
  { id: "understanding", label: "What Keploy captured" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

export function TableOfContents() {
  const [active, setActive] = useState("overview");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <nav className="sticky top-16 space-y-0.5">
      <p
        className="font-semibold uppercase tracking-widest mb-3"
        style={{ fontSize: "0.7rem", color: "var(--fg-subtle)" }}
      >
        On this page
      </p>
      {sections.map(({ id, label, indent }) => {
        const isActive = active === id;
        const isHovered = hovered === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="block py-1 rounded"
            style={{
              fontSize: "0.8rem",
              paddingLeft: indent ? "1rem" : "0.5rem",
              paddingRight: "0.5rem",
              color: isActive ? "#818cf8" : isHovered ? "var(--fg)" : "var(--fg-subtle)",
              background: isActive
                ? "rgba(99,102,241,0.08)"
                : isHovered
                ? "rgba(128,128,128,0.08)"
                : "transparent",
              fontWeight: isActive ? 500 : 400,
              transition: "color 0.15s, background 0.15s",
              cursor: "pointer",
              textDecoration: "none",
              display: "block",
            }}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
