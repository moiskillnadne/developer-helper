import { Box, Button } from "@mui/material"

import { SignupDataDTO, SignupSchema } from "../lib/signup.schema"

import { BaseFormProvider, PasswordIcon, TextInputBase } from "~/shared/ui"
import { useCustomForm, usePasswordType } from "~/shared/utils"

export const SignupFeature = () => {
  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, SignupSchema)
  const { handleSubmit } = form

  const [passwordType, onPasswordIconClick] = usePasswordType()
  const [confirmPasswordType, onConfirmPasswordIconClick] = usePasswordType()

  const onSubmit = (data: SignupDataDTO) => {
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
        <TextInputBase type="text" name="firstname" placeholder="Firstname" variant="outlined" sx={{ width: 300 }} />
        <TextInputBase type="text" name="lastname" placeholder="Lastname" variant="outlined" sx={{ width: 300 }} />
        <TextInputBase type="text" name="email" placeholder="email" variant="outlined" sx={{ width: 300 }} />
        <TextInputBase
          type={passwordType}
          name="password"
          placeholder="password"
          variant="outlined"
          sx={{ width: 300 }}
          rightIconAdornment={<PasswordIcon isSecure={passwordType === "password"} onClick={onPasswordIconClick} />}
        />
        <TextInputBase
          type={confirmPasswordType}
          name="confirmPassword"
          placeholder="confirm password"
          variant="outlined"
          sx={{ width: 300 }}
          rightIconAdornment={
            <PasswordIcon isSecure={confirmPasswordType === "password"} onClick={onConfirmPasswordIconClick} />
          }
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </BaseFormProvider>
  )
}
