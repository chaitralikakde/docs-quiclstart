"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ children, language = "bash", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="my-4 rounded-[10px] overflow-hidden"
      style={{
        background: "var(--code-bg)",
        border: "1px solid var(--border)",
      }}
    >
      {filename && (
        <div
          className="flex items-center px-4 py-2"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <span className="text-xs font-mono" style={{ color: "var(--fg-subtle)" }}>
            {filename}
          </span>
        </div>
      )}
      <div className="relative group">
        <pre
          className="p-4 overflow-x-auto leading-relaxed m-0"
          style={{
            fontSize: "0.9375rem",
            background: "transparent",
            border: "none",
            borderRadius: 0,
            fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
          }}
        >
          <code style={{ color: "var(--code-text)" }}>{children.trim()}</code>
        </pre>
        <button
          onClick={copy}
          className="absolute top-3 right-3 p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "var(--fg-subtle)",
          }}
          aria-label="Copy code"
        >
          {copied ? <Check size={13} style={{ color: "#34d399" }} /> : <Copy size={13} />}
        </button>
      </div>
    </div>
  );
}
