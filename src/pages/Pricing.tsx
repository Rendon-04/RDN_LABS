import { useEffect } from "react";
import { motion } from "motion/react";
import { BadgeCheck, Check, Gem, Rocket } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  icon: typeof Rocket;
  accent: string;
  border: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$699 one-time or $99/month",
    description:
      "For simple, high-quality web presence projects that need a professional launch quickly.",
    features: [
      "Up to 3 pages",
      "Custom design",
      "Responsive layout",
      "Basic SEO",
      "Contact form",
    ],
    cta: "Start This Plan",
    icon: Rocket,
    accent: "bg-teal-300",
    border: "border-teal-300/30",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,499 one-time or $199/month",
    description:
      "For growing businesses that need more content flexibility, stronger branding, and support.",
    features: [
      "5-7 pages",
      "Custom branding",
      "Optional blog/portfolio section",
      "Analytics setup",
      "3 months of support",
    ],
    cta: "Start This Plan",
    icon: BadgeCheck,
    accent: "bg-blue-300",
    border: "border-blue-300/35",
    featured: true,
  },
  {
    name: "Premium",
    price: "Starting at $2,499 one-time or $299/month",
    description:
      "For advanced web platforms with custom flows, integrations, and longer-term implementation.",
    features: [
      "E-commerce, booking, or memberships",
      "Advanced feature planning",
      "Third-party integrations",
      "Performance-first architecture",
      "Continuous support",
    ],
    cta: "Start Project",
    icon: Gem,
    accent: "bg-violet-300",
    border: "border-violet-300/30",
    featured: false,
  },
];

export function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black pt-32 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="hero-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] animate-grain" />
      </div>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h1 className="mb-6 text-5xl tracking-tight text-white md:text-6xl">Pricing</h1>
            <p className="mx-auto mb-6 max-w-3xl text-xl leading-relaxed text-gray-300">
              Transparent starting points for websites and web platforms built with design clarity,
              modern engineering, and long-term scalability.
            </p>
            <div className="mx-auto h-px w-16 bg-white/70" />
          </motion.div>

          <div className="grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex h-full flex-col border bg-gradient-to-b from-white/[0.12] to-white/[0.06] p-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(0,0,0,0.9)] md:p-12 ${plan.border} ${plan.featured ? "lg:scale-[1.02]" : ""}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${plan.accent}`} />

                {plan.featured ? (
                  <span className="mb-5 inline-flex w-fit items-center gap-2 border border-blue-200/40 bg-blue-200/10 px-3 py-1 text-xs tracking-wide text-blue-100">
                    Most Popular
                  </span>
                ) : null}

                <div className="mb-3 flex items-center gap-3">
                  <plan.icon className="h-5 w-5 text-white/90" strokeWidth={1.6} />
                  <h2 className="text-3xl tracking-tight text-white">{plan.name}</h2>
                </div>

                <p className="mb-5 text-lg text-gray-100">{plan.price}</p>
                <p className="mb-8 leading-relaxed text-gray-300">{plan.description}</p>

                <ul className="mb-10 space-y-3 text-gray-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 leading-relaxed">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-white/80" strokeWidth={1.7} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="mt-auto inline-flex items-center justify-center border border-white/40 px-7 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {plan.cta}
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 border-t border-white/20 pt-10 text-center"
          >
            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-gray-300">
              Need more? Custom features and additional pages are available for an extra fee -
              contact us for a quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/20 bg-white/[0.03] p-12 text-center md:p-16"
          >
            <h2 className="mb-6 text-5xl tracking-tight text-white md:text-6xl">Let&apos;s Build It</h2>
            <p className="mx-auto mb-10 max-w-3xl leading-relaxed text-gray-300">
              If you&apos;re ready to start or need a custom quote based on your exact goals, reach out
              and we&apos;ll map the right scope and budget together.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-white/40 px-8 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Start Project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
