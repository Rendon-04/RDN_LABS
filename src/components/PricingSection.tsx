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
    accent: "bg-teal-600",
    border: "border-teal-200/40",
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
      "2 months of support",
    ],
    cta: "Start This Plan",
    icon: BadgeCheck,
    accent: "bg-blue-600",
    border: "border-blue-200/45",
    featured: true,
  },
  {
    name: "Premium",
    price: "Starting at $2,499 one-time or $299/month",
    description:
      "For advanced web platforms including e-commerce, booking, or membership workflows.",
    features: [
      "Advanced architecture",
      "Complex integrations",
      "Custom business logic",
      "Performance and security hardening",
      "Longer support window",
    ],
    cta: "Start Project",
    icon: Gem,
    accent: "bg-violet-600",
    border: "border-violet-200/40",
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden py-32 bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="hero-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] animate-grain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-white mb-6">Pricing</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed mb-8">
            Flexible starting points for brands that need thoughtful design and scalable engineering.
          </p>
          <div className="w-16 h-px bg-white/70 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/15">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex h-full flex-col border bg-gradient-to-b from-white/[0.12] to-white/[0.06] p-10 md:p-12 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(0,0,0,0.9)] ${plan.border} ${plan.featured ? "lg:scale-[1.02]" : ""}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${plan.accent}`} />

              {plan.featured ? (
                <span className="mb-5 inline-flex w-fit items-center gap-2 border border-blue-200/40 bg-blue-200/10 px-3 py-1 text-xs tracking-wide text-blue-100">
                  Most Popular
                </span>
              ) : null}

              <div className="mb-3 flex items-center gap-3">
                <plan.icon className="h-5 w-5 text-white/90" strokeWidth={1.6} />
                <h3 className="text-3xl tracking-tight text-white">{plan.name}</h3>
              </div>

              <p className="mb-5 text-lg text-gray-100">{plan.price}</p>
              <p className="mb-8 text-gray-300 leading-relaxed">{plan.description}</p>

              <ul className="mb-10 space-y-3 text-gray-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 leading-relaxed">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-white/80" strokeWidth={1.8} />
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
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 border-t border-white/20 pt-10 text-center"
          >
          <p className="mx-auto max-w-4xl text-sm text-gray-300 leading-relaxed">
            Looking for something different? Extra pages, e-commerce modules, or custom
            functionality can be added for an additional fee - contact us for a custom quote.
          </p>
          <a
            href="/expertise"
            className="inline-flex mt-6 text-white border-b border-white/70 pb-1 hover:opacity-70 transition-opacity"
          >
            Learn more about our expertise
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
