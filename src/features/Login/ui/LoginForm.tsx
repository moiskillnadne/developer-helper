import { useState } from "react"

import { Box } from "@mui/material"

import { LoginDataDTO, LoginSchema } from "../lib/login.schema"
import { useLoginMutation } from "../lib/useLoginMutation"

import { secureTokensStorage, userModel } from "~/entities/user"
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

export const LoginFeature = () => {
  const [open, setOpen] = useState(false)

  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, LoginSchema)
  const { handleSubmit } = form

  const { navigate } = useCustomNavigator()

  const { setUser } = userModel.useUserState()

  const [passwordType, onPasswordIconClick] = usePasswordType()

  const handleOpenToast = () => {
    setOpen(true)
  }

  const handleCloseToast = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const {
    mutate: login,
    isLoading,
    isSuccess,
    error,
    isError,
  } = useLoginMutation({
    onSuccess(data) {
      const { user, accessToken, idToken, refreshToken } = data.data.details

      setUser({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName })
      secureTokensStorage.setTokens({ accessToken, idToken, refreshToken })

      return navigate(ROUTES.dashboard.path)
    },
    onError() {
      handleOpenToast()
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
        <TextInputBase type="text" name="email" placeholder="Email" variant="outlined" sx={{ width: 300 }} />
        <TextInputBase
          type={passwordType}
          name="password"
          placeholder="Пароль"
          variant="outlined"
          sx={{ width: 300 }}
          rightIconAdornment={<PasswordIcon isSecure={passwordType === "password"} onClick={onPasswordIconClick} />}
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
          Войти
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
