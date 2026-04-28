"use client";

import { AlertCircle, Info, CheckCircle2, AlertTriangle } from "lucide-react";

type CalloutType = "info" | "warning" | "success" | "error";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<CalloutType, { icon: React.ReactNode; bg: string; border: string; iconColor: string; titleColor: string; textColor: string }> = {
  info: {
    icon: <Info size={14} />,
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    iconColor: "#60a5fa",
    titleColor: "#93c5fd",
    textColor: "#94a3b8",
  },
  warning: {
    icon: <AlertTriangle size={14} />,
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    iconColor: "#fbbf24",
    titleColor: "#fcd34d",
    textColor: "#94a3b8",
  },
  success: {
    icon: <CheckCircle2 size={14} />,
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    iconColor: "#34d399",
    titleColor: "#6ee7b7",
    textColor: "#94a3b8",
  },
  error: {
    icon: <AlertCircle size={14} />,
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    iconColor: "#f87171",
    titleColor: "#fca5a5",
    textColor: "#94a3b8",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon, bg, border, iconColor, titleColor, textColor } = config[type];
  return (
    <div
      className="flex gap-3 rounded-lg px-4 py-3 my-4 text-sm leading-relaxed"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <span className="mt-0.5 shrink-0" style={{ color: iconColor }}>{icon}</span>
      <div>
        {title && <p className="font-semibold mb-1 text-xs" style={{ color: titleColor }}>{title}</p>}
        <div className="text-xs leading-relaxed" style={{ color: textColor }}>{children}</div>
      </div>
    </div>
  );
}
