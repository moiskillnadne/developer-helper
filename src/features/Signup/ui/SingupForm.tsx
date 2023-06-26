import { Box } from "@mui/material"

import { SignupDataDTO, SignupSchema } from "../lib/signup.schema"
import { useSignupMutation } from "../lib/useSignupMutation"

import { BaseFormProvider, BasicButton, LoadingRound, PasswordIcon, SuccessRound, TextInputBase } from "~/shared/ui"
import { ROUTES, useCustomForm, useCustomNavigator, usePasswordType } from "~/shared/utils"

export const SignupFeature = () => {
  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, SignupSchema)
  const { handleSubmit } = form

  const [passwordType, onPasswordIconClick] = usePasswordType()
  const [confirmPasswordType, onConfirmPasswordIconClick] = usePasswordType()

  const { navigate } = useCustomNavigator()

  const {
    mutate: signup,
    isLoading,
    isSuccess,
  } = useSignupMutation({
    onSuccess(data) {
      setTimeout(() => {
        navigate(ROUTES.login.path)
      }, 350)
    },
  })

  const onSubmit = (data: SignupDataDTO) => {
    const { confirmPassword, ...rest } = data

    return signup(rest)
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
        <TextInputBase
          id="firstName-text"
          type="text"
          name="firstName"
          placeholder="Firstname"
          variant="outlined"
          sx={{ width: 300 }}
        />
        <TextInputBase
          id="lastNAme-text"
          type="text"
          name="lastName"
          placeholder="Lastname"
          variant="outlined"
          sx={{ width: 300 }}
        />
        <TextInputBase
          id="email-text"
          type="text"
          name="email"
          placeholder="email"
          variant="outlined"
          sx={{ width: 300 }}
        />
        <TextInputBase
          id="password-text"
          type={passwordType}
          name="password"
          placeholder="password"
          variant="outlined"
          sx={{ width: 300 }}
          rightIconAdornment={<PasswordIcon isSecure={passwordType === "password"} onClick={onPasswordIconClick} />}
        />
        <TextInputBase
          id="password-confirm-text"
          type={confirmPasswordType}
          name="confirmPassword"
          placeholder="confirm password"
          variant="outlined"
          sx={{ width: 300 }}
          rightIconAdornment={
            <PasswordIcon isSecure={confirmPasswordType === "password"} onClick={onConfirmPasswordIconClick} />
          }
        />
        <BasicButton
          variant="contained"
          type="submit"
          isDisabled={isLoading}
          isLoading={{
            status: isLoading,
            icon: <LoadingRound />,
          }}
          isSuccess={{
            status: isSuccess,
            icon: <SuccessRound />,
          }}
          sx={{
            minWidth: 200,
          }}>
          Submit
        </BasicButton>
      </Box>
    </BaseFormProvider>
  )
}
