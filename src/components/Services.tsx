import { motion } from "motion/react";
import { Code2, Palette, Rocket, Globe, Zap, Layers } from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    icon: Code2,
    title: "Development",
    description: "Custom web applications built with modern technology stacks and best practices.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Thoughtful interfaces that prioritize user experience and visual clarity.",
  },
  {
    icon: Rocket,
    title: "Optimization",
    description: "Performance-focused solutions that deliver speed and efficiency.",
  },
  {
    icon: Globe,
    title: "Strategy",
    description: "Digital solutions aligned with your business objectives and growth.",
  },
  {
    icon: Zap,
    title: "Integration",
    description: "Seamless API and third-party service implementation.",
  },
  {
    icon: Layers,
    title: "Architecture",
    description: "Scalable systems designed for long-term success and maintainability.",
  },
];

export function Services() {
  const handleLearnMore = (serviceTitle: string) => {
    toast.success(`Learn more about ${serviceTitle}`, {
      description: "Our team will reach out to discuss this service in detail.",
    });
  };

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
                onClick={() => handleLearnMore(service.title)}
              >
                <Icon className="w-6 h-6 text-black mb-6" strokeWidth={1} />
                
                <h3 className="text-2xl tracking-tight text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}