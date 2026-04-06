import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder products — replaced by Sanity data once getProducts() is wired
const products = [
  {
    slug: "nnts-summit-tee",
    name: "NNTS Summit Tee",
    category: "Apparel",
    price: 1500,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    slug: "rift-valley-trail-cap",
    name: "Rift Valley Trail Cap",
    category: "Accessories",
    price: 850,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
  },
  {
    slug: "nnts-insulated-bottle",
    name: "NNTS Insulated Bottle",
    category: "Gear",
    price: 1200,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  },
  {
    slug: "nnts-hoodie",
    name: "NNTS Hoodie",
    category: "Apparel",
    price: 2800,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
  },
];

export default function MerchPreview() {
  return (
    <section className="py-20 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">Gear up</p>
            <h2 className="font-display font-700 text-mist text-4xl lg:text-5xl">
              Wear the <em className="italic text-malachite">trail</em>
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-1.5 text-sm font-sans font-500 text-mist/50 hover:text-mist transition-colors"
          >
            View all merch <ArrowRight size={15} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="group bg-forest rounded-2xl overflow-hidden hover:ring-1 hover:ring-malachite/30 transition-all"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-400"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="eyebrow text-sage/70 text-[10px] mb-1">{product.category}</p>
                <h3 className="font-sans font-500 text-mist text-sm leading-snug mb-2">
                  {product.name}
                </h3>
                <p className="font-sans font-600 text-gold text-sm">
                  KSh {product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view-all */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-500 text-mist/60"
          >
            View all merch <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
