"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Check } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? undefined);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
    openCart();
  }

  return (
    <div className="group bg-cream rounded-2xl overflow-hidden border border-mist hover:border-fern hover:shadow-md transition-all flex flex-col">
      {/* Image */}
      <Link href={`/shop/${product.slug}`} className="block relative aspect-square overflow-hidden bg-sand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 text-[11px] font-sans font-600 px-2.5 py-1 rounded-full bg-ember text-mist">
            Sale
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <p className="eyebrow mb-1">{product.category}</p>
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-display font-700 text-dark text-base leading-snug hover:text-forest transition-colors">{product.name}</h3>
          </Link>
        </div>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`text-xs font-sans font-500 px-2.5 py-1 rounded-md border transition-colors ${
                  selectedSize === s
                    ? "border-moss bg-moss text-mist"
                    : "border-mist text-dark/60 hover:border-fern"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-mist mt-auto gap-3">
          <div>
            <span className="font-sans font-700 text-dark">
              KSh {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-xs font-sans text-dark/35 line-through">
                KSh {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-600 transition-all ${
              added
                ? "bg-malachite/20 text-moss"
                : product.inStock
                  ? "bg-forest text-mist hover:bg-moss"
                  : "bg-mist text-dark/30 cursor-not-allowed"
            }`}
          >
            {added ? <Check size={13} /> : <ShoppingBag size={13} />}
            {added ? "Added" : product.inStock ? "Add" : "Sold out"}
          </button>
        </div>
      </div>
    </div>
  );
}
