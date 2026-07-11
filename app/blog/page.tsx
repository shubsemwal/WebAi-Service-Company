"use client";

import { useState } from "react";
import { ArrowRight, Clock, Calendar, User, TrendingUp, Mail, ChevronRight, Tag, Terminal, Cloud, Phone, Building2, ChevronDown } from "lucide-react";

// ── CSS VARIABLES FROM NAVBAR ──
const V = {
  bg:          "var(--bg)",
  bgCard:      "var(--bg-card)",
  bgHover:     "var(--bg-hover)",
  textHigh:    "var(--text-high)",
  textMid:     "var(--text-mid)",
  textLow:     "var(--text-low)",
  border:      "var(--border)",
  borderFocus: "var(--border-focus)",
  shadow:      "var(--shadow)",
  glowIndigo:  "var(--glow-indigo)",
};

// Fixed light, pink-violet palette for consultation form
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

// ─── DATA ──────────────────────────────────────────────────────────────────────

const categories = ["All", "AI", "Web Dev", "Cloud", "Startup", "DevOps"];

const featured = {
  category: "AI",
  tag: "Featured",
  title: "How AI Automation Is Reshaping the Way Businesses Scale in 2026",
  excerpt:
    "From intelligent support agents to automated pipelines, modern businesses are cutting cost and accelerating growth using AI systems that work around the clock. Here's what the shift actually looks like on the ground.",
  readTime: "8 min read",
  date: "May 22, 2026",
  author: "Aryan Mehta",
};

const posts = [
  {
    category: "Web Dev",
    title: "Modern Web Development with React & Next.js",
    desc: "Latest trends in React, Next.js 14, performance, and scalable frontend systems that ship fast.",
    readTime: "7 min read",
    date: "May 18, 2026",
    author: "Priya Sharma",
    tags: ["React", "Next.js"],
  },
  {
    category: "Cloud",
    title: "Cloud Infrastructure for High-Traffic Applications",
    desc: "How to deploy secure, scalable apps using modern cloud architecture and CI/CD pipelines.",
    readTime: "6 min read",
    date: "May 14, 2026",
    author: "Rahul Kapoor",
    tags: ["AWS", "DevOps"],
  },
  {
    category: "Startup",
    title: "Building an MVP in 30 Days Without Burning Budget",
    desc: "A practical framework for founders to ship a working product fast, validate ideas, and iterate smart.",
    readTime: "5 min read",
    date: "May 10, 2026",
    author: "Aryan Mehta",
    tags: ["Startup", "Strategy"],
  },
  {
    category: "AI",
    title: "Integrating LLMs Into Your Product: A Practical Guide",
    desc: "From prompt engineering to production deployment — everything you need to ship AI-powered features.",
    readTime: "9 min read",
    date: "May 7, 2026",
    author: "Priya Sharma",
    tags: ["AI", "LLMs"],
  },
  {
    category: "DevOps",
    title: "Zero-Downtime Deployments with Docker & GitHub Actions",
    desc: "Set up a bulletproof CI/CD pipeline that ships code confidently without ever taking your app offline.",
    readTime: "6 min read",
    date: "May 2, 2026",
    author: "Rahul Kapoor",
    tags: ["Docker", "CI/CD"],
  },
  {
    category: "Web Dev",
    title: "Why TypeScript Is Now Non-Negotiable for Serious Teams",
    desc: "How TypeScript reduces production bugs, improves DX, and scales development across growing codebases.",
    readTime: "4 min read",
    date: "Apr 28, 2026",
    author: "Aryan Mehta",
    tags: ["TypeScript", "Dev"],
  },
  {
    category: "Cloud",
    title: "Kubernetes Best Practices for 2026",
    desc: "Advanced patterns for managing containerized applications at scale with zero downtime.",
    readTime: "8 min read",
    date: "Apr 24, 2026",
    author: "Rahul Kapoor",
    tags: ["Kubernetes", "DevOps"],
  },
  {
    category: "AI",
    title: "Building Custom Vision Models with TensorFlow",
    desc: "Train and deploy computer vision models that work in production with real-world accuracy.",
    readTime: "10 min read",
    date: "Apr 20, 2026",
    author: "Priya Sharma",
    tags: ["AI", "ML"],
  },
];

const trending = [
  { title: "AI Agents vs Traditional Automation: What's the Real Difference?", category: "AI", readTime: "5 min" },
  { title: "The 2026 Tech Stack for Ambitious Startups", category: "Startup", readTime: "6 min" },
  { title: "Why Server Components Changed React Forever", category: "Web Dev", readTime: "4 min" },
  { title: "Kubernetes vs Serverless: Which Should You Choose?", category: "Cloud", readTime: "7 min" },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
      <span
        style={{
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#6366f1",
          backgroundColor: "rgba(99, 102, 241, 0.1)",
          border: `1px solid rgba(99, 102, 241, 0.2)`,
          padding: "6px 16px",
          borderRadius: "20px",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: V.bg,
        color: V.textHigh,
        paddingTop: "68px",
        fontFamily: "'Space Grotesk', ui-sans-serif",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      {/* ── Scoped styles ── */}
      <style>{`
        /* Smooth transitions for theme changes */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .blog-hero {
          animation: fadeInUp 0.6s ease-out;
        }

        .blog-featured {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .blog-article {
          animation: fadeInUp 0.6s ease-out;
        }

        .blog-article:hover {
          transform: translateY(-6px);
        }

        /* Card hover effects */
        .blog-card-hover:hover {
          border-color: var(--border-focus);
          background: var(--bg-hover);
        }

        /* Tag styles */
        .blog-tag {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #6366f1, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--bg);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--border-focus);
        }
      `}</style>

      {/* ── Ambient background (subtle, theme-aware) ── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "33%",
            width: "700px",
            height: "500px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.03))",
            borderRadius: "50%",
            filter: "blur(130px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            right: 0,
            width: "400px",
            height: "400px",
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.04), rgba(16, 185, 129, 0.02))",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* ── 1. HERO (LIGHT PINK-VIOLET) ──────────────────────────── */}
        <section
          style={{
            paddingTop: "80px",
            paddingBottom: "64px",
            textAlign: "center",
            marginLeft: "-24px",
            marginRight: "-24px",
            paddingLeft: "24px",
            paddingRight: "24px",
            background: "linear-gradient(99, 102, 241, 0.07)",
            borderBottom: "1px solid rgba(5, 3, 10, 0.25)",
          }}
          className="blog-hero"
        >
          <SectionLabel>The Knowledge Hub</SectionLabel>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 83.2px)",
              fontWeight: "900",
              marginBottom: "24px",
              lineHeight: "0.93",
              letterSpacing: "-0.01em",
              color: "#1e1b4b",
            }}
          >
            Insights on AI,
            <br />
            <span className="gradient-text">Web & Cloud</span>
          </h1>

          <p
            style={{
              color: "#6b5b95",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
            }}
          >
            Practical articles, strategy tips, and technical guides for modern businesses.
            Stay updated with ideas and tutorials that help you build and grow.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", fontSize: "14px", color: "#6b5b95" }}>
            {[["24+", "Articles"], ["5", "Topics"], ["Weekly", "Updates"]].map(([val, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontWeight: "900", color: "#1e1b4b", fontSize: "16px" }}>{val}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. FEATURED POST ─────────────────────────────────────── */}
        <section style={{ marginBottom: "80px", marginTop: "80px" }} className="blog-featured">
          <div
            className="blog-card-hover"
            style={{
              position: "relative",
              borderRadius: "20px",
              border: `1px solid ${V.border}`,
              backgroundColor: V.bgCard,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "280px",
                height: "280px",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent)",
                borderRadius: "50%",
                filter: "blur(70px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 0 }}>
              {/* Image placeholder */}
              <div
                style={{
                  height: "300px",
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1))",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "32px",
                  borderBottom: `1px solid ${V.border}`,
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span
                    className="blog-tag"
                    style={{
                      backgroundColor: "rgba(99, 102, 241, 0.15)",
                      border: "1px solid rgba(99, 102, 241, 0.3)",
                      color: "#6366f1",
                    }}
                  >
                    ★ Featured
                  </span>
                  <span
                    className="blog-tag"
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${V.border}`,
                      color: V.textMid,
                    }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "12px", color: V.textLow, marginBottom: "20px", flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Clock style={{ width: "14px", height: "14px" }} />
                    {featured.readTime}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Calendar style={{ width: "14px", height: "14px" }} />
                    {featured.date}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <User style={{ width: "14px", height: "14px" }} />
                    {featured.author}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "900",
                    marginBottom: "20px",
                    lineHeight: "1.3",
                  }}
                >
                  {featured.title}
                </h2>

                <p style={{ color: V.textMid, lineHeight: "1.7", marginBottom: "32px", fontSize: "16px" }}>
                  {featured.excerpt}
                </p>

                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "700",
                    color: "#6366f1",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    padding: "8px 0",
                    transition: "gap 0.3s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.gap = "16px")}
                  onMouseLeave={e => (e.currentTarget.style.gap = "8px")}
                >
                  Read Full Article
                  <ArrowRight style={{ width: "16px", height: "16px" }} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CATEGORY FILTERS ──────────────────────────────────── */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "56px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "700",
                border: `1px solid ${activeCategory === cat ? "#6366f1" : V.border}`,
                backgroundColor: activeCategory === cat ? "#6366f1" : "transparent",
                color: activeCategory === cat ? "#fff" : V.textMid,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                  e.currentTarget.style.color = V.textHigh;
                  e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.05)";
                }
              }}
              onMouseLeave={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = V.border;
                  e.currentTarget.style.color = V.textMid;
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── 4. BLOG GRID ──────────────────────────────────────────── */}
        <section style={{ marginBottom: "96px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
            {/* Grid */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }}>
                {visible.map((post, i) => (
                  <article
                    key={i}
                    className="blog-article blog-card-hover"
                    style={{
                      borderRadius: "20px",
                      border: `1px solid ${V.border}`,
                      backgroundColor: V.bgCard,
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        height: "180px",
                        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ position: "absolute", top: "16px", left: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <span
                          className="blog-tag"
                          style={{
                            backgroundColor: "rgba(99, 102, 241, 0.15)",
                            border: "1px solid rgba(99, 102, 241, 0.3)",
                            color: "#6366f1",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>
                      <div style={{ position: "absolute", bottom: "16px", right: "16px", display: "flex", gap: "6px" }}>
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="blog-tag"
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              border: `1px solid ${V.border}`,
                              color: V.textMid,
                              backdropFilter: "blur(8px)",
                            }}
                          >
                            <Tag style={{ width: "10px", height: "10px", marginRight: "2px", display: "inline" }} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "28px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "12px", color: V.textLow, marginBottom: "16px", flexWrap: "wrap" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <Clock style={{ width: "12px", height: "12px" }} />
                          {post.readTime}
                        </span>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: V.border }} />
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <Calendar style={{ width: "12px", height: "12px" }} />
                          {post.date}
                        </span>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: V.border }} />
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <User style={{ width: "12px", height: "12px" }} />
                          {post.author}
                        </span>
                      </div>

                      <h3 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "12px", lineHeight: "1.3", color: V.textHigh }}>
                        {post.title}
                      </h3>

                      <p style={{ color: V.textMid, fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                        {post.desc}
                      </p>

                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontWeight: "700",
                          fontSize: "13px",
                          color: "#6366f1",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "0",
                          transition: "gap 0.3s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.gap = "12px")}
                        onMouseLeave={e => (e.currentTarget.style.gap = "8px")}
                      >
                        Read Article <ArrowRight style={{ width: "14px", height: "14px" }} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load more button */}
              {visibleCount < filtered.length && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={() => setVisibleCount((v) => v + 3)}
                    style={{
                      padding: "14px 32px",
                      border: `1px solid ${V.border}`,
                      color: V.textMid,
                      backgroundColor: "transparent",
                      borderRadius: "16px",
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.5)";
                      e.currentTarget.style.color = V.textHigh;
                      e.currentTarget.style.backgroundColor = V.bgHover;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = V.border;
                      e.currentTarget.style.color = V.textMid;
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Load More Articles
                  </button>
                </div>
              )}

              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "80px 20px", color: V.textMid }}>
                  No articles in this category yet.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 5. NEWSLETTER ────────────────────────────────────────── */}
        <section style={{ marginBottom: "96px" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              border: `1px solid rgba(99, 102, 241, 0.2)`,
              backgroundColor: "rgba(99, 102, 241, 0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "384px",
                height: "288px",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent)",
                borderRadius: "50%",
                filter: "blur(90px)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "64px 32px" }}>
              <SectionLabel>Stay Ahead</SectionLabel>
              <h2
                style={{
                  fontSize: "clamp(1.875rem, 5vw, 40px)",
                  fontWeight: "900",
                  marginBottom: "16px",
                }}
              >
                Get Articles{" "}
                <span className="gradient-text">Delivered</span>
              </h2>
              <p style={{ color: V.textMid, maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" }}>
                Weekly roundups of the best AI, web dev, and cloud articles. No spam — just signal.
                Join 2,400+ engineers and founders already subscribed.
              </p>

              {subscribed ? (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#10b981",
                    padding: "16px 32px",
                    borderRadius: "16px",
                    fontWeight: "700",
                  }}
                >
                  ✓ You're in! Welcome to the list.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "500px", margin: "0 auto" }}>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={{
                        flex: 1,
                        minWidth: "200px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${V.border}`,
                        borderRadius: "16px",
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: V.textHigh,
                        outline: "none",
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.6)")}
                      onBlur={e => (e.currentTarget.style.borderColor = V.border)}
                    />
                    <button
                      onClick={() => {
                        if (email) setSubscribed(true);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        backgroundColor: "#6366f1",
                        color: "#fff",
                        fontWeight: "700",
                        padding: "16px 28px",
                        borderRadius: "16px",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontSize: "14px",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "#4f46e5";
                        e.currentTarget.style.transform = "scale(1.04)";
                        e.currentTarget.style.boxShadow = "0 8px 28px rgba(99, 102, 241, 0.25)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = "#6366f1";
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Mail style={{ width: "16px", height: "16px" }} /> Subscribe
                    </button>
                  </div>
                  <p style={{ fontSize: "12px", color: V.textLow }}>Unsubscribe anytime. No spam, ever.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 6. CONSULTATION FORM ── */}
        <section id="consultation" style={{ padding: "6rem 0", borderTop: `1px solid ${V.border}`, position: "relative", overflow: "hidden", scrollMarginTop: "2rem", marginBottom: "96px" }}>
          <div style={{ position: "absolute", top: -140, left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse,rgba(236,72,153,0.10) 0%,rgba(121,81,229,0.10) 45%,transparent 75%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, border: "1px solid rgba(236,72,153,0.30)", background: "rgba(236,72,153,0.08)", marginBottom: 20 }}>
                <Terminal style={{ width: 14, height: 14, color: "#db2777" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#db2777", textTransform: "uppercase" }}>FREE CONSULTATION</span>
              </div>
              <h2 style={{ fontSize: "3rem", fontWeight: 900 }}>
                Ready to Build{" "}
                <span style={{ background: "linear-gradient(135deg,#a855f7 0%,#ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Your Next Project?
                </span>
              </h2>
              <p style={{ color: V.textMid, marginTop: 8 }}>
                Tell us about your idea — we'll reply on WhatsApp with recommendations and a clear quote.
              </p>
            </div>

            <ConsultationForm />
          </div>
        </section>

        {/* ── 7. FINAL CTA ─────────────────────────────────────────── */}
        <section style={{ paddingBottom: "112px", textAlign: "center" }}>
          <SectionLabel>What's Next?</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.875rem, 5vw, 40px)",
              fontWeight: "900",
              marginBottom: "20px",
            }}
          >
            Ready to Build
            <br />
            <span className="gradient-text">Something Great?</span>
          </h2>
          <p style={{ color: V.textMid, maxWidth: "600px", margin: "0 auto 40px", lineHeight: "1.6" }}>
            You've been reading about what's possible. Let's actually build it —
            fast, clean, and at a fixed price.
          </p>

          <div style={{ display: "flex", flexDirection: "row", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#consultation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#6366f1",
                color: "#fff",
                fontWeight: "700",
                padding: "16px 32px",
                borderRadius: "16px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#4f46e5";
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(99, 102, 241, 0.25)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#6366f1";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Start a Project <ArrowRight style={{ width: "16px", height: "16px" }} />
            </a>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                border: `1px solid ${V.border}`,
                color: V.textMid,
                fontWeight: "600",
                padding: "16px 32px",
                borderRadius: "16px",
                cursor: "pointer",
                fontSize: "14px",
                backgroundColor: "transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                e.currentTarget.style.color = V.textHigh;
                e.currentTarget.style.backgroundColor = V.bgHover;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = V.border;
                e.currentTarget.style.color = V.textMid;
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Read More Articles
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}

// ─── CONSULTATION FORM ──

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
      `Hi, I'd like a free consultation from the blog.`,
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
            placeholder="Tell us about your project idea, requirements, and timeline."
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
          Get Your Free Quote
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