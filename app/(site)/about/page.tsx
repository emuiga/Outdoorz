import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Roam Adventures",
  description:
    "We're a Nakuru-based outdoor community putting Kenya's trails on the map — one hike at a time.",
};

const stats = [
  { value: "500+", label: "Active members" },
  { value: "28", label: "Mapped trails" },
  { value: "2019", label: "Founded" },
  { value: "Every weekend", label: "We're on a trail" },
];

const values = [
  {
    title: "Trails over comfort zones",
    desc: "We believe the best version of yourself is waiting at the summit. We exist to help you find it.",
  },
  {
    title: "Community first",
    desc: "Every hike is a gathering. We move together, eat together, and look out for one another on the trail.",
  },
  {
    title: "Kenya's wild spaces",
    desc: "From the Rift Valley crater rim to the Kakamega rainforest — we're documenting and protecting Kenya's natural heritage.",
  },
  {
    title: "Accessible adventure",
    desc: "Whether it's your first time lacing up boots or your hundredth summit, there's a trail and a group for you here.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-sand min-h-screen">
      {/* Hero */}
      <div className="bg-forest pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow mb-3">Our story</p>
          <h1 className="font-display font-700 text-mist text-5xl lg:text-6xl leading-tight mb-6 max-w-2xl">
            Born on the{" "}
            <em className="italic text-malachite">rim of Menengai</em>
          </h1>
          <p className="body-light text-mist/60 text-lg max-w-xl leading-relaxed">
            What started as a small group of friends refusing to spend weekends indoors has grown
            into Kenya&apos;s most active Rift Valley trail community.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-moss">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display font-700 text-mist text-3xl lg:text-4xl">{value}</p>
                <p className="body-light text-mist/55 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6">
            <h2 className="font-display font-700 text-dark text-3xl">
              We put Kenya&apos;s trails on the map
            </h2>
            <p className="body-light text-dark/65 leading-relaxed">
              Roam Adventures was born in 2019 from a simple frustration: too
              many Kenyans didn&apos;t know the extraordinary wilderness sitting in their own
              backyard. The Menengai crater, Hell&apos;s Gate gorges, the Aberdare moorlands —
              world-class terrain that deserved to be walked, not just admired from the road.
            </p>
            <p className="body-light text-dark/65 leading-relaxed">
              We started with weekend hikes out of Nakuru. Word spread fast. Within a year we had
              a community. Within two, we had members from across Kenya joining us on trail.
              Today, Roam runs weekly group hikes, cycling routes, camping trips, and private
              expeditions — all guided, all safe, all unforgettable.
            </p>
            <p className="body-light text-dark/65 leading-relaxed">
              Every shilling from our events and merch goes back into the community: trail
              maintenance, safety equipment, scholarships for guides, and access programmes that
              bring young Kenyans onto the trail for free.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-moss">
            <Image
              src="/images/nature.webp"
              alt="Roam hikers on trail"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div>
          <p className="eyebrow mb-3">What drives us</p>
          <h2 className="font-display font-700 text-dark text-3xl mb-10">Our values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="bg-cream border border-mist rounded-2xl p-7">
                <h3 className="font-sans font-600 text-dark text-base mb-2">{title}</h3>
                <p className="body-light text-dark/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-forest rounded-3xl px-8 py-12 text-center">
          <p className="eyebrow text-malachite/70 mb-3">Join the community</p>
          <h2 className="font-display font-700 text-mist text-3xl mb-4">
            Your next trail is waiting
          </h2>
          <p className="body-light text-mist/60 mb-8 max-w-md mx-auto">
            Browse upcoming hikes and book your spot, or reach out on WhatsApp and we&apos;ll find
            the right trail for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gold hover:bg-gold/90 text-dark font-sans font-600 text-sm transition-all hover:-translate-y-px"
            >
              See upcoming events
            </Link>
            <Link
              href="/trails"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-mist/25 hover:border-mist/50 text-mist font-sans font-500 text-sm transition-colors"
            >
              Explore trails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
