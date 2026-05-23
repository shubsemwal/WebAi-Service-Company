"use client";

import {
  Cloud,
  Server,
  Shield,
  Container,
  GitBranch,
  Layers,
  Database,
  Terminal,
  Activity,
  Zap,
  Lock,
  Monitor,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function CloudDevOpsPage() {
  const services = [
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Cloud Infrastructure",
      desc: "Scalable cloud architecture on AWS, Azure and GCP with high availability.",
      accent: "#38bdf8",
      glow: "rgba(56,189,248,0.18)",
    },
    {
      icon: <Container className="w-7 h-7" />,
      title: "Containerization",
      desc: "Docker-based container setups for consistent deployment across environments.",
      accent: "#34d399",
      glow: "rgba(52,211,153,0.18)",
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Kubernetes Orchestration",
      desc: "Automated scaling, load balancing and container orchestration using K8s.",
      accent: "#a78bfa",
      glow: "rgba(167,139,250,0.18)",
    },
    {
      icon: <GitBranch className="w-7 h-7" />,
      title: "CI/CD Pipelines",
      desc: "Automated build, test and deployment pipelines with GitHub Actions & Jenkins.",
      accent: "#22d3ee",
      glow: "rgba(34,211,238,0.18)",
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Monitoring & Logging",
      desc: "Real-time observability using Prometheus, Grafana and ELK stack.",
      accent: "#fbbf24",
      glow: "rgba(251,191,36,0.18)",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "DevSecOps",
      desc: "Security-first pipelines with automated vulnerability scanning and compliance.",
      accent: "#f87171",
      glow: "rgba(248,113,113,0.18)",
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Database Scaling",
      desc: "Managed SQL/NoSQL databases with replication and performance tuning.",
      accent: "#60a5fa",
      glow: "rgba(96,165,250,0.18)",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Serverless Deployments",
      desc: "Lambda & edge functions for ultra-fast and cost-efficient backend systems.",
      accent: "#f472b6",
      glow: "rgba(244,114,182,0.18)",
    },
  ];

  const stack = [
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "Ansible",
    "Prometheus",
    "Grafana",
    "ArgoCD",
    "Nginx",
    "Linux",
    "Helm",
    "Datadog",
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      desc: "Analyze infrastructure, workloads and scaling requirements.",
    },
    {
      step: "02",
      title: "Architecture",
      desc: "Design cloud-native, secure and highly available systems.",
    },
    {
      step: "03",
      title: "Implementation",
      desc: "Set up CI/CD, containers, monitoring and automation pipelines.",
    },
    {
      step: "04",
      title: "Optimization",
      desc: "Improve performance, cost efficiency and reliability continuously.",
    },
  ];

  const reasons = [
    "Highly scalable cloud-native architectures",
    "Automated CI/CD pipelines for faster delivery",
    "Strong security and DevSecOps practices",
    "Cost-optimized infrastructure design",
    "Real-time monitoring and alerting systems",
    "Zero-downtime deployment strategies",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
  

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: "10rem 4rem 8rem",
          textAlign: "center",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(52,211,153,0.12) 0%,transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "radial-gradient(circle,rgba(56,189,248,1) 1px,transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              borderRadius: 999,
              border: "1px solid rgba(34,211,238,0.35)",
              background: "rgba(34,211,238,0.1)",
              marginBottom: 36,
            }}
          >
            <Cloud style={{ width: 14, height: 14, color: "#22d3ee" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#22d3ee",
              }}
            >
              CLOUD & DEVOPS
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.8rem,8vw,5.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Build{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#22d3ee 0%,#38bdf8 50%,#34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cloud-Ready Systems
            </span>{" "}
            That Scale
          </h1>

          <p
            style={{
              maxWidth: 560,
              margin: "0 auto 48px",
              fontSize: "1.125rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            We design, deploy and manage cloud-native infrastructure with automation,
            security and performance at the core.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 16,
                background: "linear-gradient(135deg,#22d3ee,#34d399)",
                color: "#0f172a",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
              }}
            >
              Deploy Now <ArrowRight className="w-4 h-4" />
            </button>

            <button
              style={{
                padding: "14px 32px",
                borderRadius: 16,
                fontWeight: 700,
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                color: "var(--text-muted)",
              }}
            >
              View Architecture →
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Cloud Services</h2>
            <p style={{ color: "var(--text-muted)" }}>
              End-to-end DevOps and cloud engineering solutions.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
              gap: 20,
            }}
          >
            {services.map((s, i) => (
              <Card key={i} accent={s.accent} glow={s.glow}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${s.accent}1a`,
                    color: s.accent,
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 800, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE STACK ── */}
      <section
        style={{
          padding: "4rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-subtle)",
        }}
      >
        <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <div
            style={{
              display: "inline-flex",
              gap: 14,
              animation: "scroll 30s linear infinite",
            }}
          >
            {[...stack, ...stack].map((t, i) => (
              <span
                key={i}
                style={{
                  padding: "10px 18px",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>DevOps Workflow</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
            }}
          >
            {process.map((p, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 20,
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg,#22d3ee,#34d399)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p.step}
                </div>
                <h3 style={{ fontWeight: 800 }}>{p.title}</h3>
                <p style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        style={{
          padding: "5rem 4rem",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 56,
          }}
        >
          <div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900 }}>
              Why Choose DevOps Automation
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              We help teams ship faster with stable, secure and automated cloud systems.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <CheckCircle2 style={{ color: "#34d399", width: 20 }} />
                <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>
                  {r}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 4rem" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
            borderRadius: 32,
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            padding: "5rem 3rem",
          }}
        >
          <Terminal style={{ width: 32, height: 32, margin: "0 auto 24px", color: "#22d3ee" }} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>
            Automate your{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#22d3ee,#34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              cloud infrastructure
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", margin: "20px auto 36px" }}>
            Build reliable, scalable and secure systems with modern DevOps practices.
          </p>

          <button
            style={{
              padding: "16px 40px",
              borderRadius: 16,
              background: "linear-gradient(135deg,#22d3ee,#34d399)",
              border: "none",
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            Get Started <ArrowRight className="inline w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}

function Card({
  children,
  accent,
  glow,
}: {
  children: React.ReactNode;
  accent: string;
  glow: string;
}) {
  return (
    <div
      style={{
        borderRadius: 20,
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        padding: 28,
        transition: "0.25s",
      }}
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