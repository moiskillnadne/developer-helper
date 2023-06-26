import { Box } from "@mui/material"

import { LoginDataDTO, LoginSchema } from "../lib/login.schema"
import { useLoginMutation } from "../lib/useLoginMutation"

import { secureTokensStorage, userModel } from "~/entities/user"
import { BaseFormProvider, BasicButton, LoadingRound, PasswordIcon, SuccessRound, TextInputBase } from "~/shared/ui"
import { ROUTES, useCustomForm, useCustomNavigator, usePasswordType } from "~/shared/utils"

export const LoginFeature = () => {
  const form = useCustomForm({ defaultValues: { email: "", password: "" } }, LoginSchema)
  const { handleSubmit } = form

  const { navigate } = useCustomNavigator()

  const { setUser } = userModel.useUserState()

  const [passwordType, onPasswordIconClick] = usePasswordType()

  const {
    mutate: login,
    isLoading,
    isSuccess,
  } = useLoginMutation({
    onSuccess(data) {
      const { user, accessToken, idToken, refreshToken } = data.data.details

      setUser({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName })
      secureTokensStorage.setTokens({ accessToken, idToken, refreshToken })

      return navigate(ROUTES.dashboard.path)
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
