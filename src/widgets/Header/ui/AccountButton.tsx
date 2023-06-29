import Button from "@mui/material/Button"

import { ROUTES, useCustomNavigator } from "~/shared/utils"

type Props = {
  firstName: string | undefined
  lastName: string | undefined
}

export const AccountButton = ({ firstName, lastName }: Props) => {
  const profileLabel = firstName && lastName ? `${firstName} ${lastName}` : "Profile"

  const { navigate } = useCustomNavigator()

  const onAccountClick = () => {
    return navigate(ROUTES.account.path)
  }

  return (
    <Button
      onClick={onAccountClick}
      variant="outlined"
      sx={{
        color: "black",
      }}>
      {profileLabel}
    </Button>
  )
}
