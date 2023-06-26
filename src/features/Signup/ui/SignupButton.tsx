import Button from "@mui/material/Button"

import { ROUTES } from "~/shared/utils"

export const SignupButton = () => {
  return (
    <Button
      variant="contained"
      href={ROUTES.signup.path}
      sx={{
        color: "white",
      }}>
      Зарегистрироваться
    </Button>
  )
}
