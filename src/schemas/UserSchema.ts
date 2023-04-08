import { z } from "zod";

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

const newUserSchema = registerUserSchema.merge(registerInfoUserSchema);
const sigInSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().trim().min(6),
});

export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;
export type TNewUser = z.infer<typeof newUserSchema>;
export type TRegisterInfoUser = z.infer<typeof registerInfoUserSchema>;
export type TSignInSchema = z.infer<typeof sigInSchema>;

export { registerUserSchema, registerInfoUserSchema, sigInSchema };
export default newUserSchema;
