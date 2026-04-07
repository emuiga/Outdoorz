"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product, ProductCategory } from "@/types/product";

type Filter = "All" | ProductCategory;
const FILTERS: Filter[] = ["All", "Apparel", "Gear", "Accessories"];

export default function ShopClient({
  products,
  initialCategory = "All",
}: {
  products: Product[];
  initialCategory?: Filter;
}) {
  const [category, setCategory] = useState<Filter>(initialCategory);

  const filtered =
    category === "All" ? products : products.filter((p) => p.category === category);

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-[64px] z-20 bg-cream/95 border-b border-mist py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 flex-wrap">
          <span className="eyebrow mr-1 hidden sm:block">Category</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setCategory(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-500 transition-colors ${
                category === f
                  ? "bg-forest text-mist"
                  : "bg-mist/60 text-dark/70 hover:bg-mist"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <p className="text-center py-20 font-sans text-dark/40">
            No products in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Ordering note */}
      <div className="bg-forest/5 border-t border-mist py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display font-700 text-dark text-xl mb-2">Order via WhatsApp</p>
          <p className="body-light text-dark/60 max-w-lg mx-auto">
            Add items to your cart, tap the bag icon, fill in your details, and we&apos;ll get
            your order confirmed with M-Pesa payment details on WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
