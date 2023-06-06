import { Box, Button } from "@mui/material"

import { LoginDataDTO, LoginSchema } from "./lib/login.schema"

import { BaseFormProvider, PasswordIcon, TextInputBase } from "~/shared/ui"
import { useCustomForm, usePasswordType } from "~/shared/utils"

export const LoginFeature = () => {
  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, LoginSchema)
  const { handleSubmit } = form

  const [passwordType, onPasswordIconClick] = usePasswordType()

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
        <TextInputBase type="text" name="email" placeholder="email" variant="outlined" sx={{ width: 300 }} />
        <TextInputBase
          type={passwordType}
          name="password"
          placeholder="password"
          variant="outlined"
          sx={{ width: 300 }}
          rightIconAdornment={<PasswordIcon isSecure={passwordType === "password"} onClick={onPasswordIconClick} />}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </BaseFormProvider>
  )
}
