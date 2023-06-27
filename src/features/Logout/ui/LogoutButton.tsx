import Button from "@mui/material/Button"

import { secureTokensStorage, userModel } from "~/entities/user"
import { ROUTES, useCustomNavigator } from "~/shared/utils"

export const LogoutButton = () => {
  const { navigate } = useCustomNavigator()

  const { clearUser } = userModel.useUserState()

  const onLogoutClick = () => {
    secureTokensStorage.clearTokens()
    clearUser()

    return navigate(ROUTES.landing.path)
  }

  return (
    <Button
      variant="text"
      onClick={onLogoutClick}
      sx={{
        color: "black",
      }}>
      Выйти
    </Button>
  )
}
