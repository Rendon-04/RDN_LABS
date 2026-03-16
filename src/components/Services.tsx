import { type ComponentType, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Rocket,
  Globe,
  Zap,
  Layers,
  MousePointerClick,
} from "lucide-react";

import { ExpertiseModal } from "./ExpertiseModal";

type Service = {
  icon: ComponentType<{ className?: string; strokeWidth?: number | string }>;
  title: string;
  description: string;
  detail: {
    modalTitle: string;
    paragraphs: string[];
    keyServices: string[];
    technologies?: string;
  };
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Development",
    description: "Custom web applications built with modern technology stacks and best practices.",
    detail: {
      modalTitle: "Custom Web Development",
      paragraphs: [
        "We build modern web applications using scalable technologies and industry best practices. Our development process focuses on performance, maintainability, and long-term growth so your platform can evolve as your business expands.",
        "From startup landing pages to complex internal tools and full-scale digital products, we develop systems designed to handle real-world usage and growth.",
      ],
      keyServices: [
        "Full-stack web application development",
        "Custom business platforms and dashboards",
        "Frontend interfaces using modern frameworks",
        "Backend systems and API development",
        "Database architecture and data modeling",
        "Secure authentication and user management",
      ],
      technologies:
        "Technologies often include React, Next.js, Node.js, Python, FastAPI, PostgreSQL, and modern cloud infrastructure.",
    },
  },
  {
    icon: Palette,
    title: "Design",
    description: "Thoughtful interfaces that prioritize user experience and visual clarity.",
    detail: {
      modalTitle: "Product & Interface Design",
      paragraphs: [
        "Design is not just about visuals - it is about creating intuitive digital experiences that users can understand instantly. We focus on thoughtful interface design that balances clarity, usability, and brand identity.",
        "Before development begins, we design the structure and flow of the product so that every page, interaction, and feature feels natural and intentional.",
        "Our design process also ensures that the final product translates smoothly into development without unnecessary complexity.",
      ],
      keyServices: [
        "UI / UX design for web platforms",
        "Product interface design",
        "Interaction and user flow design",
        "Responsive design for desktop and mobile",
        "Design systems and component libraries",
      ],
      technologies:
        "Design work is created using Figma to ensure collaboration, rapid iteration, and a seamless handoff to development.",
    },
  },
  {
    icon: Rocket,
    title: "Optimization",
    description: "Performance-focused solutions that deliver speed and efficiency.",
    detail: {
      modalTitle: "Performance Optimization",
      paragraphs: [
        "A website that loads slowly or performs poorly will lose users and reduce conversions. Our optimization work focuses on improving performance, speed, and efficiency across the entire application stack.",
        "We analyze bottlenecks in both frontend and backend systems to ensure your product performs consistently even under heavy usage.",
      ],
      keyServices: [
        "Page load speed improvements",
        "Database query optimization",
        "API response performance",
        "Asset compression and caching",
        "Lighthouse and Core Web Vitals optimization",
        "Infrastructure performance tuning",
      ],
    },
  },
  {
    icon: Globe,
    title: "Strategy",
    description: "Digital solutions aligned with your business objectives and growth.",
    detail: {
      modalTitle: "Digital Product Strategy",
      paragraphs: [
        "Successful digital products begin with clear strategy. We help businesses determine the right technical approach, product structure, and feature prioritization before development begins.",
        "Our strategy work ensures that technology decisions align with business objectives and future scalability.",
      ],
      keyServices: [
        "Technical planning and product roadmapping",
        "Feature prioritization for MVP development",
        "Architecture planning for scalability",
        "Platform selection and technology recommendations",
        "Growth-focused digital infrastructure planning",
      ],
    },
  },
  {
    icon: Zap,
    title: "Integration",
    description: "Seamless API and third-party service implementation.",
    detail: {
      modalTitle: "API & System Integration",
      paragraphs: [
        "Modern businesses rely on many different software tools. We integrate platforms so they communicate seamlessly and automate workflows across systems.",
        "Whether connecting payment platforms, CRMs, marketing tools, or internal systems, integrations allow your business operations to function more efficiently.",
      ],
      keyServices: [
        "Third-party API integrations",
        "Payment systems (Stripe, etc.)",
        "CRM integrations",
        "Marketing and analytics tools",
        "Authentication systems",
        "Custom internal API development",
      ],
    },
  },
  {
    icon: Layers,
    title: "Architecture",
    description: "Scalable systems designed for long-term success and maintainability.",
    detail: {
      modalTitle: "Scalable System Architecture",
      paragraphs: [
        "The foundation of every reliable digital platform is strong architecture. We design backend systems and infrastructure that remain stable, secure, and maintainable as usage grows.",
        "Our architectural approach prioritizes modular systems that can evolve over time without requiring complete rebuilds.",
      ],
      keyServices: [
        "Backend system design",
        "Database architecture and schema design",
        "Scalable API structures",
        "Microservice-ready architectures",
        "Security and authentication frameworks",
        "Long-term maintainability planning",
      ],
    },
  },
];

export function Services() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | null>(null);

  const selectedService = useMemo(
    () => services.find((service) => service.title === selectedServiceTitle) ?? null,
    [selectedServiceTitle],
  );

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-6">
            Expertise
          </h2>
          <div className="w-16 h-px bg-black mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-12 hover:bg-gray-50 transition-colors cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
                onClick={() => setSelectedServiceTitle(service.title)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSelectedServiceTitle(service.title);
                  }
                }}
              >
                <Icon className="w-6 h-6 text-black mb-6" strokeWidth={1} />

                <h3 className="text-2xl tracking-tight text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-black opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span>Learn more</span>
                  <MousePointerClick aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ExpertiseModal
        open={Boolean(selectedService)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedServiceTitle(null);
          }
        }}
        detail={selectedService?.detail ?? null}
      />
    </section>
  );
}
