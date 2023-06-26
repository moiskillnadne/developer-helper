import { Box, Button } from "@mui/material"

import { LoginDataDTO, LoginSchema } from "../lib/login.schema"
import { useLoginMutation } from "../lib/useLoginMutation"

import { BaseFormProvider, PasswordIcon, TextInputBase } from "~/shared/ui"
import { useCustomForm, usePasswordType } from "~/shared/utils"

export const LoginFeature = () => {
  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, LoginSchema)
  const { handleSubmit } = form

  const [passwordType, onPasswordIconClick] = usePasswordType()

  const { mutate: login, isLoading } = useLoginMutation({
    onSuccess: () => {
      console.log("success")
    },
  })

  const onSubmit = (data: LoginDataDTO) => {
    return login(data)
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
        <Button variant="contained" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Box>
    </BaseFormProvider>
  )
}
