"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/lib/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on route change
  useEffect(() => { onClose(); }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 z-50 flex h-full w-4/5 max-w-sm flex-col bg-forest"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="eyebrow text-mist/60">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="text-mist/70 hover:text-gold transition-colors p-1"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-lg font-sans font-medium text-base transition-colors ${
                        isActive
                          ? "bg-white/10 text-gold"
                          : "text-mist/80 hover:bg-white/5 hover:text-mist"
                      }`}
                    >
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="px-6 pb-8">
              <Link
                href="/events"
                className="block w-full text-center bg-gold hover:bg-gold/90 text-dark font-sans font-600 text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Book a Hike
              </Link>
              <p className="mt-4 text-center text-xs text-mist/40 font-sans">
                Nakuru, Kenya · Great Rift Valley
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
