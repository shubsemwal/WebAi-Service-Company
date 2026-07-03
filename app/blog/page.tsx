"use client";

import { useState } from "react";
import { ArrowRight, Clock, Calendar, User, TrendingUp, Mail, ChevronRight, Tag } from "lucide-react";

// ── CSS VARIABLES FROM NAVBAR ──
// These must match your globals.css and inherit from [data-theme]
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

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section style={{ paddingTop: "80px", paddingBottom: "64px", textAlign: "center" }} className="blog-hero">
          <SectionLabel>The Knowledge Hub</SectionLabel>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 83.2px)",
              fontWeight: "900",
              marginBottom: "24px",
              lineHeight: "0.93",
              letterSpacing: "-0.01em",
            }}
          >
            Insights on AI,
            <br />
            <span className="gradient-text">Web & Cloud</span>
          </h1>

          <p
            style={{
              color: V.textMid,
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
            }}
          >
            Practical articles, strategy tips, and technical guides for modern businesses.
            Stay updated with ideas and tutorials that help you build and grow.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", fontSize: "14px", color: V.textMid }}>
            {[["24+", "Articles"], ["5", "Topics"], ["Weekly", "Updates"]].map(([val, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontWeight: "900", color: V.textHigh, fontSize: "16px" }}>{val}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. FEATURED POST ─────────────────────────────────────── */}
        <section style={{ marginBottom: "80px" }} className="blog-featured">
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

        {/* ── 4. BLOG GRID + TRENDING SIDEBAR ──────────────────────── */}
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

        {/* ── 5. TRENDING SIDEBAR (Desktop only) ── */}
        <section style={{ marginBottom: "96px", display: "none" }}>
          <div
            style={{
              borderRadius: "20px",
              border: `1px solid ${V.border}`,
              backgroundColor: V.bgCard,
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <TrendingUp style={{ width: "16px", height: "16px", color: "#6366f1" }} />
              <span style={{ fontWeight: "900", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: V.textMid }}>
                Trending Now
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {trending.map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}>
                  <span style={{ fontSize: "28px", fontWeight: "900", color: "rgba(255, 255, 255, 0.08)", marginTop: "2px", minWidth: "40px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: V.textHigh, marginBottom: "6px", lineHeight: "1.3" }}>
                      {t.title}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: V.textLow }}>
                      <span>{t.category}</span>
                      <span>·</span>
                      <Clock style={{ width: "12px", height: "12px" }} />
                      <span>{t.readTime}</span>
                    </div>
                  </div>
                  <ChevronRight style={{ width: "16px", height: "16px", color: V.textLow, marginTop: "2px", flexShrink: 0 }} />
                </div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${V.border}`, marginTop: "28px", paddingTop: "28px" }}>
              <p style={{ fontSize: "11px", color: V.textLow, marginBottom: "16px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "700" }}>
                Topics
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["React", "Next.js", "AI", "AWS", "TypeScript", "Docker", "Startup", "LLMs"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      padding: "6px 12px",
                      borderRadius: "12px",
                      border: `1px solid ${V.border}`,
                      color: V.textMid,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                      e.currentTarget.style.color = V.textHigh;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = V.border;
                      e.currentTarget.style.color = V.textMid;
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. NEWSLETTER ────────────────────────────────────────── */}
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

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
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
            </button>
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