"use client";

import {
  Code2, Server, Globe, Layers,
  Zap, ShieldCheck, GitBranch, MonitorSmartphone,
  ArrowRight, CheckCircle2,
} from "lucide-react";

export default function WebDevelopmentPage() {
  const services = [
    { icon: <Code2 className="w-7 h-7" />,           title: "Frontend Development",    desc: "React, Next.js, Vue and Tailwind CSS for stunning, fast UIs.",                accent: "#38bdf8", glow: "rgba(56,189,248,0.18)"  },
    { icon: <Server className="w-7 h-7" />,           title: "Backend Development",     desc: "Node.js, Express, Python — scalable APIs and server systems.",                accent: "#34d399", glow: "rgba(52,211,153,0.18)"  },
    { icon: <Globe className="w-7 h-7" />,            title: "Full-Stack Web Apps",     desc: "End-to-end web applications from concept to deployment.",                      accent: "#a78bfa", glow: "rgba(167,139,250,0.18)" },
    { icon: <MonitorSmartphone className="w-7 h-7"/>, title: "Responsive Design",       desc: "Pixel-perfect, mobile-first layouts for every screen size.",                   accent: "#f472b6", glow: "rgba(244,114,182,0.18)" },
    { icon: <Zap className="w-7 h-7" />,              title: "Performance Optimization",desc: "Lightning-fast load times, Core Web Vitals and SEO tuning.",                   accent: "#fbbf24", glow: "rgba(251,191,36,0.18)"  },
    { icon: <ShieldCheck className="w-7 h-7" />,      title: "Security & Auth",         desc: "Secure APIs, JWT auth, OAuth and enterprise-grade protection.",                accent: "#f87171", glow: "rgba(248,113,113,0.18)" },
    { icon: <GitBranch className="w-7 h-7" />,        title: "CI/CD & DevOps",          desc: "GitHub Actions, Docker, AWS — automated pipelines and deploys.",               accent: "#22d3ee", glow: "rgba(34,211,238,0.18)"  },
    { icon: <Layers className="w-7 h-7" />,           title: "CMS & E-Commerce",        desc: "Headless CMS, Shopify and custom e-commerce storefronts.",                     accent: "#818cf8", glow: "rgba(129,140,248,0.18)" },
  ];

  const stack = ["Next.js","React","TypeScript","Node.js","Tailwind CSS","PostgreSQL","MongoDB","Docker","AWS","Vercel","Prisma","GraphQL"];

  const process = [
    { step: "01", title: "Discovery",   desc: "We understand your goals, audience and technical requirements." },
    { step: "02", title: "Design",      desc: "UI/UX wireframes, design systems and interactive prototypes."   },
    { step: "03", title: "Development", desc: "Clean, scalable code with continuous reviews and testing."      },
    { step: "04", title: "Launch",      desc: "Deployment, performance checks and post-launch support."        },
  ];

  const reasons = [
    "Clean, documented and maintainable code",
    "On-time delivery with milestone updates",
    "Post-launch support and maintenance",
    "Transparent pricing, no hidden costs",
    "Direct communication with developers",
    "Performance-first approach on every project",
  ];

  return (
    <main style={{ minHeight: "100vh", overflow: "hidden", backgroundColor: "var(--bg)", color: "var(--text)", transition: "background-color 0.3s, color 0.3s" }}>
    

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "10rem 4rem 8rem", textAlign: "center", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>

        <div style={{ position: "absolute", top: -100, right: -100, width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />

        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", backgroundImage: "radial-gradient(circle,rgba(56,189,248,1) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(56,189,248,0.35)", background: "rgba(56,189,248,0.1)", marginBottom: 36 }}>
            <Code2 style={{ width: 14, height: 14, color: "#38bdf8" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#38bdf8" }}>WEB DEVELOPMENT</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: "var(--text)" }}>
            We Build{" "}
            <span style={{ background: "linear-gradient(135deg,#38bdf8 0%,#34d399 55%,#a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Web Experiences
            </span>
            {" "}That Convert
          </h1>

          <p style={{ maxWidth: 560, margin: "0 auto 48px", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            From landing pages to complex web applications — we design and build digital products that are fast, beautiful and scalable.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 16, background: "linear-gradient(135deg,#38bdf8,#34d399)", color: "#0f172a", fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer" }}>
              Start Your Project <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
            <button style={{ padding: "14px 32px", borderRadius: 16, fontWeight: 700, fontSize: 14, border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-muted)", cursor: "pointer" }}>
              See Our Work →
            </button>
          </div>

        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>What We Build</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>Full-spectrum web development services for modern businesses.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {services.map((s, i) => (
              <Card key={i} accent={s.accent} glow={s.glow}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: `${s.accent}1a`, color: s.accent, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ padding: "4rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", color: "var(--text-sub)", marginBottom: 28, textTransform: "uppercase" }}>Technologies We Use</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {stack.map((tech, i) => (
              <span key={i} style={{ padding: "8px 18px", borderRadius: 12, fontSize: "0.875rem", fontWeight: 600, border: "1px solid var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-muted)", cursor: "default" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>How We Work</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>A proven process that delivers results, every time.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {process.map((p, i) => (
              <div key={i} style={{ borderRadius: 20, border: "1px solid var(--border)", backgroundColor: "var(--bg-card)", padding: 28 }}>
                <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1, marginBottom: 16, background: "linear-gradient(135deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{p.step}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: "5rem 4rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56, alignItems: "center" }}>

          <div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, color: "var(--text)", lineHeight: 1.2, marginBottom: 16 }}>
              Why clients choose{" "}
              <span style={{ background: "linear-gradient(135deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                us over others
              </span>
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>We don't just write code — we build products that solve real problems and grow with your business.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {reasons.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckCircle2 style={{ width: 20, height: 20, color: "#34d399", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 4rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", borderRadius: 32, border: "1px solid var(--border)", backgroundColor: "var(--bg-card)", padding: "5rem 3rem", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 400, height: 200, background: "radial-gradient(ellipse,rgba(56,189,248,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
          <Globe style={{ width: 32, height: 32, color: "#38bdf8", margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, color: "var(--text)", lineHeight: 1.15, marginBottom: 20 }}>
            Let's build your next{" "}
            <span style={{ background: "linear-gradient(135deg,#38bdf8,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              digital product
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
            From a simple landing page to a complex SaaS platform — we deliver quality web development that drives results.
          </p>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 40px", borderRadius: 16, background: "linear-gradient(135deg,#38bdf8,#34d399)", color: "#0f172a", fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer" }}>
            Start Your Project <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </section>

    </main>
  );
}

function Card({ children, accent, glow }: { children: React.ReactNode; accent: string; glow: string }) {
  return (
    <div
      style={{ position: "relative", borderRadius: 20, border: "1px solid var(--border)", backgroundColor: "var(--bg-card)", padding: 28, transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s", cursor: "default" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = `0 0 40px ${glow}`;
        el.style.borderColor = `${accent}55`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--border)";
      }}
    >
      {children}
    </div>
  );
}