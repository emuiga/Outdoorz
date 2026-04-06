export type OrderType = "merch" | "booking";
export type PaymentMethod = "mpesa" | "card" | "bank";
export type OrderStatus = "pending" | "paid" | "failed" | "confirmed";

export interface ContactDetails {
  fullName: string;
  email: string;
  phone: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
}

export interface DeliveryDetails {
  method: "pickup" | "delivery";
  street?: string;
  town?: string;
  county?: string;
}

export interface Order {
  id: string;
  reference: string;
  type: OrderType;
  status: OrderStatus;
  contact: ContactDetails;
  delivery?: DeliveryDetails;
  items: Array<{
    name: string;
    variant?: string;
    quantity: number;
    priceKsh: number;
  }>;
  totalKsh: number;
  paymentMethod: PaymentMethod;
  createdAt: string;
}
