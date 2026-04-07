import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowLeft, CheckCircle, XCircle, Package, Star } from "lucide-react";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import JsonLd from "@/components/JsonLd";
import { allEvents } from "@/lib/events-data";
import { siteUrl } from "@/lib/site";

export async function generateStaticParams() {
  return allEvents.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = allEvents.find((e) => e.slug === slug);
  if (!event) return {};

  const url = `${siteUrl}/events/${event.slug}`;
  const imageUrl = `${siteUrl}/events/${event.slug}/opengraph-image`;
  const dateLabel = formatDate(event.date);

  return {
    title: event.title,
    description: `${event.description} ${dateLabel} · KSh ${event.priceKsh.toLocaleString()} per person.`,
    keywords: [
      event.title,
      event.trail,
      event.activityType,
      "Kenya hiking event",
      "NNTS event",
      "Nakuru outdoors",
      dateLabel,
    ],
    openGraph: {
      title: event.title,
      description: `${event.description} — ${dateLabel} · KSh ${event.priceKsh.toLocaleString()}/person`,
      url,
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: event.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: `${event.description} — ${dateLabel}`,
      images: [imageUrl],
    },
    alternates: { canonical: url },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-KE", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = allEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  const eventUrl = `${siteUrl}/events/${event.slug}`;

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    url: eventUrl,
    image: event.image,
    startDate: `${event.date}T${event.time}`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.meetingPoint ?? event.trail,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.trail,
        addressCountry: "KE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Nakuru Nature Trails & Summits",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: event.priceKsh,
      priceCurrency: "KES",
      availability: "https://schema.org/InStock",
      url: eventUrl,
    },
    ...(event.guide ? { performer: { "@type": "Person", name: event.guide } } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Events", item: `${siteUrl}/events` },
      { "@type": "ListItem", position: 3, name: event.title, item: eventUrl },
    ],
  };

  return (
    <>
      <JsonLd data={eventSchema} />
      <JsonLd data={breadcrumbSchema} />
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden bg-moss pt-[72px]">
        {event.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${event.image}?w=1400&q=85`}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest to-moss" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-dark/30" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <DifficultyBadge difficulty={event.difficulty} />
              <span className="text-[11px] font-sans font-600 px-2.5 py-1 rounded-full bg-dark/50 text-mist/90">
                {event.activityType}
              </span>
            </div>
            <h1 className="font-display font-700 text-mist text-4xl sm:text-5xl leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-sm font-sans text-sage hover:text-moss transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to all events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-sand rounded-xl p-4 flex gap-3 items-start">
                <Calendar size={16} className="text-sage mt-0.5 flex-shrink-0" />
                <div>
                  <p className="eyebrow mb-0.5">Date</p>
                  <p className="font-sans font-600 text-dark text-sm">{formatDate(event.date)}</p>
                </div>
              </div>
              <div className="bg-sand rounded-xl p-4 flex gap-3 items-start">
                <Clock size={16} className="text-sage mt-0.5 flex-shrink-0" />
                <div>
                  <p className="eyebrow mb-0.5">Meeting time</p>
                  <p className="font-sans font-600 text-dark text-sm">{event.time}</p>
                </div>
              </div>
              <div className="bg-sand rounded-xl p-4 flex gap-3 items-start">
                <MapPin size={16} className="text-sage mt-0.5 flex-shrink-0" />
                <div>
                  <p className="eyebrow mb-0.5">Location</p>
                  <p className="font-sans font-600 text-dark text-sm">{event.trail}</p>
                </div>
              </div>
            </div>

            {/* Meeting point */}
            {event.meetingPoint && (
              <div className="bg-mist/60 rounded-xl p-5 border border-fern/30">
                <p className="eyebrow mb-1.5">Meeting point</p>
                <p className="font-sans text-sm text-dark/80 leading-relaxed">{event.meetingPoint}</p>
              </div>
            )}

            {/* Description */}
            <div>
              <h2 className="font-display font-700 text-dark text-2xl mb-3">About this event</h2>
              <p className="body-light text-dark/70 leading-relaxed">{event.description}</p>
            </div>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div>
                <h2 className="font-display font-700 text-dark text-2xl mb-4">
                  <Star size={18} className="inline text-gold mr-2" />
                  Highlights
                </h2>
                <ul className="space-y-2.5">
                  {event.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm font-sans text-dark/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-malachite flex-shrink-0 mt-1.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What to bring */}
            {event.whatToBring && event.whatToBring.length > 0 && (
              <div>
                <h2 className="font-display font-700 text-dark text-2xl mb-4">
                  <Package size={18} className="inline text-sage mr-2" />
                  What to bring
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {event.whatToBring.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-sans text-dark/75">
                      <CheckCircle size={14} className="text-malachite flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Included / Not included */}
            {((event.includedInPrice?.length ?? 0) > 0 || (event.notIncluded?.length ?? 0) > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {event.includedInPrice && event.includedInPrice.length > 0 && (
                  <div>
                    <h3 className="font-sans font-600 text-dark text-sm mb-3 flex items-center gap-2">
                      <CheckCircle size={14} className="text-malachite" /> Included
                    </h3>
                    <ul className="space-y-2">
                      {event.includedInPrice.map((item) => (
                        <li key={item} className="text-sm font-sans text-dark/65">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.notIncluded && event.notIncluded.length > 0 && (
                  <div>
                    <h3 className="font-sans font-600 text-dark text-sm mb-3 flex items-center gap-2">
                      <XCircle size={14} className="text-ember" /> Not included
                    </h3>
                    <ul className="space-y-2">
                      {event.notIncluded.map((item) => (
                        <li key={item} className="text-sm font-sans text-dark/65">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar — sticky booking card */}
          <div>
            <div className="sticky top-24 bg-forest rounded-2xl p-6 space-y-5">
              <div>
                <p className="eyebrow text-malachite/80 mb-1">Price per person</p>
                <p className="font-display font-700 text-mist text-4xl">
                  KSh {event.priceKsh.toLocaleString()}
                </p>
              </div>

              {event.guide && (
                <p className="text-xs font-sans text-mist/50">
                  Lead guide: <span className="text-mist/80 font-500">{event.guide}</span>
                </p>
              )}

              <button className="w-full py-3.5 rounded-full bg-gold hover:bg-gold/90 text-dark font-sans font-600 text-sm transition-all hover:-translate-y-px">
                Book Now
              </button>

              <p className="text-[11px] font-sans text-mist/35 text-center leading-relaxed">
                You&apos;ll receive WhatsApp confirmation within 1 hour of booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
