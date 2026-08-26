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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openCart = useCartStore((s) => s.openCart);
  const totalItems = useCartStore((s) => s.totalItems);

  useEffect(() => { setMounted(true); }, []);

  // Stable reference — prevents MobileMenu's pathname-change effect from misfiring
  const handleClose = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 h-[64px] bg-forest/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/roamlogo-circle.png"
              alt="Roam Adventures"
              width={52}
              height={52}
              className="rounded-full object-cover ring-2 ring-white/10"
            />
            <div className="hidden sm:block leading-tight">
              <p className="font-display font-700 text-sm text-mist">Roam Adventures</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-sans font-500 rounded-md transition-colors ${
                    isActive
                      ? "text-gold"
                      : "text-mist/80 hover:text-mist hover:bg-white/8"
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
          <div className="flex items-center gap-1">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative p-2.5 text-mist/75 hover:text-mist transition-colors"
            >
              <ShoppingBag size={20} />
              {mounted && totalItems() > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-dark text-[10px] font-sans font-700 leading-none">
                  {totalItems()}
                </span>
              )}
            </button>

            <Link
              href="/events"
              className="hidden lg:inline-flex items-center ml-1 px-5 py-2 rounded-full bg-gold hover:bg-gold/90 text-dark text-sm font-sans font-600 transition-all hover:-translate-y-px"
            >
              Book a Hike
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2.5 text-mist hover:text-malachite transition-colors"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={handleClose} />
    </>
  );
}
