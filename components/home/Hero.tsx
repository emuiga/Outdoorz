"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <Image
        src="/images/nature.webp"
        alt="Rift Valley landscape, Nakuru Kenya"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlays — darken bottom and top for nav legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/20 to-dark/75 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">

        {/* Eyebrow badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-6">
          <span className="h-px w-8 bg-malachite/70" />
          <span className="eyebrow text-malachite/90">Nakuru, Kenya · Great Rift Valley</span>
          <span className="h-px w-8 bg-malachite/70" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-700 text-mist leading-[1.08] text-5xl sm:text-6xl lg:text-7xl mb-6"
        >
          Where the trail
          <br />
          <em className="italic text-malachite">begins</em> within you
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          {...fadeUp(0.2)}
          className="body-light text-mist/75 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Meet new friends, explore breathtaking trails, and create
          unforgettable memories across Kenya&apos;s Rift Valley.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/events"
            className="px-8 py-3.5 rounded-full bg-gold hover:bg-gold/90 text-dark font-sans font-600 text-sm transition-all hover:-translate-y-px shadow-lg shadow-dark/30"
          >
            Upcoming Hikes
          </Link>
          <Link
            href="/trails"
            className="px-8 py-3.5 rounded-full border border-mist/40 hover:border-mist/70 hover:bg-mist/10 text-mist font-sans font-500 text-sm transition-all hover:-translate-y-px"
          >
            Explore Trails
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-mist/50" />
        </motion.div>
        <span className="text-mist/40 font-sans text-[10px] uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
