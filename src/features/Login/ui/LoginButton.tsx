import Button from "@mui/material/Button"
import useMediaQuery from "@mui/material/useMediaQuery"

import { ROUTES } from "~/shared/utils"

export const LoginButton = () => {
  const mobileMatches = useMediaQuery("(max-width:600px)")

  return (
    <Button
      variant="text"
      href={ROUTES.login.path}
      sx={{
        color: "black",
        fontSize: mobileMatches ? "10px" : "20px",
      }}>
      Войти
    </Button>
  )
}
