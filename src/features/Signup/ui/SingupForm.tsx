import { useState } from "react"

import { Box } from "@mui/material"

import { SignupDataDTO, SignupSchema } from "../lib/signup.schema"
import { useSignupMutation } from "../lib/useSignupMutation"

import {
  BaseFormProvider,
  BasicButton,
  LoadingRound,
  PasswordIcon,
  SuccessRound,
  TextInputBase,
  Toast,
} from "~/shared/ui"
import { ROUTES, useCustomForm, useCustomNavigator, usePasswordType } from "~/shared/utils"

export const SignupFeature = () => {
  const [open, setOpen] = useState(false)

  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, SignupSchema)
  const { handleSubmit } = form

  const [passwordType, onPasswordIconClick] = usePasswordType()
  const [confirmPasswordType, onConfirmPasswordIconClick] = usePasswordType()

  const { navigate } = useCustomNavigator()

  const handleOpenToast = () => {
    setOpen(true)
  }

  const handleCloseToast = () => {
    setOpen(false)
  }

  const {
    mutate: signup,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useSignupMutation({
    onSuccess() {
      setTimeout(() => {
        navigate(ROUTES.login.path)
      }, 350)
    },
    onError() {
      handleOpenToast()
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
          backdropFilter: "blur(8px)",
        }}>
        <TextInputBase
          id="firstName-text"
          type="text"
          name="firstName"
          placeholder="Имя"
          variant="outlined"
          sx={{ width: 300 }}
        />
        <TextInputBase
          id="lastNAme-text"
          type="text"
          name="lastName"
          placeholder="Фамилия"
          variant="outlined"
          sx={{ width: 300 }}
        />
        <TextInputBase
          id="email-text"
          type="text"
          name="email"
          placeholder="Email"
          variant="outlined"
          sx={{ width: 300 }}
        />
        <TextInputBase
          id="password-text"
          type={passwordType}
          name="password"
          placeholder="Пароль"
          variant="outlined"
          sx={{ width: 300 }}
          rightIconAdornment={<PasswordIcon isSecure={passwordType === "password"} onClick={onPasswordIconClick} />}
        />
        <TextInputBase
          id="password-confirm-text"
          type={confirmPasswordType}
          name="confirmPassword"
          placeholder="Повторите пароль"
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
          Зарегистрироваться
        </BasicButton>
      </Box>

      {isError && (
        <Toast
          isOpen={open}
          handleClose={handleCloseToast}
          severity="error"
          content={error.evaluatedMessage ?? error.fallbackMessage}
        />
      )}
    </BaseFormProvider>
  )
}
