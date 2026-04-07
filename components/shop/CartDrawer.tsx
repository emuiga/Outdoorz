"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const WHATSAPP_NUMBER = "254768519115";

type DrawerStep = "cart" | "checkout";

interface CheckoutForm {
  name: string;
  phone: string;
  delivery: "pickup" | "delivery";
  town: string;
}

const emptyForm: CheckoutForm = { name: "", phone: "", delivery: "pickup", town: "" };

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice, clearCart } =
    useCartStore();
  const [step, setStep] = useState<DrawerStep>("cart");
  const [form, setForm] = useState<CheckoutForm>(emptyForm);
  const [errors, setErrors] = useState<Partial<CheckoutForm>>({});

  // Reset to cart step when drawer closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep("cart");
        setErrors({});
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  function validate(): boolean {
    const errs: Partial<CheckoutForm> = {};
    if (!form.name.trim()) errs.name = "Name required";
    if (!form.phone.match(/^(\+?254|0)(7|1)\d{8}$/))
      errs.phone = "Enter a valid Kenyan phone number";
    if (form.delivery === "delivery" && !form.town.trim())
      errs.town = "Town required for delivery";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function buildMessage(): string {
    const lines: string[] = ["Hello NNTS! 👋 I'd like to place a merch order.\n"];
    lines.push("*Order Details:*");
    items.forEach((item) => {
      const size = item.size ? ` (Size: ${item.size})` : "";
      lines.push(
        `• ${item.product.name}${size} × ${item.quantity} — KSh ${(item.product.price * item.quantity).toLocaleString()}`
      );
    });
    lines.push(`\n*Total: KSh ${totalPrice().toLocaleString()}*`);
    lines.push("\n*My Details:*");
    lines.push(`Name: ${form.name}`);
    lines.push(`Phone: ${form.phone}`);
    lines.push(
      form.delivery === "pickup" ? "Delivery: Pickup in Nakuru" : `Delivery: Deliver to ${form.town}`
    );
    lines.push("\nPlease confirm availability and payment details. Thank you!");
    return lines.join("\n");
  }

  function handleSendOrder() {
    if (!validate()) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank");
    clearCart();
    closeCart();
    setForm(emptyForm);
  }

  const isEmpty = items.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-mist flex-shrink-0">
              {step === "checkout" ? (
                <button
                  onClick={() => setStep("cart")}
                  className="flex items-center gap-1.5 text-sm font-sans text-dark/60 hover:text-dark transition-colors"
                >
                  <ArrowLeft size={15} /> Back to cart
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-dark/60" />
                  <span className="font-display font-700 text-dark text-lg">
                    Your Cart{items.length > 0 && ` (${items.length})`}
                  </span>
                </div>
              )}
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="text-dark/40 hover:text-dark transition-colors p-1 -mr-1"
              >
                <X size={22} />
              </button>
            </div>

            {/* ── CART STEP ── */}
            {step === "cart" && (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  {isEmpty ? (
                    <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                      <ShoppingBag size={48} className="text-dark/10" />
                      <div>
                        <p className="font-sans font-500 text-dark/50">Your cart is empty</p>
                        <p className="text-sm body-light text-dark/30 mt-1">
                          Head to the shop and add some gear
                        </p>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-5">
                      {items.map((item) => (
                        <li
                          key={`${item.product.id}-${item.size ?? "ns"}`}
                          className="flex gap-4 items-start"
                        >
                          {/* Thumbnail */}
                          <div className="relative h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden bg-sand">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="eyebrow text-[10px] mb-0.5">{item.product.category}</p>
                            <p className="font-sans font-600 text-dark text-sm leading-snug">
                              {item.product.name}
                            </p>
                            {item.size && (
                              <p className="text-xs font-sans text-dark/45 mt-0.5">
                                Size: {item.size}
                              </p>
                            )}
                            <p className="font-sans font-700 text-dark text-sm mt-1.5">
                              KSh {(item.product.price * item.quantity).toLocaleString()}
                            </p>
                          </div>

                          {/* Controls */}
                          <div className="flex flex-col items-end gap-2 flex-shrink-0">
                            <button
                              onClick={() => removeItem(item.product.id, item.size)}
                              aria-label="Remove item"
                              className="text-dark/25 hover:text-ember transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                            <div className="flex items-center gap-2 border border-mist rounded-lg px-2 py-1">
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1, item.size)
                                }
                                aria-label="Decrease"
                                className="text-dark/50 hover:text-dark transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="font-sans font-600 text-dark text-sm w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1, item.size)
                                }
                                aria-label="Increase"
                                className="text-dark/50 hover:text-dark transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {!isEmpty && (
                  <div className="border-t border-mist px-6 py-5 space-y-3 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-dark/55 text-sm">Subtotal</span>
                      <span className="font-sans font-700 text-dark text-xl">
                        KSh {totalPrice().toLocaleString()}
                      </span>
                    </div>
                    <button
                      onClick={() => setStep("checkout")}
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white font-sans font-600 py-3.5 rounded-full transition-all hover:-translate-y-px"
                    >
                      <MessageCircle size={18} />
                      Checkout via WhatsApp
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full text-center text-xs font-sans text-dark/30 hover:text-ember transition-colors py-1"
                    >
                      Clear cart
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ── CHECKOUT STEP ── */}
            {step === "checkout" && (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <p className="font-display font-700 text-dark text-xl mb-1">Complete your order</p>
                  <p className="body-light text-dark/45 text-sm mb-7">
                    We&apos;ll confirm availability and send M-Pesa details on WhatsApp.
                  </p>

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                        Full name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Wanjiku"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 transition ${
                          errors.name ? "border-ember" : "border-mist focus:border-moss"
                        }`}
                      />
                      {errors.name && <p className="text-xs text-ember mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0712 345 678"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 transition ${
                          errors.phone ? "border-ember" : "border-mist focus:border-moss"
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-ember mt-1">{errors.phone}</p>}
                    </div>

                    {/* Delivery */}
                    <div>
                      <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                        How do you want to receive it?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(["pickup", "delivery"] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setForm({ ...form, delivery: opt, town: "" })}
                            className={`py-2.5 rounded-xl border text-sm font-sans font-500 transition-colors ${
                              form.delivery === opt
                                ? "border-moss bg-moss/10 text-moss"
                                : "border-mist text-dark/55 hover:border-fern"
                            }`}
                          >
                            {opt === "pickup" ? "Pickup — Nakuru" : "Deliver to me"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Town (delivery only) */}
                    {form.delivery === "delivery" && (
                      <div>
                        <label className="block text-xs font-sans font-500 text-dark/55 mb-1.5">
                          Town / area
                        </label>
                        <input
                          type="text"
                          value={form.town}
                          onChange={(e) => setForm({ ...form, town: e.target.value })}
                          placeholder="e.g. Nairobi, Eldoret…"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-sans bg-white outline-none focus:ring-2 focus:ring-moss/25 transition ${
                            errors.town ? "border-ember" : "border-mist focus:border-moss"
                          }`}
                        />
                        {errors.town && <p className="text-xs text-ember mt-1">{errors.town}</p>}
                      </div>
                    )}
                  </div>

                  {/* Order mini-summary */}
                  <div className="mt-7 p-4 rounded-2xl bg-sand border border-mist">
                    <p className="eyebrow text-[10px] mb-3">Order summary</p>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div
                          key={`${item.product.id}-${item.size ?? "ns"}`}
                          className="flex justify-between text-sm font-sans"
                        >
                          <span className="text-dark/65 truncate mr-2">
                            {item.product.name}
                            {item.size ? ` (${item.size})` : ""} × {item.quantity}
                          </span>
                          <span className="font-600 text-dark flex-shrink-0">
                            KSh {(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm font-sans pt-2.5 border-t border-mist">
                        <span className="font-500 text-dark/55">Total</span>
                        <span className="font-700 text-dark">
                          KSh {totalPrice().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-mist px-6 py-5 flex-shrink-0">
                  <button
                    onClick={handleSendOrder}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white font-sans font-600 py-3.5 rounded-full transition-all hover:-translate-y-px"
                  >
                    <MessageCircle size={18} />
                    Send Order on WhatsApp
                  </button>
                  <p className="mt-3 text-center text-xs font-sans text-dark/30">
                    Opens WhatsApp with your order pre-filled
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
