import { Box, Button } from "@mui/material"

import { LoginDataDTO, LoginSchema } from "./lib/login.schema"

import { BaseFormProvider, TextInputBase } from "~/shared/ui"
import { useCustomForm } from "~/shared/utils"

export const LoginFeature = () => {
  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, LoginSchema)
  const { handleSubmit } = form

  const onSubmit = (data: LoginDataDTO) => {
    console.log(data)
  }

  return (
    <BaseFormProvider {...form} onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TextInputBase type="text" name="email" variant="outlined" />
        <TextInputBase type="text" name="password" variant="outlined" />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </BaseFormProvider>
  )
}
