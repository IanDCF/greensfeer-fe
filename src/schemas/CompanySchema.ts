import { z } from "zod";

const registerCompany1Schema = z.object({
  banner: z.optional(z.string().trim().url()),
  logo: z.optional(z.string().trim().url()),
  name: z.optional(z.string().trim()),
  sector: z.string().trim(),
  marketRole: z.string().trim().min(6),
  location: z.optional(z.string().trim()),

});

const registerCompany2Schema = z.object({
  headline: z.optional(z.string().trim()),
  about: z.optional(z.string().trim()),
  email: z.optional(z.string().trim().toLowerCase().email()),
  website: z.optional(z.string().trim().url()),
});