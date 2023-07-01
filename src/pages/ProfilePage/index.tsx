import Container from "@mui/material/Container"

import { headerHeight } from "~/shared/utils"
import { AccountDetails } from "~/widgets/AccountDetails"

export const ProfilePage = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", paddingTop: 5, height: `calc(100vh - ${headerHeight}px)` }}>
      <AccountDetails />
    </Container>
  )
}
