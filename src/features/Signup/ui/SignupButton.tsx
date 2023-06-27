import Button from "@mui/material/Button"
import useMediaQuery from "@mui/material/useMediaQuery"

import { ROUTES } from "~/shared/utils"

export const SignupButton = () => {
  const mobileMatches = useMediaQuery("(max-width:600px)")

  return (
    <Button
      variant="contained"
      href={ROUTES.signup.path}
      sx={{
        color: "white",
        fontSize: mobileMatches ? "10px" : "20px",
      }}>
      Зарегистрироваться
    </Button>
  )
}
