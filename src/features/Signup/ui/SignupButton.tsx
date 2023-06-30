import Button from "@mui/material/Button"

import { ROUTES, useCustomNavigator } from "~/shared/utils"

type Props = {
  fontSize?: string | number
}

export const SignupButton = ({ fontSize }: Props) => {
  const { navigate } = useCustomNavigator()

  const onSignupClick = () => {
    return navigate(ROUTES.signup.path)
  }

  return (
    <Button
      variant="contained"
      onClick={onSignupClick}
      sx={{
        color: "white",
        fontSize: fontSize,
      }}>
      Зарегистрироваться
    </Button>
  )
}
