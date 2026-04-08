import Link from "next/link";
import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    quote: "Vanity dies on nature trails. Roam gave me back my love for the outdoors and I've made friendships that'll last a lifetime.",
    name: "Amina W.",
    role: "Member since 2022 · Nakuru",
  },
  {
    quote: "I joined as a complete beginner. The community is incredibly welcoming — no one gets left behind on the trail.",
    name: "Brian K.",
    role: "Summit Hiker · Nairobi",
  },
  {
    quote: "The Longonot rim hike was the hardest thing I've ever done. And the most rewarding. Already booked my next one.",
    name: "Cynthia M.",
    role: "Challenging hiker · Nakuru",
  },
];

const benefits = [
  "All fitness levels welcome",
  "Expert local guides on every hike",
  "Safety-first approach, always",
  "WhatsApp community of 500+ members",
  "Weekly rides, hikes & bird walks",
  "Discounts on merch and gear",
];

export default function CommunitySection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left — testimonials */}
          <div className="px-4 py-20 sm:px-10 lg:px-16">
            <p className="eyebrow mb-3">Voices from the trail</p>
            <h2 className="font-display font-700 text-dark text-4xl mb-10 leading-tight">
              People who found their <em className="italic text-sage">summit</em>
            </h2>

            <div className="space-y-6">
              {testimonials.map((t) => (
                <figure key={t.name} className="border-l-2 border-malachite/40 pl-5">
                  <blockquote className="body-light text-dark/75 text-base leading-relaxed mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <p className="font-sans font-600 text-sm text-dark">{t.name}</p>
                    <p className="font-sans text-xs text-forest/50">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Right — join panel */}
          <div className="bg-forest px-4 py-20 sm:px-10 lg:px-16 flex flex-col justify-center">
            <p className="eyebrow text-malachite/80 mb-3">Join the community</p>
            <h2 className="font-display font-700 text-mist text-4xl mb-4 leading-tight">
              The summit <em className="italic">awaits you</em>
            </h2>
            <p className="body-light text-mist/65 text-base mb-8 leading-relaxed">
              Whether you&apos;re chasing your first trail or your fiftieth summit —
              there&apos;s a place for you in Roam.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm font-sans text-mist/80">
                  <CheckCircle size={15} className="text-malachite flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/join"
                className="flex-1 text-center py-3.5 rounded-full bg-gold hover:bg-gold/90 text-dark font-sans font-600 text-sm transition-all hover:-translate-y-px"
              >
                Join Us
              </Link>
              <Link
                href="/events"
                className="flex-1 text-center py-3.5 rounded-full border border-mist/20 hover:border-mist/40 text-mist font-sans font-500 text-sm transition-all hover:-translate-y-px"
              >
                See Upcoming Hikes
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
