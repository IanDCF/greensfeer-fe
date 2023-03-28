import { z } from "zod";

const registerListingSchema = z.object({
  post_type: z.optional(z.literal("Product" || "Service")),
  post_name: z.optional(z.string().trim()),
  // FIXME: could tighten up sector with z.literal, populate options
  sector: z.optional(z.string().trim()),
  description: z.string().trim(),
});

const registerListingDetailSchema = z.object({
  methodology: z.optional(z.string().trim()),
  service_type: z.optional(z.string().trim()),
  location: z.optional(z.string().trim()),
  link: z.optional(z.string().trim()),
});

const registerListingOptionalSchema = z.object({
  verification_standard: z.optional(z.string().trim()),
  methodology_id: z.optional(z.string().trim()),
  vintage_year: z.optional(z.string().trim()),
  currency: z.optional(z.string().trim()),
  price_per_credit: z.optional(z.string().trim()),
});

const newListingSchema = registerListingSchema.merge(
  registerListingDetailSchema
);

export type TRegisterListing1Schema = z.infer<typeof registerListingSchema>;
export type TNewListing = z.infer<typeof newListingSchema>;
export type TRegisterListingDetailSchema = z.infer<
  typeof registerListingDetailSchema
>;
export type TRegisterListingOptionalSchema = z.infer<
  typeof registerListingOptionalSchema
>;

export {
  registerListingSchema,
  registerListingDetailSchema,
  registerListingOptionalSchema,
};
export default newListingSchema;
