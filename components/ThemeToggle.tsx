"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        padding: "6px",
        borderRadius: "8px",
        border: "1px solid var(--border)",
        background: "transparent",
        color: "var(--fg-subtle)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.15s, background 0.15s",
      }}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
