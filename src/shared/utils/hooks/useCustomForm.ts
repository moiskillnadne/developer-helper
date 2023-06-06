import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormProps, useForm } from "react-hook-form"
import { z } from "zod"

type CustomZodSchema = z.ZodTypeAny

export const useCustomForm = <TSchema extends CustomZodSchema>(
  props: UseFormProps<z.infer<TSchema>>,
  schema: TSchema,
) => {
  return useForm({ ...props, resolver: zodResolver(schema) })
}
