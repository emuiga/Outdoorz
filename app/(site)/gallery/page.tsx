import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { getGalleryImages } from "@/lib/sanity/queries";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Nakuru Nature Trails & Summits",
  description: "Photos from past hikes, cycling rides and camping trips across Kenya.",
};

export const revalidate = 3600;

export default async function GalleryPage() {
  let images: { _id: string; url: string; caption?: string }[] = [];
  try {
    images = await getGalleryImages();
  } catch {
    // Sanity not yet configured — show empty state
  }

  return (
    <div className="bg-sand min-h-screen">
      <PageHeader
        eyebrow="Past hikes"
        title="From the"
        titleAccent="trail"
        description="Moments captured on Kenya's trails — summits, gorges, sunrises and the people who make the journey."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center gap-5">
            <div className="h-20 w-20 rounded-full bg-forest/8 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-9 w-9 text-sage"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18M3 3v18"
                />
              </svg>
            </div>
            <div>
              <p className="font-sans font-600 text-dark/60 text-lg">Photos coming soon</p>
              <p className="body-light text-dark/40 text-sm mt-1 max-w-sm">
                We&apos;re building the gallery. In the meantime, follow us on Instagram for the
                latest trail shots.
              </p>
            </div>
            <a
              href="https://www.instagram.com/nakurunaturetrailsandsummits/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-mist hover:border-fern text-sm font-sans font-500 text-dark/60 hover:text-dark transition-colors"
            >
              View on Instagram
            </a>
          </div>
        ) : (
          <>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {images.map((img) => (
                <div
                  key={img._id}
                  className="break-inside-avoid rounded-xl overflow-hidden bg-moss group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${img.url}?w=600&q=80`}
                    alt={img.caption ?? "NNTS trail photo"}
                    loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {img.caption && (
                    <p className="px-3 py-2 text-xs font-sans text-mist/60">{img.caption}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="body-light text-dark/40 text-sm mb-3">Want to see more?</p>
              <a
                href="https://www.instagram.com/nakurunaturetrailsandsummits/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-mist hover:border-fern text-sm font-sans font-500 text-dark/60 hover:text-dark transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
