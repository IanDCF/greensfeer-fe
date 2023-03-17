import { z } from "zod";

const registerUserSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string(),
  confirmPassword: z.string(),
});
const registerInfoUserSchema = z.object({
  firstName: z.string().trim(),
  secondName: z.string().trim(),
  rol: z.string().trim(),
});

const newUserSchema = registerUserSchema.merge(registerInfoUserSchema);

export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;
export type TNewUser = z.infer<typeof newUserSchema>;
export type TRegisterInfoUser = z.infer<typeof registerInfoUserSchema>;

export { registerUserSchema, registerInfoUserSchema };
export default newUserSchema;
