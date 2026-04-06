"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { navLinks } from "@/lib/nav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openCart = useCartStore((s) => s.openCart);
  const totalItems = useCartStore((s) => s.totalItems);

  // Avoid hydration mismatch for cart count
  useEffect(() => { setMounted(true); }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isHomepage = pathname === "/";
  // On the homepage, start transparent; everywhere else always opaque
  const opaque = !isHomepage || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          opaque
            ? "bg-forest/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Nakuru Nature Trails & Summits"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
            <span className="hidden sm:block font-display font-700 text-sm text-mist leading-tight">
              NNTS
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-sans font-500 rounded-md transition-colors ${
                    isActive
                      ? "text-gold"
                      : "text-mist/80 hover:text-mist hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-2 text-mist/70 hover:text-mist transition-colors"
            >
              <ShoppingBag size={20} />
              {mounted && totalItems() > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-dark text-[10px] font-sans font-700 leading-none">
                  {totalItems()}
                </span>
              )}
            </button>

            {/* Book a Hike CTA — desktop only */}
            <Link
              href="/events"
              className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-gold hover:bg-gold/90 text-dark text-sm font-sans font-600 transition-all hover:-translate-y-px"
            >
              Book a Hike
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 text-mist/70 hover:text-mist transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
