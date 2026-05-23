"use client";

import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Future of AI Automation",
    desc: "How businesses are scaling using AI systems.",
  },
  {
    title: "Modern Web Development",
    desc: "Latest trends in React and Next.js ecosystems.",
  },
  {
    title: "Cloud Infrastructure",
    desc: "Deploying scalable apps using DevOps pipelines.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-[68px] px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Latest Blog Insights
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Technology, AI and startup engineering articles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div
              key={index}
              className="
                group rounded-3xl p-8
                border border-slate-200 dark:border-white/10
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                hover:-translate-y-2
                hover:border-indigo-400/40
                transition-all duration-300
              "
            >

              <div className="h-52 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-emerald-400/20 mb-6" />

              <h2 className="text-2xl font-bold mb-4">
                {post.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {post.desc}
              </p>

              <button className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-4 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}