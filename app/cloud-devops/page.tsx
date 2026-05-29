"use client";

import {
  Cloud,
  Server,
  Shield,
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
  Container,
  ChevronDown,
  TrendingDown,
  Clock,
  DollarSign,
  Users,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function CloudDevOpsPage() {
  const services = [
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Cloud Infrastructure",
      desc: "Scalable cloud architecture on AWS, Azure and GCP with high availability.",
      benefit: "Reduce infrastructure costs while handling 10x more traffic.",
      accent: "#38bdf8",
      glow: "rgba(56,189,248,0.18)",
    },
    {
      icon: <Container className="w-7 h-7" />,
      title: "Containerization",
      desc: "Docker-based container setups for consistent deployment across environments.",
      benefit: "Deploy consistently across dev, staging, and production — no more 'works on my machine'.",
      accent: "#34d399",
      glow: "rgba(52,211,153,0.18)",
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Kubernetes Orchestration",
      desc: "Automated scaling, load balancing and container orchestration using K8s.",
      benefit: "Auto-scale your applications during traffic spikes without manual intervention.",
      accent: "#a78bfa",
      glow: "rgba(167,139,250,0.18)",
    },
    {
      icon: <GitBranch className="w-7 h-7" />,
      title: "CI/CD Pipelines",
      desc: "Automated build, test and deployment pipelines with GitHub Actions & Jenkins.",
      benefit: "Ship code 5x faster with automated testing and deployments.",
      accent: "#22d3ee",
      glow: "rgba(34,211,238,0.18)",
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Monitoring & Logging",
      desc: "Real-time observability using Prometheus, Grafana and ELK stack.",
      benefit: "Catch issues before they affect users with real-time alerts and dashboards.",
      accent: "#fbbf24",
      glow: "rgba(251,191,36,0.18)",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "DevSecOps",
      desc: "Security-first pipelines with automated vulnerability scanning and compliance.",
      benefit: "Pass security audits and protect user data with automated vulnerability scanning.",
      accent: "#f87171",
      glow: "rgba(248,113,113,0.18)",
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Database Scaling",
      desc: "Managed SQL/NoSQL databases with replication and performance tuning.",
      benefit: "Handle millions of queries without slowdowns or downtime.",
      accent: "#60a5fa",
      glow: "rgba(96,165,250,0.18)",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Serverless Deployments",
      desc: "Lambda & edge functions for ultra-fast and cost-efficient backend systems.",
      benefit: "Pay only for what you use — reduce costs by 40–60% compared to traditional servers.",
      accent: "#f472b6",
      glow: "rgba(244,114,182,0.18)",
    },
  ];

  const pricing = [
    { service: "AWS Cloud Setup", price: "₹12,000", time: "2–5 Days" },
    { service: "DevOps Services", price: "₹20,000", time: "3–10 Days" },
    { service: "CI/CD Pipeline Setup", price: "₹15,000", time: "3–7 Days" },
    { service: "Kubernetes Setup", price: "₹25,000", time: "5–12 Days" },
    { service: "Infrastructure as Code", price: "₹18,000", time: "4–8 Days" },
    { service: "Monitoring Setup", price: "₹12,000", time: "2–5 Days" },
    { service: "Cloud Migration", price: "₹30,000", time: "7–15 Days" },
    { service: "Serverless Deployment", price: "₹15,000", time: "3–7 Days" },
    { service: "Ongoing DevOps Support", price: "₹15,000/mo", time: "Ongoing" },
  ];

  const stack = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
    "Jenkins", "GitHub Actions", "Ansible", "Prometheus", "Grafana", "ArgoCD",
    "Nginx", "Linux", "Helm", "Datadog",
  ];

  const process = [
    { step: "01", title: "Assessment", desc: "Analyze infrastructure, workloads and scaling requirements." },
    { step: "02", title: "Architecture", desc: "Design cloud-native, secure and highly available systems." },
    { step: "03", title: "Implementation", desc: "Set up CI/CD, containers, monitoring and automation pipelines." },
    { step: "04", title: "Optimization", desc: "Improve performance, cost efficiency and reliability continuously." },
  ];

  const reasons = [
    "Highly scalable cloud-native architectures",
    "Automated CI/CD pipelines for faster delivery",
    "Strong security and DevSecOps practices",
    "Cost-optimized infrastructure design",
    "Real-time monitoring and alerting systems",
    "Zero-downtime deployment strategies",
  ];

  const metrics = [
    { label: "Deployment Time", before: "2 hours", after: "10 minutes", icon: <Clock className="w-5 h-5" /> },
    { label: "Manual Work", before: "15h/week", after: "1h/week", icon: <Activity className="w-5 h-5" /> },
    { label: "Downtime", before: "5 hrs/month", after: "0 hrs/month", icon: <Monitor className="w-5 h-5" /> },
    { label: "Infrastructure Cost", before: "₹50k/month", after: "₹25k/month", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Bug Fix Time", before: "3 days", after: "30 minutes", icon: <Terminal className="w-5 h-5" /> },
    { label: "Traffic Capacity", before: "1,000 users", after: "100,000 users", icon: <Users className="w-5 h-5" /> },
  ];

  const useCases = [
    {
      title: "Startups & SaaS",
      accent: "#22d3ee",
      glow: "rgba(34,211,238,0.15)",
      points: [
        "MVP infrastructure that scales with growth",
        "Automated deployments from day one",
        "Cost-optimized cloud architecture",
      ],
    },
    {
      title: "Ecommerce & High-Traffic Sites",
      accent: "#34d399",
      glow: "rgba(52,211,153,0.15)",
      points: [
        "Auto-scaling during flash sales and promotions",
        "Zero-downtime deployments during peak traffic",
        "CDN and caching for fast load times",
      ],
    },
    {
      title: "Enterprise & FinTech",
      accent: "#a78bfa",
      glow: "rgba(167,139,250,0.15)",
      points: [
        "Secure, compliant infrastructure (GDPR, SOC2)",
        "Multi-region failover and disaster recovery",
        "Audit trails and security monitoring",
      ],
    },
    {
      title: "Agencies & Dev Teams",
      accent: "#fbbf24",
      glow: "rgba(251,191,36,0.15)",
      points: [
        "Shared CI/CD pipelines for multiple projects",
        "Standardized environments across teams",
        "Faster client delivery and fewer bugs",
      ],
    },
    {
      title: "Healthcare & Data-Sensitive Apps",
      accent: "#f87171",
      glow: "rgba(248,113,113,0.15)",
      points: [
        "HIPAA-friendly cloud architecture",
        "Encrypted data storage and transit",
        "Regular security audits and backups",
      ],
    },
  ];

  const techStrengths = [
    {
      title: "High Availability & Reliability",
      accent: "#22d3ee",
      points: [
        "99.9%+ uptime with multi-region failover",
        "Automatic recovery from failures",
        "Load balancing and health checks",
      ],
    },
    {
      title: "Cost Optimization",
      accent: "#34d399",
      points: [
        "Right-sized instances and auto-shutdown policies",
        "Spot instances and reserved capacity savings",
        "30–60% reduction in cloud bills",
      ],
    },
    {
      title: "Security & Compliance",
      accent: "#f87171",
      points: [
        "IAM roles, VPC isolation, and encrypted storage",
        "Automated vulnerability scanning",
        "Compliance with GDPR, SOC2, HIPAA standards",
      ],
    },
    {
      title: "Scalability by Design",
      accent: "#a78bfa",
      points: [
        "Auto-scaling groups and horizontal scaling",
        "Database read replicas and sharding",
        "CDN and caching layers for global performance",
      ],
    },
  ];

  const migrationPaths = [
    {
      from: "On-Premises",
      to: "Cloud",
      accent: "#38bdf8",
      points: [
        "Migrate servers, databases, and apps to AWS/Azure/GCP",
        "Zero-downtime migration with phased rollout",
        "Post-migration optimization and cost tuning",
      ],
    },
    {
      from: "Legacy Apps",
      to: "Modern Architecture",
      accent: "#34d399",
      points: [
        "Containerize monolithic applications",
        "Break into microservices if needed",
        "Add CI/CD and monitoring",
      ],
    },
    {
      from: "Cloud",
      to: "Multi-Cloud",
      accent: "#a78bfa",
      points: [
        "Migrate between cloud providers",
        "Avoid vendor lock-in with multi-cloud setup",
        "Optimize costs and redundancy",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does AWS setup cost?",
      a: "AWS Cloud Setup starts from ₹12,000 with delivery in 2–5 days.",
    },
    {
      q: "Can you reduce our current cloud bill?",
      a: "Yes, we optimize infrastructure and typically save clients 30–60% on cloud costs.",
    },
    {
      q: "Do you provide ongoing DevOps support?",
      a: "Yes, ongoing support starts from ₹15,000/month with monitoring and maintenance.",
    },
    {
      q: "Can you migrate our existing infrastructure without downtime?",
      a: "Yes, we use phased migration strategies to ensure zero-downtime deployments.",
    },
    {
      q: "What cloud platforms do you support?",
      a: "AWS, Azure, Google Cloud, plus Vercel, DigitalOcean, and Heroku for smaller projects.",
    },
    {
      q: "How quickly can you set up CI/CD pipelines?",
      a: "CI/CD Pipeline Setup starts from ₹15,000 with delivery in 3–7 days.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <div style={{ position: "absolute", top: -120, right: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -120, left: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,0.12) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,rgba(56,189,248,1) 1px,transparent 1px)", backgroundSize: "42px 42px" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(34,211,238,0.35)", background: "rgba(34,211,238,0.1)", marginBottom: 36 }}>
            <Cloud style={{ width: 14, height: 14, color: "#22d3ee" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#22d3ee" }}>CLOUD & DEVOPS</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.4rem,7vw,4.8rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
            Cloud & DevOps That{" "}
            <span style={{ background: "linear-gradient(135deg,#22d3ee 0%,#38bdf8 50%,#34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save Time, Cut Costs
            </span>
            {" "}and Scale Automatically
          </h1>

          <div style={{ maxWidth: 560, margin: "0 auto 20px", textAlign: "left", display: "inline-block" }}>
            {[
              "Reduces cloud bills by 30–60%",
              "Deploys code in minutes, not hours",
              "Handles traffic spikes without downtime",
              "Stays secure and compliant out of the box",
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <CheckCircle2 style={{ color: "#34d399", width: 18, flexShrink: 0 }} />
                <span style={{ color: "var(--text-muted)", fontSize: "1rem" }}>{point}</span>
              </div>
            ))}
          </div>

          <p style={{ color: "var(--text-muted)", marginBottom: 12, fontSize: "0.9rem" }}>
            From startups to enterprise — we scale with you.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 32 }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)", color: "#0f172a", fontWeight: 800, border: "none", cursor: "pointer", fontSize: "0.9rem" }}>
              Get a Free Infrastructure Audit <ArrowRight className="w-4 h-4" />
            </button>
            <button style={{ padding: "14px 28px", borderRadius: 16, fontWeight: 700, border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" }}>
              See Pricing →
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Cloud Services</h2>
            <p style={{ color: "var(--text-muted)" }}>End-to-end DevOps and cloud engineering solutions.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {services.map((s, i) => (
              <Card key={i} accent={s.accent} glow={s.glow}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: `${s.accent}1a`, color: s.accent, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: 12 }}>{s.desc}</p>
                <p style={{ fontSize: "0.8rem", color: s.accent, fontWeight: 600, borderTop: "1px solid var(--border)", paddingTop: 12 }}>
                  ✦ {s.benefit}
                </p>
              </Card>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)", color: "#0f172a", fontWeight: 800, border: "none", cursor: "pointer" }}>
              Book a Cloud Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: "6rem 4rem", borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Cloud & DevOps Pricing</h2>
            <p style={{ color: "var(--text-muted)" }}>Transparent starting rates — no hidden fees.</p>
          </div>

          <div style={{ borderRadius: 24, border: "1px solid var(--border)", background: "var(--bg-card)", overflow: "hidden" }}>
            {pricing.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 28px",
                  borderBottom: i < pricing.length - 1 ? "1px solid var(--border)" : "none",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{item.service}</span>
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  <span style={{ background: "linear-gradient(135deg,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1.05rem" }}>
                    {item.price}
                  </span>
                  <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", color: "#22d3ee", fontSize: "0.78rem", fontWeight: 600 }}>
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: 16, fontSize: "0.85rem" }}>
            All prices are starting rates. Complex migrations and enterprise setups may cost extra.
          </p>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)", color: "#0f172a", fontWeight: 800, border: "none", cursor: "pointer" }}>
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STACK ── */}
      <section style={{ padding: "4rem", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <div style={{ display: "inline-flex", gap: 14, animation: "scroll 30s linear infinite" }}>
            {[...stack, ...stack].map((t, i) => (
              <span key={i} style={{ padding: "10px 18px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-card)", fontWeight: 600, fontSize: "0.85rem" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </section>

      {/* ── RESULTS / METRICS ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Real Results We Deliver</h2>
            <p style={{ color: "var(--text-muted)" }}>Measurable improvements across every engagement.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg-card)", padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, color: "#22d3ee" }}>
                  {m.icon}
                  <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{m.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ color: "#f87171", fontWeight: 700, fontSize: "1rem", textDecoration: "line-through", opacity: 0.7 }}>{m.before}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: 4 }}>Before</div>
                  </div>
                  <ArrowRight style={{ color: "#34d399", width: 18, flexShrink: 0 }} />
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ background: "linear-gradient(135deg,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1rem" }}>{m.after}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: 4 }}>After</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section style={{ padding: "6rem 4rem", borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>DevOps Solutions by Use Case</h2>
            <p style={{ color: "var(--text-muted)" }}>Built for your industry and scale.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {useCases.map((u, i) => (
              <Card key={i} accent={u.accent} glow={u.glow}>
                <h3 style={{ fontWeight: 800, marginBottom: 16, color: u.accent }}>{u.title}</h3>
                {u.points.map((p, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                    <CheckCircle2 style={{ color: u.accent, width: 16, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{p}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)", color: "#0f172a", fontWeight: 800, border: "none", cursor: "pointer" }}>
              Chat with Us Now <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL STRENGTHS ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Technical Strengths</h2>
            <p style={{ color: "var(--text-muted)" }}>Production-grade practices at every layer.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {techStrengths.map((t, i) => (
              <Card key={i} accent={t.accent} glow={`${t.accent}22`}>
                <h3 style={{ fontWeight: 800, marginBottom: 16, color: t.accent }}>{t.title}</h3>
                {t.points.map((p, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                    <CheckCircle2 style={{ color: t.accent, width: 16, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{p}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "6rem 4rem", borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>DevOps Workflow</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {process.map((p, i) => (
              <div key={i} style={{ borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg-card)", padding: 28 }}>
                <div style={{ fontSize: "3rem", fontWeight: 900, background: "linear-gradient(135deg,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.step}</div>
                <h3 style={{ fontWeight: 800 }}>{p.title}</h3>
                <p style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOUD MIGRATION ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Cloud Migration Services</h2>
            <p style={{ color: "var(--text-muted)" }}>We handle every migration path — safely and without downtime.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {migrationPaths.map((m, i) => (
              <Card key={i} accent={m.accent} glow={`${m.accent}22`}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontWeight: 800, color: "var(--text-muted)", fontSize: "0.9rem" }}>{m.from}</span>
                  <ArrowRight style={{ color: m.accent, width: 18 }} />
                  <span style={{ fontWeight: 800, color: m.accent, fontSize: "0.9rem" }}>{m.to}</span>
                </div>
                {m.points.map((p, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                    <CheckCircle2 style={{ color: m.accent, width: 16, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{p}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: "5rem 4rem", borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56 }}>
          <div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900 }}>Why Choose DevOps Automation</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>We help teams ship faster with stable, secure and automated cloud systems.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <CheckCircle2 style={{ color: "#34d399", width: 20 }} />
                <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>FAQ</h2>
            <p style={{ color: "var(--text-muted)" }}>Common questions about our Cloud & DevOps services.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg-card)", overflow: "hidden" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", color: "var(--text)", fontWeight: 700, fontSize: "0.95rem", textAlign: "left", gap: 12 }}
                >
                  {faq.q}
                  <ChevronDown style={{ width: 18, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: "#22d3ee" }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 4rem", borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", borderRadius: 32, border: "1px solid var(--border)", background: "var(--bg-card)", padding: "5rem 3rem" }}>
          <Terminal style={{ width: 32, height: 32, margin: "0 auto 24px", color: "#22d3ee" }} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>
            Automate your{" "}
            <span style={{ background: "linear-gradient(135deg,#22d3ee,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              cloud infrastructure
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", margin: "20px auto 36px" }}>
            Build reliable, scalable and secure systems with modern DevOps practices.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <button style={{ padding: "16px 32px", borderRadius: 16, background: "linear-gradient(135deg,#22d3ee,#34d399)", border: "none", fontWeight: 800, color: "#0f172a", cursor: "pointer" }}>
              Get Started <ArrowRight className="inline w-4 h-4" />
            </button>
            <button style={{ padding: "16px 32px", borderRadius: 16, border: "1px solid var(--border)", background: "transparent", fontWeight: 700, color: "var(--text-muted)", cursor: "pointer" }}>
              Book a Free Audit
            </button>
          </div>
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
      style={{ borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg-card)", padding: 28, transition: "0.25s" }}
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