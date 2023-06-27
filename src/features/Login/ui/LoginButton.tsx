import Button from "@mui/material/Button"

import { ROUTES } from "~/shared/utils"

type Props = {
  fontSize?: string | number
}

export const LoginButton = ({ fontSize }: Props) => {
  return (
    <Button
      variant="text"
      href={ROUTES.login.path}
      sx={{
        color: "black",
        fontSize: fontSize,
      }}>
      Войти
    </Button>
  )
}
