import Button from "@mui/material/Button"

import { ROUTES } from "~/shared/utils"

export const LoginButton = () => {
  return (
    <Button
      variant="text"
      href={ROUTES.login.path}
      sx={{
        color: "black",
      }}>
      Войти
    </Button>
  )
}
