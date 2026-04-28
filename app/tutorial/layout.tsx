import { TableOfContents } from "@/components/TableOfContents";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export const metadata = {
  title: "Gin + Redis Quickstart | Keploy",
  description: "Step-by-step guide to recording and replaying tests with Keploy using Go, Gin, and Redis.",
};

export default function TutorialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--fg)" }}>
      {/* Nav */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-nav)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-13 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">K</div>
              <span className="text-sm font-medium transition-colors" style={{ color: "var(--fg-muted)" }}>Keploy Docs</span>
            </Link>
            <span style={{ color: "var(--border)" }}>/</span>
            <span className="text-sm" style={{ color: "var(--fg-subtle)" }}>Gin + Redis</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-14">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0">
          <TableOfContents />
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 max-w-2xl">
          {/* Page header */}
          <div className="mb-8 pb-7" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="flex items-center gap-1.5 mb-3.5">
              {["Go", "Docker", "Redis", "Gin"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{
                    background: "var(--inline-code-bg)",
                    border: "1px solid var(--inline-code-border)",
                    color: "var(--fg-subtle)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl font-bold tracking-tight mb-2" style={{ color: "var(--fg)" }}>
              Gin + Redis Quickstart
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Record real API calls as test cases automatically. No test code to write.
            </p>
          </div>

          <article className="prose-custom">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
