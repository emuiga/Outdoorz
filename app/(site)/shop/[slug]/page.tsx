import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allProducts } from "@/lib/products-data";
import { siteUrl } from "@/lib/site";
import ProductDetailClient from "@/components/shop/ProductDetailClient";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) return {};

  const url = `${siteUrl}/shop/${product.slug}`;
  const imageUrl = `${siteUrl}/shop/${product.slug}/opengraph-image`;

  return {
    title: `${product.name} | Roam Store`,
    description: `${product.description} KSh ${product.price.toLocaleString()}.`,
    keywords: [product.name, product.category, "Roam", "Nakuru", "hiking gear", "Kenya outdoors"],
    openGraph: {
      title: product.name,
      description: `${product.description} — KSh ${product.price.toLocaleString()}`,
      url,
      siteName: "Roam Store",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: product.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: `${product.description} — KSh ${product.price.toLocaleString()}`,
      images: [imageUrl],
    },
    alternates: { canonical: url },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.id,
    brand: { "@type": "Brand", name: "Roam" },
    offers: {
      "@type": "Offer",
      priceCurrency: "KES",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${siteUrl}/shop/${product.slug}`,
      seller: { "@type": "Organization", name: "Roam Adventures" },
    },
    ...(product.sizes
      ? {
          additionalProperty: product.sizes.map((size) => ({
            "@type": "PropertyValue",
            name: "Size",
            value: size,
          })),
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Shop", item: `${siteUrl}/shop` },
      { "@type": "ListItem", position: 3, name: product.name },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProductDetailClient product={product} />
    </>
  );
}
