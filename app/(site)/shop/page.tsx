import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ShopClient from "@/components/shop/ShopClient";
import { allProducts } from "@/lib/products-data";
import type { ProductCategory } from "@/types/product";

export const metadata: Metadata = {
  title: "Shop | Nakuru Nature Trails & Summits",
  description: "NNTS branded gear, apparel and accessories — wear the trail.",
};

const VALID_CATEGORIES: ProductCategory[] = ["Apparel", "Gear", "Accessories"];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = VALID_CATEGORIES.includes(category as ProductCategory)
    ? (category as ProductCategory)
    : "All";

  return (
    <div className="bg-sand min-h-screen">
      <PageHeader
        eyebrow="NNTS Store"
        title="Wear the"
        titleAccent="trail"
        description="Branded apparel, hiking gear and accessories. Every purchase supports the community and keeps the trails maintained."
      />
      <ShopClient products={allProducts} initialCategory={initialCategory} />
    </div>
  );
}
