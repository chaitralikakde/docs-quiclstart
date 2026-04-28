"use client";

interface StepCardProps {
  id?: string;
  step: number;
  title: string;
  children: React.ReactNode;
}

export function StepCard({ id, step, title, children }: StepCardProps) {
  return (
    <div id={id} style={{ display: "flex", gap: "14px", padding: "20px 0", scrollMarginTop: "5rem" }}>
      <div
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "50%",
          flexShrink: 0,
          background: "rgba(99, 102, 241, 0.15)",
          border: "1px solid rgba(99, 102, 241, 0.3)",
          color: "#a5b4fc",
          fontSize: "11px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          marginTop: "1px",
        }}
      >
        {step}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--fg)",
            margin: "0 0 12px 0",
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>
        <div style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--fg-muted)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
