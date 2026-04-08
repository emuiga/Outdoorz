import Link from "next/link";
import { ArrowRight, ImageOff } from "lucide-react";
import { getGalleryImages } from "@/lib/sanity/queries";

interface GalleryImage {
  _id: string;
  url: string;
  caption?: string;
}

export default async function PastHikes() {
  let images: GalleryImage[] = [];

  try {
    images = await getGalleryImages();
  } catch {
    // Sanity not yet populated — renders empty state below
  }

  return (
    <section className="py-20 bg-sand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">On the ground</p>
            <h2 className="font-display font-700 text-dark text-4xl lg:text-5xl">
              Past <em className="italic text-sage">hikes</em>
            </h2>
          </div>
          {images.length > 0 && (
            <Link
              href="/gallery"
              className="hidden sm:flex items-center gap-1.5 text-sm font-sans font-500 text-sage hover:text-moss transition-colors"
            >
              Full gallery <ArrowRight size={15} />
            </Link>
          )}
        </div>

        {images.length === 0 ? (
          /* Empty state — shown until photos are added in Sanity Studio */
          <div className="flex flex-col items-center justify-center py-20 rounded-2xl border-2 border-dashed border-fern/30 text-center">
            <ImageOff size={36} className="text-fern/40 mb-4" />
            <p className="font-sans font-500 text-dark/50 text-sm mb-1">No photos yet</p>
            <p className="font-sans text-xs text-dark/35 max-w-xs leading-relaxed">
              Add past hike photos via{" "}
              <a href="/studio" className="text-sage hover:underline">
                Sanity Studio → Gallery
              </a>{" "}
              and they'll appear here automatically.
            </p>
          </div>
        ) : (
          /* Masonry-style responsive grid */
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.slice(0, 12).map((img) => (
              <div
                key={img._id}
                className="group relative break-inside-avoid rounded-xl overflow-hidden bg-moss"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${img.url}?w=600&q=80&auto=format`}
                  alt={img.caption ?? "Roam hike photo"}
                  loading="lazy"
                  className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-400"
                />
                {img.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/70 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-sans text-xs text-mist/90">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {images.length > 0 && (
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-sans font-500 text-sage"
            >
              Full gallery <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
