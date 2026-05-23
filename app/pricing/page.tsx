"use client";

const plans = [
  {
    name: "Starter",
    price: "$299",
    features: ["1 Website", "Basic SEO", "Hosting Support"],
  },
  {
    name: "Professional",
    price: "$999",
    features: ["Full Stack App", "AI Integration", "Cloud Deployment"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom AI Systems", "DevOps", "24/7 Support"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-[68px] px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto text-center mb-20">

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Pricing Plans
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Flexible pricing for startups and enterprises.
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {plans.map((plan, index) => (
          <div
            key={index}
            className="
              group rounded-[32px]
              p-10
              border border-slate-200 dark:border-white/10
              bg-white/70 dark:bg-white/5
              backdrop-blur-xl
              hover:-translate-y-3
              hover:border-indigo-400/40
              transition-all duration-500
            "
          >

            <h2 className="text-3xl font-black mb-4">
              {plan.name}
            </h2>

            <h3 className="text-5xl font-black bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent mb-8">
              {plan.price}
            </h3>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-slate-600 dark:text-slate-400">
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <button className="
              w-full py-4 rounded-2xl
              bg-gradient-to-r from-indigo-500 to-emerald-400
              text-white font-bold
              hover:scale-105 transition
            ">
              Get Started
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}