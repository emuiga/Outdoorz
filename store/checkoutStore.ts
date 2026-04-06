"use client";

import { create } from "zustand";
import type { ContactDetails, DeliveryDetails, PaymentMethod } from "@/types/order";

export type CheckoutStep = 1 | 2 | 3 | 4;

interface CheckoutStore {
  isOpen: boolean;
  step: CheckoutStep;
  orderType: "merch" | "booking" | null;
  contact: Partial<ContactDetails>;
  delivery: Partial<DeliveryDetails>;
  paymentMethod: PaymentMethod;
  orderReference: string | null;

  openCheckout: (type: "merch" | "booking") => void;
  closeCheckout: () => void;
  setStep: (step: CheckoutStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  setContact: (data: Partial<ContactDetails>) => void;
  setDelivery: (data: Partial<DeliveryDetails>) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setOrderReference: (ref: string) => void;
  reset: () => void;
}

const initialState = {
  isOpen: false,
  step: 1 as CheckoutStep,
  orderType: null as null,
  contact: {},
  delivery: {},
  paymentMethod: "mpesa" as PaymentMethod,
  orderReference: null,
};

export const useCheckoutStore = create<CheckoutStore>()((set, get) => ({
  ...initialState,

  openCheckout: (type) => set({ isOpen: true, orderType: type, step: 1 }),
  closeCheckout: () => set({ isOpen: false }),

  setStep: (step) => set({ step }),
  nextStep: () => {
    const current = get().step;
    if (current < 4) set({ step: (current + 1) as CheckoutStep });
  },
  prevStep: () => {
    const current = get().step;
    if (current > 1) set({ step: (current - 1) as CheckoutStep });
  },

  setContact: (data) =>
    set((state) => ({ contact: { ...state.contact, ...data } })),
  setDelivery: (data) =>
    set((state) => ({ delivery: { ...state.delivery, ...data } })),
  setPaymentMethod: (method) => set({ paymentMethod: method }),
  setOrderReference: (ref) => set({ orderReference: ref }),

  reset: () => set(initialState),
}));
