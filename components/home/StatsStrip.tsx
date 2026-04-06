"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "500+", label: "Community Members" },
  { value: "12",   label: "Featured Trails" },
  { value: "5",    label: "Years Running" },
  { value: "2,776m", label: "Highest Summit" },
];

export default function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-forest py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-mist/10 rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-forest px-6 py-10 text-center"
            >
              <p className="font-display font-700 text-4xl lg:text-5xl text-mist mb-2">
                {stat.value}
              </p>
              <p className="eyebrow">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
