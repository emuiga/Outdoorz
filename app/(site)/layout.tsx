import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CartDrawer from "@/components/shop/CartDrawer";
import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Roam Adventures",
  alternateName: "Roam",
  url: siteUrl,
  logo: `${siteUrl}/roamlogo-circle.png`,
  description:
    "Kenya's premier hiking and outdoor adventure community based in Nakuru. Group hikes, cycling, camping and bird walks in the Great Rift Valley.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nakuru",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254768519115",
    contactType: "customer service",
    availableLanguage: ["English", "Swahili"],
  },
  sameAs: ["https://www.instagram.com/roamadventures"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Roam Adventures",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/trails?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  );
}
