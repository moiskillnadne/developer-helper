import { BaseSyntheticEvent, PropsWithChildren } from "react"

import { Box } from "@mui/material"
import { FieldValues, FormProvider, FormProviderProps } from "react-hook-form"

type Props = PropsWithChildren<{
  onSubmit: (e: BaseSyntheticEvent<object, any, any>) => void
}>

export const BaseFormProvider = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  ...rest
}: FormProviderProps<TFieldValues> & Props) => {
  return (
    <FormProvider {...rest}>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            padding: 1,
          }}>
          {children}
        </Box>
      </form>
    </FormProvider>
  )
}
