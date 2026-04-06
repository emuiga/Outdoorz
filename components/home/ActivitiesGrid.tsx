"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const activities = [
  {
    title: "Summit Hiking",
    tag: "Most Popular",
    meta: "Up to 2,776m · Menengai, Longonot, Eburu",
    href: "/trails",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80",
    tall: true,
  },
  {
    title: "Cycling",
    tag: "All Levels",
    meta: "Road · Gravel · MTB",
    href: "/cycling",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=700&q=80",
    tall: false,
  },
  {
    title: "Bird Walks",
    tag: "Wildlife",
    meta: "Lake Nakuru · Elementaita",
    href: "/trails?type=Bird+Walk",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=700&q=80",
    tall: false,
  },
  {
    title: "Camping",
    tag: "Overnight",
    meta: "Rift Valley · Crater rim · Stargazing",
    href: "/events?type=Camping",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&q=80",
    tall: false,
  },
];

export default function ActivitiesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow mb-2">What we do</p>
          <h2 className="font-display font-700 text-dark text-4xl lg:text-5xl">
            Adventures for <em className="italic text-sage">every soul</em>
          </h2>
        </div>

        {/* Grid: 1-col → 2-col md → asymmetric lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-rows-2">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className={activity.tall ? "lg:row-span-2" : ""}
            >
              <Link
                href={activity.href}
                className="group relative flex overflow-hidden rounded-2xl bg-moss"
                style={{ height: activity.tall ? "100%" : "260px", minHeight: activity.tall ? "520px" : "260px" }}
              >
                {/* Image */}
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="inline-block eyebrow text-malachite/90 mb-1.5">{activity.tag}</span>
                  <h3 className="font-display font-700 text-mist text-2xl leading-tight mb-1">
                    {activity.title}
                  </h3>
                  <p className="font-sans text-sm text-mist/60 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {activity.meta}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
