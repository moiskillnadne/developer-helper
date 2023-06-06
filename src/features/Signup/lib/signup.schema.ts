import { z } from "zod"

export const SignupSchema = z
  .object({
    firstname: z.string().min(2),
    lastname: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(data => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type SignupDataDTO = z.infer<typeof SignupSchema>
