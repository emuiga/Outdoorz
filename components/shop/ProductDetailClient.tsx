"use client";

import { useState } from "react";
import { ShoppingBag, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types/product";

export default function ProductDetailClient({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? undefined);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 pt-24">

        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm font-sans text-sage hover:text-moss transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-sand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.originalPrice && (
              <span className="absolute top-4 left-4 text-[11px] font-sans font-600 px-3 py-1.5 rounded-full bg-ember text-mist">
                Sale
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="eyebrow mb-2">{product.category}</p>
              <h1 className="font-display font-700 text-dark text-3xl sm:text-4xl leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-sans font-700 text-dark text-3xl">
                KSh {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-base font-sans text-dark/35 line-through">
                  KSh {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="body-light text-dark/65 leading-relaxed text-base">
              {product.description}
            </p>

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <p className="text-xs font-sans font-500 text-dark/50 mb-3 uppercase tracking-wider">
                  Size{selectedSize ? ` — ${selectedSize}` : ""}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`text-sm font-sans font-500 px-4 py-2.5 rounded-xl border transition-colors ${
                        selectedSize === s
                          ? "border-moss bg-moss text-mist"
                          : "border-mist text-dark/65 hover:border-fern"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleAdd}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-base font-sans font-600 transition-all hover:-translate-y-px ${
                  added
                    ? "bg-malachite/20 text-moss border border-malachite/30"
                    : product.inStock
                      ? "bg-forest text-mist hover:bg-moss"
                      : "bg-mist text-dark/30 cursor-not-allowed"
                }`}
              >
                {added ? <Check size={18} /> : <ShoppingBag size={18} />}
                {added ? "Added to cart!" : product.inStock ? "Add to Cart" : "Sold Out"}
              </button>
              <p className="text-center text-xs font-sans text-dark/30">
                Checkout via WhatsApp · We confirm and arrange delivery within 24 hrs
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
