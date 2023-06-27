import Button from "@mui/material/Button"

import { ROUTES } from "~/shared/utils"

type Props = {
  fontSize?: string | number
}

export const SignupButton = ({ fontSize }: Props) => {
  return (
    <Button
      variant="contained"
      href={ROUTES.signup.path}
      sx={{
        color: "white",
        fontSize: fontSize,
      }}>
      Зарегистрироваться
    </Button>
  )
}
