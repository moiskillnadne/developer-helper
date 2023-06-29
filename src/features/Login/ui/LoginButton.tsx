import Button from "@mui/material/Button"

import { ROUTES, useCustomNavigator } from "~/shared/utils"

type Props = {
  fontSize?: string | number
}

export const LoginButton = ({ fontSize }: Props) => {
  const { navigate } = useCustomNavigator()

  const onLoginClick = () => {
    return navigate(ROUTES.login.path)
  }

  return (
    <Button
      variant="text"
      onClick={onLoginClick}
      sx={{
        color: "black",
        fontSize: fontSize,
      }}>
      Войти
    </Button>
  )
}
