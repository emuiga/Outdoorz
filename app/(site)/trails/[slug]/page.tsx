import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import JsonLd from "@/components/JsonLd";
import { allTrails } from "@/lib/trails-data";
import { siteUrl } from "@/lib/site";

export async function generateStaticParams() {
  return allTrails.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trail = allTrails.find((t) => t.slug === slug);
  if (!trail) return {};

  const url = `${siteUrl}/trails/${trail.slug}`;
  const imageUrl = `${siteUrl}/trails/${trail.slug}/opengraph-image`;
  const distanceLabel =
    typeof trail.distanceKm === "number" ? `${trail.distanceKm} km` : trail.distanceKm;

  return {
    title: trail.name,
    description: `${trail.description} ${distanceLabel} · ${trail.durationHours} · ${trail.elevationM} · ${trail.region}.`,
    keywords: [
      trail.name,
      `${trail.name} hike Kenya`,
      trail.region,
      trail.difficulty,
      trail.activityType,
      "Kenya hiking",
      "Roam trails",
    ],
    openGraph: {
      title: `${trail.name} — ${trail.difficulty} ${trail.activityType}`,
      description: trail.description,
      url,
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: trail.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${trail.name} — ${trail.difficulty} ${trail.activityType}`,
      description: trail.description,
      images: [imageUrl],
    },
    alternates: { canonical: url },
  };
}

export default async function TrailDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trail = allTrails.find((t) => t.slug === slug);
  if (!trail) notFound();

  const distanceLabel =
    typeof trail.distanceKm === "number" ? `${trail.distanceKm} km` : trail.distanceKm;

  const trailUrl = `${siteUrl}/trails/${trail.slug}`;

  const trailSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: trail.name,
    description: trail.description,
    url: trailUrl,
    image: trail.image,
    touristType: trail.activityType,
    address: {
      "@type": "PostalAddress",
      addressLocality: trail.region,
      addressCountry: "KE",
    },
    ...(trail.locationOverview ? { description: trail.locationOverview } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Trails", item: `${siteUrl}/trails` },
      { "@type": "ListItem", position: 3, name: trail.name, item: trailUrl },
    ],
  };

  return (
    <>
      <JsonLd data={trailSchema} />
      <JsonLd data={breadcrumbSchema} />
    <div className="bg-cream min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative h-[60vh] min-h-[380px] overflow-hidden bg-moss pt-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${trail.image}?w=1400&q=85`}
          alt={trail.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/25 to-dark/20" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-2 mb-3">
              <DifficultyBadge difficulty={trail.difficulty} />
              <span className="text-[11px] font-sans font-600 px-2.5 py-1 rounded-full bg-dark/50 text-mist/90">
                {trail.activityType}
              </span>
            </div>
            <h1 className="font-display font-700 text-mist text-4xl sm:text-5xl leading-tight mb-2">
              {trail.name}
            </h1>
            <div className="flex items-center gap-1.5 text-mist/70 text-sm font-sans">
              <Image src="/icons/location.webp" alt="" width={14} height={14} className="opacity-70" />
              {trail.region}
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick stats bar ──────────────────────────────────────────── */}
      <div className="bg-forest border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { iconSrc: "/icons/path.webp", label: "Distance", value: distanceLabel },
              { iconSrc: "/icons/besttime.webp", label: "Duration", value: trail.durationHours },
              { iconSrc: "/icons/mountain.webp", label: "Elevation", value: trail.elevationM },
            ].map(({ iconSrc, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 sm:px-6 py-4">
                <Image
                  src={iconSrc}
                  alt={label}
                  width={22}
                  height={22}
                  className="flex-shrink-0 brightness-0 invert opacity-80"
                />
                <div>
                  <p className="font-sans font-700 text-mist text-sm leading-none">{value}</p>
                  <p className="text-mist/45 text-xs font-sans mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">

        <Link
          href="/trails"
          className="inline-flex items-center gap-1.5 text-sm font-sans text-sage hover:text-moss transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All trails
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* ── Main content ─────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-12">

            {/* About */}
            <section>
              <SectionHeading iconSrc="/icons/mountain.webp" title={`About ${trail.name}`} />
              <p className="body-light text-dark/70 leading-relaxed text-base">
                {trail.description}
              </p>
            </section>

            {/* Location */}
            {trail.locationOverview && (
              <section>
                <SectionHeading iconSrc="/icons/location.webp" title={`${trail.name} location`} />
                <p className="body-light text-dark/70 leading-relaxed">{trail.locationOverview}</p>
              </section>
            )}

            {/* How to access */}
            {trail.howToAccess && (
              <section>
                <SectionHeading
                  iconSrc="/icons/directional-sign.webp"
                  title={`How to access ${trail.name}`}
                />
                <div className="space-y-6">
                  {trail.howToAccess.road && (
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-9 w-9 rounded-xl bg-forest/8 flex items-center justify-center mt-0.5">
                        <Image
                          src="/icons/roadmap.webp"
                          alt="By road"
                          width={22}
                          height={22}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-sans font-600 text-dark text-sm mb-1">By road</p>
                        <p className="body-light text-dark/65 leading-relaxed text-sm">
                          {trail.howToAccess.road}
                        </p>
                      </div>
                    </div>
                  )}
                  {trail.howToAccess.air && (
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-9 w-9 rounded-xl bg-forest/8 flex items-center justify-center mt-0.5">
                        <Image
                          src="/icons/air.webp"
                          alt="By air"
                          width={22}
                          height={22}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-sans font-600 text-dark text-sm mb-1">By air</p>
                        <p className="body-light text-dark/65 leading-relaxed text-sm">
                          {trail.howToAccess.air}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Best time to visit */}
            {trail.bestTimeToVisit && (
              <section>
                <SectionHeading iconSrc="/icons/besttime.webp" title="Best time to visit" />
                <p className="body-light text-dark/70 leading-relaxed">{trail.bestTimeToVisit}</p>
              </section>
            )}

            {/* Attractions */}
            {trail.attractions && trail.attractions.length > 0 && (
              <section>
                <SectionHeading
                  iconSrc="/icons/path.webp"
                  title={`Attractions in ${trail.name}`}
                />
                <div className="space-y-4">
                  {trail.attractions.map((a) => (
                    <div key={a.name} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sage flex-shrink-0" />
                      <p className="body-light text-dark/70 leading-relaxed text-sm">
                        <span className="font-sans font-600 text-dark">{a.name}:</span>{" "}
                        {a.desc}
                      </p>
                    </div>
                  ))}
                </div>
                {trail.nearbyAttractions && trail.nearbyAttractions.length > 0 && (
                  <div className="mt-6 p-5 rounded-xl bg-sand border border-mist">
                    <p className="font-sans font-600 text-dark text-sm mb-3">Nearby attractions</p>
                    <ul className="space-y-2">
                      {trail.nearbyAttractions.map((n) => (
                        <li key={n} className="flex gap-2.5 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-fern flex-shrink-0" />
                          <span className="body-light text-dark/65">{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Activities */}
            {trail.activities && trail.activities.length > 0 && (
              <section>
                <SectionHeading
                  iconSrc="/icons/path.webp"
                  title={`Activities in ${trail.name}`}
                />
                <div className="space-y-5">
                  {trail.activities.map((a) => (
                    <div key={a.name}>
                      <p className="font-sans font-600 text-dark text-sm mb-1">{a.name}</p>
                      <p className="body-light text-dark/65 leading-relaxed text-sm">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Duration detail */}
            {trail.durationDetail && (
              <section>
                <SectionHeading
                  iconSrc="/icons/besttime.webp"
                  title={`How long does it take to hike ${trail.name}?`}
                />
                <p className="body-light text-dark/70 leading-relaxed">{trail.durationDetail}</p>
              </section>
            )}

            {/* Accommodations */}
            {trail.accommodations && (
              <section>
                <SectionHeading iconSrc="/icons/people.webp" title="Accommodation" />
                {trail.accommodations.intro && (
                  <p className="body-light text-dark/70 leading-relaxed mb-4">
                    {trail.accommodations.intro}
                  </p>
                )}
                {trail.accommodations.options && (
                  <ul className="space-y-2">
                    {trail.accommodations.options.map((o) => (
                      <li key={o} className="flex gap-2.5 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sage flex-shrink-0" />
                        <span className="body-light text-dark/65">{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* Entry fees */}
            {trail.entryFees && trail.entryFees.length > 0 && (
              <section>
                <SectionHeading iconSrc="/icons/calendar.webp" title="Entry fees & payment" />
                <div className="overflow-x-auto rounded-xl border border-mist">
                  <table className="w-full text-sm font-sans">
                    <thead className="bg-sand">
                      <tr>
                        <th className="text-left px-5 py-3 font-600 text-dark/70 text-xs uppercase tracking-wide">
                          Category
                        </th>
                        <th className="text-left px-5 py-3 font-600 text-dark/70 text-xs uppercase tracking-wide">
                          Adult
                        </th>
                        <th className="text-left px-5 py-3 font-600 text-dark/70 text-xs uppercase tracking-wide">
                          Child
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-mist bg-cream">
                      {trail.entryFees.map((row) => (
                        <tr key={row.category}>
                          <td className="px-5 py-3.5 text-dark/80">{row.category}</td>
                          <td className="px-5 py-3.5 font-600 text-dark">{row.adult}</td>
                          <td className="px-5 py-3.5 text-dark/65">{row.child ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {trail.paymentInfo && (
                  <p className="mt-3 text-sm body-light text-dark/55">{trail.paymentInfo}</p>
                )}
              </section>
            )}

          </div>

          {/* ── Sidebar ──────────────────────────────────────────────── */}
          <div className="space-y-4 lg:sticky lg:top-24 self-start">

            <div className="bg-forest rounded-2xl p-6">
              <p className="eyebrow text-malachite/80 mb-2">Ready to hike?</p>
              <h3 className="font-display font-700 text-mist text-xl mb-3">
                Join an upcoming group hike on this trail
              </h3>
              <Link
                href={`/events?trail=${encodeURIComponent(trail.name)}`}
                className="block text-center py-3 rounded-full bg-gold hover:bg-gold/90 text-dark text-sm font-sans font-600 transition-all hover:-translate-y-px"
              >
                View Events
              </Link>
            </div>

            <div className="border border-mist rounded-2xl p-5">
              <p className="font-sans font-600 text-dark text-sm mb-1">
                Want this trail for your group?
              </p>
              <p className="body-light text-dark/50 text-xs mb-4 leading-relaxed">
                We organise private hikes to any trail in Kenya. Your date, your pace.
              </p>
              <Link
                href="/private-hikes"
                className="block text-center py-2.5 rounded-full border border-forest text-forest hover:bg-forest hover:text-mist text-sm font-sans font-600 transition-all"
              >
                Plan a private hike
              </Link>
            </div>

            {trail.externalUrl && (
              <a
                href={trail.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-mist hover:border-fern bg-cream text-sm font-sans font-500 text-dark/65 hover:text-dark transition-colors"
              >
                Official KWS page
                <ExternalLink size={13} className="text-sage" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ iconSrc, title }: { iconSrc: string; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="h-8 w-8 rounded-lg bg-forest/8 flex items-center justify-center flex-shrink-0">
        <Image src={iconSrc} alt="" width={20} height={20} className="object-contain" />
      </div>
      <h2 className="font-display font-700 text-dark text-xl leading-tight">{title}</h2>
    </div>
  );
}
