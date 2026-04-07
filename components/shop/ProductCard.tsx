"use client";

import { useState } from "react";
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
      <div className="relative aspect-square overflow-hidden bg-sand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 text-[11px] font-sans font-600 px-2.5 py-1 rounded-full bg-ember text-mist">
            Sale
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <p className="eyebrow mb-1">{product.category}</p>
          <h3 className="font-display font-700 text-dark text-lg leading-snug">{product.name}</h3>
        </div>

        <p className="body-light text-sm text-dark/60 leading-relaxed flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 1 && (
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

        <div className="flex items-center justify-between pt-3 border-t border-mist mt-auto gap-3">
          <div>
            <span className="font-sans font-700 text-dark text-lg">
              KSh {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm font-sans text-dark/35 line-through">
                KSh {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-600 transition-all ${
              added
                ? "bg-malachite/20 text-moss"
                : product.inStock
                  ? "bg-forest text-mist hover:bg-moss"
                  : "bg-mist text-dark/30 cursor-not-allowed"
            }`}
          >
            {added ? <Check size={14} /> : <ShoppingBag size={14} />}
            {added ? "Added" : product.inStock ? "Add" : "Sold out"}
          </button>
        </div>
      </div>
    </div>
  );
}
