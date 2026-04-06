import { z } from "zod";

const kenyanPhone = z
  .string()
  .regex(
    /^(\+?254|0)(7|1)\d{8}$/,
    "Enter a valid Kenyan phone number (e.g. 0712345678)"
  );

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: kenyanPhone,
  emergencyContactName: z.string().optional(),
  emergencyContactPhone: kenyanPhone.optional().or(z.literal("")),
});

export const deliverySchema = z.object({
  method: z.enum(["pickup", "delivery"]),
  street: z.string().optional(),
  town: z.string().optional(),
  county: z.string().optional(),
}).refine(
  (data) => {
    if (data.method === "delivery") {
      return !!data.street && !!data.town && !!data.county;
    }
    return true;
  },
  {
    message: "Please fill in your delivery address",
    path: ["street"],
  }
);

export type ContactFormData = z.infer<typeof contactSchema>;
export type DeliveryFormData = z.infer<typeof deliverySchema>;
