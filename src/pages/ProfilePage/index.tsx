import Container from "@mui/material/Container"

import { AccountDetails } from "~/widgets/AccountDetails"

export const ProfilePage = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", paddingTop: 5 }}>
      <AccountDetails />
    </Container>
  )
}
