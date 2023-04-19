import { TypeOf, z } from "zod";

const registerUserSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().trim().min(6),
  confirmPassword: z.string().trim().min(6),
  newsletter: z.boolean(),
});
const registerInfoUserSchema = z.object({
  firstName: z.string().trim(),
  secondName: z.string().trim(),
  role: z.string().trim(),
  notifications: z.boolean(),
});

const editUserSchema = z.object({
  first_name: z.string().trim(),
  last_name: z.string().trim(),
  role: z.string().trim(),
  location: z.string().trim(),
  headline: z.string().trim().optional(),
  profile_picture: z.string().trim().optional(),
  profile_banner: z.string().trim().optional(),
});

const editUserAboutSchema = z.object({
  about: z.string().trim().optional(),
});

const newUserSchema = registerUserSchema.merge(registerInfoUserSchema);
const sigInSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().trim().min(6),
});

export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;
export type TNewUser = z.infer<typeof newUserSchema>;
export type TRegisterInfoUser = z.infer<typeof registerInfoUserSchema>;
export type TSignInSchema = z.infer<typeof sigInSchema>;
export type TEditSchema = z.infer<typeof editUserSchema>;
export type TEditAboutSchema = z.infer<typeof editUserAboutSchema>;

export {
  registerUserSchema,
  registerInfoUserSchema,
  sigInSchema,
  editUserSchema,
  editUserAboutSchema,
};
export default newUserSchema;
