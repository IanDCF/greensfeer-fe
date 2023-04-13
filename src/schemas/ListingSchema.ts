import { z } from "zod";

const registerListingSchema = z.object({
  post_type: z.optional(z.string()),
  post_name: z.optional(z.string().trim()),
  // FIXME: could tighten up sector with z.literal, populate options
  sector: z.optional(z.string().trim()),
  description: z.optional(z.string().trim()),
});

const registerListingDetailSchema = z.object({
  project_type: z.optional(z.string().trim().nullable()),
  service_type: z.optional(z.string().trim().nullable()),
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

const newListingSchema = registerListingSchema
  .merge(registerListingDetailSchema)
  .merge(registerListingOptionalSchema);

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
