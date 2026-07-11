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
  User,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import { useEffect, useState } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Theme = "dark" | "light";

// ─── THEME TOKENS (identical to Navbar / PricingPage / AboutPage / web-dev page) ──

const T = {
  dark: {
    bg:        "#080B14",
    bgCard:    "rgba(255,255,255,0.03)",
    bgSubtle:  "rgba(255,255,255,0.02)",
    border:    "rgba(255,255,255,0.08)",
    text:      "#ffffff",
    textMuted: "#94a3b8",
    textSub:   "#64748b",
  },
  light: {
    bg:        "#f8fafc",
    bgCard:    "#ffffff",
    bgSubtle:  "#f1f5f9",
    border:    "rgba(0,0,0,0.08)",
    text:      "#0f172a",
    textMuted: "#475569",
    textSub:   "#94a3b8",
  },
};

// Fixed light, pink-violet palette used only by the consultation form —
// stays consistent regardless of the site-wide dark/light toggle.
const FORM = {
  bg:        "#ffffff",
  panelBg:   "linear-gradient(135deg,#faf5ff 0%,#fdf2f8 100%)",
  border:    "rgba(121,81,229,0.18)",
  inputBg:   "#ffffff",
  inputBorder: "rgba(121,81,229,0.20)",
  text:      "#1e1b4b",
  textMuted: "#6b5b95",
  label:     "#7c3aed",
};

const CONSULT_WHATSAPP = "9877873188";
const serviceOptions = [
  "Cloud Infrastructure",
  "Containerization",
  "Kubernetes Orchestration",
  "CI/CD Pipelines",
  "Monitoring & Logging",
  "DevSecOps",
  "Database Scaling",
  "Serverless Deployments",
  "Cloud Migration",
  "Not sure yet",
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function CloudDevOpsPage() {
  // Lazy-init from the real DOM state so the very first paint is already
  // correct, then stay in sync with whatever the navbar toggle sets.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "light" || attr === "dark") return attr;
    }
    return "dark";
  });

  useEffect(() => {
    const syncTheme = () => {
      const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
      if (attr === "light" || attr === "dark") {
        setTheme((prev) => (prev === attr ? prev : attr));
      }
    };
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const tk = T[theme];
  const isDark = theme === "dark";

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
      accent: "#636be6",
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
      accent: "#7951e5",
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
      accent: "#7951e5",
      glow: "rgba(34,211,238,0.15)",
      points: [
        "MVP infrastructure that scales with growth",
        "Automated deployments from day one",
        "Cost-optimized cloud architecture",
      ],
    },
    {
      title: "Ecommerce & High-Traffic Sites",
      accent: "#636be6",
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
      accent: "#7951e5",
      points: [
        "99.9%+ uptime with multi-region failover",
        "Automatic recovery from failures",
        "Load balancing and health checks",
      ],
    },
    {
      title: "Cost Optimization",
      accent: "#636be6",
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
      accent: "#636be6",
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

  const primaryBtn: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 28px",
    borderRadius: 16,
    background: "linear-gradient(135deg,#7951e5,#636be6)",
    color: "#ffffff",
    fontWeight: 800,
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    textDecoration: "none",
  };

  const secondaryBtn: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 28px",
    borderRadius: 16,
    fontWeight: 700,
    border: `1px solid ${tk.border}`,
    background: tk.bgCard,
    color: tk.textMuted,
    cursor: "pointer",
    fontSize: "0.9rem",
    textDecoration: "none",
  };

  return (
    <main
      className="font-['Space_Grotesk',ui-sans-serif,sans-serif]"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: tk.bg,
        color: tk.text,
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: "10rem 4rem 8rem",
          textAlign: "center",
          borderBottom: `1px solid ${tk.border}`,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -120, right: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(99, 102, 241, 0.07) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -120, left: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,0.12) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: isDark ? 0.04 : 0.06, backgroundImage: "radial-gradient(circle,rgba(56,189,248,1) 1px,transparent 1px)", backgroundSize: "42px 42px" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(121,81,229,0.35)", background: isDark ? "rgba(121,81,229,0.12)" : "rgba(121,81,229,0.08)", marginBottom: 36 }}>
            <Cloud style={{ width: 14, height: 14, color: "#7951e5" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#7951e5" }}>CLOUD & DEVOPS</span>
          </div>

          <h1 style={{ fontSize: "clamp(1.4rem,7vw,5.2rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24, fontFamily: '"Space Grotesk", ui-sans-serif' }}>
            Cloud & DevOps That{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#7c3aed 0%,#a855f7 40%,#60a5fa 75%,#2dd4bf 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: '"Space Grotesk", ui-sans-serif',
              }}
            >
              Save Time, Cut Costs
            </span>{" "}
            and Scale Automatically
          </h1>

          <div style={{ maxWidth: 560, margin: "0 auto 20px", textAlign: "left", display: "inline-block" }}>
            {[
              "Reduces cloud bills by 30–60%",
              "Deploys code in minutes, not hours",
              "Handles traffic spikes without downtime",
              "Stays secure and compliant out of the box",
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <CheckCircle2 style={{ color: "#636be6", width: 18, flexShrink: 0 }} />
                <span style={{ color: tk.textMuted, fontSize: "1rem" }}>{point}</span>
              </div>
            ))}
          </div>

          <p style={{ color: tk.textMuted, marginBottom: 12, fontSize: "0.9rem" }}>
            From startups to enterprise — we scale with you.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 32 }}>
            <a href="#consultation" style={primaryBtn}>
              Get a Free Infrastructure Audit <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" style={secondaryBtn}>
              See Pricing →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Cloud Services</h2>
            <p style={{ color: tk.textMuted }}>End-to-end DevOps and cloud engineering solutions.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {services.map((s, i) => (
              <Card key={i} accent={s.accent} glow={s.glow} tk={tk} isDark={isDark}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: `${s.accent}1a`, color: s.accent, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", color: tk.textMuted, marginBottom: 12 }}>{s.desc}</p>
                <p style={{ fontSize: "0.8rem", color: s.accent, fontWeight: 600, borderTop: `1px solid ${tk.border}`, paddingTop: 12 }}>
                  ✦ {s.benefit}
                </p>
              </Card>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="#consultation" style={primaryBtn}>
              Book a Cloud Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "6rem 4rem", borderTop: `1px solid ${tk.border}`, background: tk.bgSubtle, scrollMarginTop: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Cloud & DevOps Pricing</h2>
            <p style={{ color: tk.textMuted }}>Transparent starting rates — no hidden fees.</p>
          </div>

          <div style={{ borderRadius: 24, border: `1px solid ${tk.border}`, background: tk.bgCard, overflow: "hidden", boxShadow: isDark ? "none" : "0 2px 12px rgba(0,0,0,0.06)" }}>
            {pricing.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 28px",
                  borderBottom: i < pricing.length - 1 ? `1px solid ${tk.border}` : "none",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{item.service}</span>
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  <span style={{ background: "linear-gradient(135deg,#7951e5,#636be6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1.05rem" }}>
                    {item.price}
                  </span>
                  <span style={{ padding: "4px 12px", borderRadius: 999, background: isDark ? "rgba(121,81,229,0.12)" : "rgba(121,81,229,0.08)", border: "1px solid rgba(121,81,229,0.25)", color: "#7951e5", fontSize: "0.78rem", fontWeight: 600 }}>
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: tk.textMuted, marginTop: 16, fontSize: "0.85rem" }}>
            All prices are starting rates. Complex migrations and enterprise setups may cost extra.
          </p>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="#consultation" style={primaryBtn}>
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STACK ── */}
      <section style={{ padding: "4rem", borderTop: `1px solid ${tk.border}`, borderBottom: `1px solid ${tk.border}`, background: tk.bgSubtle }}>
        <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <div style={{ display: "inline-flex", gap: 14, animation: "scroll 30s linear infinite" }}>
            {[...stack, ...stack].map((t, i) => (
              <span key={i} style={{ padding: "10px 18px", borderRadius: 12, border: `1px solid ${tk.border}`, background: tk.bgCard, fontWeight: 600, fontSize: "0.85rem" }}>
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
            <p style={{ color: tk.textMuted }}>Measurable improvements across every engagement.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ borderRadius: 20, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: 28, boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, color: "#7951e5" }}>
                  {m.icon}
                  <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{m.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ color: "#f87171", fontWeight: 700, fontSize: "1rem", textDecoration: "line-through", opacity: 0.7 }}>{m.before}</div>
                    <div style={{ color: tk.textMuted, fontSize: "0.75rem", marginTop: 4 }}>Before</div>
                  </div>
                  <ArrowRight style={{ color: "#636be6", width: 18, flexShrink: 0 }} />
                  <div style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ background: "linear-gradient(135deg,#7951e5,#636be6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: "1rem" }}>{m.after}</div>
                    <div style={{ color: tk.textMuted, fontSize: "0.75rem", marginTop: 4 }}>After</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section style={{ padding: "6rem 4rem", borderTop: `1px solid ${tk.border}`, background: tk.bgSubtle }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>DevOps Solutions by Use Case</h2>
            <p style={{ color: tk.textMuted }}>Built for your industry and scale.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {useCases.map((u, i) => (
              <Card key={i} accent={u.accent} glow={u.glow} tk={tk} isDark={isDark}>
                <h3 style={{ fontWeight: 800, marginBottom: 16, color: u.accent }}>{u.title}</h3>
                {u.points.map((p, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                    <CheckCircle2 style={{ color: u.accent, width: 16, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.875rem", color: tk.textMuted }}>{p}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href={`https://wa.me/${CONSULT_WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              style={primaryBtn}
            >
              Chat with Us Now <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL STRENGTHS ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>Technical Strengths</h2>
            <p style={{ color: tk.textMuted }}>Production-grade practices at every layer.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {techStrengths.map((t, i) => (
              <Card key={i} accent={t.accent} glow={`${t.accent}22`} tk={tk} isDark={isDark}>
                <h3 style={{ fontWeight: 800, marginBottom: 16, color: t.accent }}>{t.title}</h3>
                {t.points.map((p, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                    <CheckCircle2 style={{ color: t.accent, width: 16, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.875rem", color: tk.textMuted }}>{p}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "6rem 4rem", borderTop: `1px solid ${tk.border}`, background: tk.bgSubtle }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>DevOps Workflow</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {process.map((p, i) => (
              <div key={i} style={{ borderRadius: 20, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: 28, boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: "3rem", fontWeight: 900, background: "linear-gradient(135deg,#7951e5,#636be6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.step}</div>
                <h3 style={{ fontWeight: 800 }}>{p.title}</h3>
                <p style={{ color: tk.textMuted }}>{p.desc}</p>
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
            <p style={{ color: tk.textMuted }}>We handle every migration path — safely and without downtime.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {migrationPaths.map((m, i) => (
              <Card key={i} accent={m.accent} glow={`${m.accent}22`} tk={tk} isDark={isDark}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontWeight: 800, color: tk.textMuted, fontSize: "0.9rem" }}>{m.from}</span>
                  <ArrowRight style={{ color: m.accent, width: 18 }} />
                  <span style={{ fontWeight: 800, color: m.accent, fontSize: "0.9rem" }}>{m.to}</span>
                </div>
                {m.points.map((p, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                    <CheckCircle2 style={{ color: m.accent, width: 16, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.875rem", color: tk.textMuted }}>{p}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: "5rem 4rem", borderTop: `1px solid ${tk.border}`, background: tk.bgSubtle }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 56 }}>
          <div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900 }}>Why Choose DevOps Automation</h2>
            <p style={{ color: tk.textMuted, lineHeight: 1.7 }}>We help teams ship faster with stable, secure and automated cloud systems.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <CheckCircle2 style={{ color: "#636be6", width: 20 }} />
                <span style={{ color: tk.textMuted, fontWeight: 600 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section id="consultation" style={{ padding: "6rem 4rem", borderTop: `1px solid ${tk.border}`, position: "relative", overflow: "hidden", scrollMarginTop: "2rem" }}>
        <div style={{ position: "absolute", top: -140, left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse,rgba(236,72,153,0.10) 0%,rgba(121,81,229,0.10) 45%,transparent 75%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(236,72,153,0.30)", background: "rgba(236,72,153,0.08)", marginBottom: 20 }}>
              <Terminal style={{ width: 14, height: 14, color: "#db2777" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#db2777" }}>FREE CONSULTATION</span>
            </div>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>
              Get Your{" "}
              <span style={{ background: "linear-gradient(135deg,#a855f7 0%,#ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Free Infrastructure Audit
              </span>
            </h2>
            <p style={{ color: tk.textMuted, marginTop: 8 }}>
              Tell us about your stack — we'll reply on WhatsApp with recommendations and a clear quote.
            </p>
          </div>

          <ConsultationForm />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "6rem 4rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>FAQ</h2>
            <p style={{ color: tk.textMuted }}>Common questions about our Cloud & DevOps services.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderRadius: 16, border: `1px solid ${tk.border}`, background: tk.bgCard, overflow: "hidden", boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", color: tk.text, fontWeight: 700, fontSize: "0.95rem", textAlign: "left", gap: 12 }}
                >
                  {faq.q}
                  <ChevronDown style={{ width: 18, flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: "#7951e5" }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", color: tk.textMuted, fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 4rem", borderTop: `1px solid ${tk.border}`, background: tk.bgSubtle }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", borderRadius: 32, border: `1px solid ${tk.border}`, background: tk.bgCard, padding: "5rem 3rem", boxShadow: isDark ? "none" : "0 2px 16px rgba(0,0,0,0.06)" }}>
          <Terminal style={{ width: 32, height: 32, margin: "0 auto 24px", color: "#7951e5" }} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>
            Automate your{" "}
            <span style={{ background: "linear-gradient(135deg,#7951e5,#636be6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              cloud infrastructure
            </span>
          </h2>
          <p style={{ color: tk.textMuted, margin: "20px auto 36px" }}>
            Build reliable, scalable and secure systems with modern DevOps practices.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href="#consultation" style={{ padding: "16px 32px", borderRadius: 16, background: "linear-gradient(135deg,#7951e5,#636be6)", border: "none", fontWeight: 800, color: "#ffffff", cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#consultation" style={{ padding: "16px 32px", borderRadius: 16, border: `1px solid ${tk.border}`, background: "transparent", fontWeight: 700, color: tk.textMuted, cursor: "pointer", textDecoration: "none" }}>
              Book a Free Audit
            </a>
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
  tk,
  isDark,
}: {
  children: React.ReactNode;
  accent: string;
  glow: string;
  tk: typeof T["dark"];
  isDark: boolean;
}) {
  return (
    <div
      style={{
        borderRadius: 20,
        border: `1px solid ${tk.border}`,
        background: tk.bgCard,
        padding: 28,
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)",
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
        el.style.boxShadow = isDark ? "none" : "0 1px 4px rgba(0,0,0,0.05)";
        el.style.borderColor = tk.border;
      }}
    >
      {children}
    </div>
  );
}

// ─── CONSULTATION FORM — fixed light, pink/violet gradient panel ──────────────
// Always renders with a light background regardless of the site-wide theme
// toggle, so it reads as a dedicated "spotlight" panel on the page.

function ConsultationForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: FORM.label,
    marginBottom: 8,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: FORM.inputBg,
    border: `1px solid ${FORM.inputBorder}`,
    borderRadius: 12,
    padding: "12px 16px 12px 40px",
    fontSize: "0.875rem",
    color: FORM.text,
    outline: "none",
    fontFamily: "'Space Grotesk', ui-sans-serif",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: 14,
    top: "50%",
    transform: "translateY(-50%)",
    width: 15,
    height: 15,
    color: "#a855f7",
    pointerEvents: "none",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = [
      `Hi, I'd like a free cloud/DevOps consultation.`,
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      email ? `Email: ${email}` : null,
      `Phone: ${phone}`,
      `Interested in: ${service}`,
      details ? `Details: ${details}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${CONSULT_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noreferrer");
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "relative",
        borderRadius: 28,
        padding: 2,
        background: "linear-gradient(135deg,#a855f7 0%,#ec4899 55%,#7951e5 100%)",
        boxShadow: "0 20px 60px rgba(168,85,247,0.25)",
      }}
    >
      <div
        style={{
          borderRadius: 26,
          background: FORM.panelBg,
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
          <div>
            <label style={labelStyle}>Your Name</label>
            <div style={{ position: "relative" }}>
              <User style={iconStyle} />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Company (optional)</label>
            <div style={{ position: "relative" }}>
              <Building2 style={iconStyle} />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Inc."
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
          <div>
            <label style={labelStyle}>Email (optional)</label>
            <div style={{ position: "relative" }}>
              <Mail style={iconStyle} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Phone / WhatsApp</label>
            <div style={{ position: "relative" }}>
              <Phone style={iconStyle} />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98778 73188"
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        <div>
          <label style={labelStyle}>Area of Interest</label>
          <div style={{ position: "relative" }}>
            <Cloud style={iconStyle} />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ ...inputStyle, paddingRight: 38, appearance: "none", cursor: "pointer" }}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "#a855f7", pointerEvents: "none" }} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Project Details</label>
          <textarea
            rows={5}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Tell us about your current infrastructure, traffic, pain points, and what you'd like to achieve."
            style={{ ...inputStyle, paddingLeft: 16, resize: "none" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "linear-gradient(135deg,#a855f7 0%,#ec4899 100%)",
            color: "#fff",
            fontWeight: 800,
            padding: "16px 0",
            borderRadius: 14,
            border: "none",
            cursor: "pointer",
            fontFamily: "'Space Grotesk', ui-sans-serif",
            boxShadow: "0 8px 24px rgba(236,72,153,0.35)",
          }}
        >
          Get My Free Audit
          <ArrowRight style={{ width: 16, height: 16 }} />
        </button>

        {submitted && (
          <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#a855f7", fontWeight: 600 }}>
            Opening WhatsApp with your details — we usually reply within a few hours.
          </p>
        )}
      </div>
    </form>
  );
}