import { z } from "zod";

const registerCompanySchema = z.object({
  banner: z.optional(z.string().trim().url()),
  logo: z.optional(z.string().trim().url()),
  name: z.optional(z.string().trim()),
  sector: z.string().trim(),
  market_role: z.string().trim().min(6),
  location: z.optional(z.string().trim()),
});

const registerCompanyDetailSchema = z.object({
  headline: z.optional(z.string().trim()),
  description: z.optional(z.string().trim()),
  email: z.optional(z.string().trim().toLowerCase().email()),
  website: z.optional(z.string().trim()),
});

const newCompanySchema = registerCompanySchema.merge(
  registerCompanyDetailSchema
);

export type TRegisterCompany1Schema = z.infer<typeof registerCompanySchema>;
export type TNewCompany = z.infer<typeof newCompanySchema>;
export type TRegisterCompanyDetailSchema = z.infer<
  typeof registerCompanyDetailSchema
>;

export { registerCompanySchema, registerCompanyDetailSchema };
export default newCompanySchema;
