import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "Hands-On Development" },
  { value: 100, suffix: "%", label: "End-to-End Ownership" },
  { value: 1, suffix: "", label: "Founder & Engineer" }
];

function AnimatedCounter({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl tracking-tight text-black mb-3">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  start={isInView}
                />
              </div>
              <div className="text-sm text-gray-600 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
