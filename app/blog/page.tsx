"use client";

import { useState } from "react";
import { ArrowRight, Clock, Calendar, User, TrendingUp, Mail, ChevronRight, Tag } from "lucide-react";

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
  gradient: "from-indigo-600/30 via-violet-600/20 to-emerald-500/10",
  accentColor: "text-indigo-400",
  tagColor: "bg-indigo-500/15 border-indigo-400/30 text-indigo-400",
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
    gradient: "from-violet-500/20 to-pink-500/10",
    accentColor: "text-violet-400",
    tagColor: "bg-violet-500/15 border-violet-400/30 text-violet-400",
  },
  {
    category: "Cloud",
    title: "Cloud Infrastructure for High-Traffic Applications",
    desc: "How to deploy secure, scalable apps using modern cloud architecture and CI/CD pipelines.",
    readTime: "6 min read",
    date: "May 14, 2026",
    author: "Rahul Kapoor",
    tags: ["AWS", "DevOps"],
    gradient: "from-sky-500/20 to-teal-500/10",
    accentColor: "text-sky-400",
    tagColor: "bg-sky-500/15 border-sky-400/30 text-sky-400",
  },
  {
    category: "Startup",
    title: "Building an MVP in 30 Days Without Burning Budget",
    desc: "A practical framework for founders to ship a working product fast, validate ideas, and iterate smart.",
    readTime: "5 min read",
    date: "May 10, 2026",
    author: "Aryan Mehta",
    tags: ["Startup", "Strategy"],
    gradient: "from-amber-500/20 to-orange-500/10",
    accentColor: "text-amber-400",
    tagColor: "bg-amber-500/15 border-amber-400/30 text-amber-400",
  },
  {
    category: "AI",
    title: "Integrating LLMs Into Your Product: A Practical Guide",
    desc: "From prompt engineering to production deployment — everything you need to ship AI-powered features.",
    readTime: "9 min read",
    date: "May 7, 2026",
    author: "Priya Sharma",
    tags: ["AI", "LLMs"],
    gradient: "from-indigo-500/20 to-blue-500/10",
    accentColor: "text-indigo-400",
    tagColor: "bg-indigo-500/15 border-indigo-400/30 text-indigo-400",
  },
  {
    category: "DevOps",
    title: "Zero-Downtime Deployments with Docker & GitHub Actions",
    desc: "Set up a bulletproof CI/CD pipeline that ships code confidently without ever taking your app offline.",
    readTime: "6 min read",
    date: "May 2, 2026",
    author: "Rahul Kapoor",
    tags: ["Docker", "CI/CD"],
    gradient: "from-emerald-500/20 to-green-500/10",
    accentColor: "text-emerald-400",
    tagColor: "bg-emerald-500/15 border-emerald-400/30 text-emerald-400",
  },
  {
    category: "Web Dev",
    title: "Why TypeScript Is Now Non-Negotiable for Serious Teams",
    desc: "How TypeScript reduces production bugs, improves DX, and scales development across growing codebases.",
    readTime: "4 min read",
    date: "Apr 28, 2026",
    author: "Aryan Mehta",
    tags: ["TypeScript", "Dev"],
    gradient: "from-blue-500/20 to-cyan-500/10",
    accentColor: "text-blue-400",
    tagColor: "bg-blue-500/15 border-blue-400/30 text-blue-400",
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
    <div className="flex items-center justify-center mb-5">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-400/20 px-4 py-1.5 rounded-full">
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
      className="min-h-screen bg-[#080B14] text-white pt-[68px]"
      style={{ fontFamily: "'DM Sans', 'Sora', sans-serif" }}
    >
      {/* ── Ambient background ─────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-indigo-600/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/2 right-0 w-[400px] h-[400px] bg-violet-600/7 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.5) 39px,rgba(255,255,255,0.5) 40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section className="pt-20 pb-16 text-center">
          <SectionLabel>The Knowledge Hub</SectionLabel>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.93] tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Insights on AI,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Web & Cloud
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Practical articles, strategy tips, and technical guides for modern businesses.
            Stay updated with ideas and tutorials that help you build and grow.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {[["24+", "Articles"], ["5", "Topics"], ["Weekly", "Updates"]].map(([val, label]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-black text-white text-base">{val}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. FEATURED POST ─────────────────────────────────────── */}
        <section className="mb-20">
          <div
            className={`relative rounded-3xl border border-white/10 bg-gradient-to-br ${featured.gradient} overflow-hidden group cursor-pointer hover:border-indigo-400/30 transition-all duration-500`}
          >
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[70px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-0">
              {/* Image placeholder */}
              <div className="h-64 lg:h-auto lg:min-h-[380px] bg-gradient-to-br from-indigo-600/25 via-violet-600/15 to-transparent flex items-end p-8 border-b lg:border-b-0 lg:border-r border-white/8">
                <div className="flex flex-wrap gap-2">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-sm ${featured.tagColor}`}>
                    ★ Featured
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/15 text-slate-300`}>
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                </div>

                <h2
                  className="text-3xl lg:text-4xl font-black mb-5 leading-tight"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {featured.title}
                </h2>

                <p className="text-slate-400 leading-relaxed mb-8 text-base">
                  {featured.excerpt}
                </p>

                <button className={`flex items-center gap-2 font-bold ${featured.accentColor} group-hover:gap-4 transition-all duration-300`}>
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CATEGORY FILTERS ──────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border-white/10 text-slate-400 hover:border-indigo-400/40 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── 4. BLOG GRID + TRENDING SIDEBAR ──────────────────────── */}
        <section className="mb-24">
          <div className="grid xl:grid-cols-[1fr_320px] gap-10 items-start">

            {/* Grid */}
            <div>
              <div className="grid md:grid-cols-2 gap-6">
                {visible.map((post, i) => (
                  <article
                    key={i}
                    className="group rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-1.5 hover:border-indigo-400/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent)]" />
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-sm ${post.tagColor}`}>
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-1.5">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-black/30 border border-white/10 text-slate-400 px-2 py-0.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                            <Tag className="w-2.5 h-2.5" />{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{post.author}</span>
                      </div>

                      <h3 className="text-xl font-black mb-3 leading-snug group-hover:text-indigo-200 transition-colors duration-200">
                        {post.title}
                      </h3>

                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {post.desc}
                      </p>

                      <span className={`flex items-center gap-2 font-bold text-sm ${post.accentColor} group-hover:gap-4 transition-all duration-300`}>
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load more / Pagination */}
              {visibleCount < filtered.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setVisibleCount((v) => v + 3)}
                    className="px-8 py-3.5 border border-white/15 text-slate-300 hover:text-white hover:border-indigo-400/50 hover:bg-white/5 rounded-2xl font-semibold text-sm transition-all duration-200"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
              {filtered.length === 0 && (
                <div className="text-center py-20 text-slate-500">
                  No articles in this category yet.
                </div>
              )}
            </div>

            {/* ── 5. TRENDING SIDEBAR ────────────────────────────── */}
            <aside className="hidden xl:block sticky top-24">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7">
                <div className="flex items-center gap-2.5 mb-6">
                  <TrendingUp className="w-4 h-4 text-indigo-400" />
                  <span className="font-black text-sm uppercase tracking-widest text-slate-300">Trending Now</span>
                </div>

                <div className="space-y-5">
                  {trending.map((t, i) => (
                    <div key={i} className="group flex items-start gap-4 cursor-pointer">
                      <span className="text-3xl font-black text-white/8 group-hover:text-indigo-400/30 transition-colors leading-none mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug mb-1.5">
                          {t.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <span>{t.category}</span>
                          <span>·</span>
                          <Clock className="w-3 h-3" />
                          <span>{t.readTime}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 shrink-0 mt-0.5 transition-colors" />
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/8 mt-7 pt-7">
                  <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest font-bold">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "AI", "AWS", "TypeScript", "Docker", "Startup", "LLMs"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-400 hover:border-indigo-400/40 hover:text-white cursor-pointer transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── 6. NEWSLETTER ────────────────────────────────────────── */}
        <section className="mb-24">
          <div className="relative rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/15 via-violet-600/8 to-transparent overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-72 bg-indigo-500/12 rounded-full blur-[90px] pointer-events-none" />
            <div className="relative z-10 text-center px-8 md:px-16 py-16">
              <SectionLabel>Stay Ahead</SectionLabel>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Get Articles{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Delivered
                </span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
                Weekly roundups of the best AI, web dev, and cloud articles. No spam — just signal.
                Join 2,400+ engineers and founders already subscribed.
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-3 bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 px-8 py-4 rounded-2xl font-bold">
                  ✓ You're in! Welcome to the list.
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-white/5 border border-white/15 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400/60 transition-colors"
                  />
                  <button
                    onClick={() => { if (email) setSubscribed(true); }}
                    className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4" /> Subscribe
                  </button>
                </div>
              )}

              <p className="text-xs text-slate-600 mt-4">Unsubscribe anytime. No spam, ever.</p>
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CTA ─────────────────────────────────────────── */}
        <section className="pb-28 text-center">
          <SectionLabel>What's Next?</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-black mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Ready to Build
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Something Great?
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            You've been reading about what's possible. Let's actually build it —
            fast, clean, and at a fixed price.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-indigo-400/40 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5"
            >
              Read More Articles
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}