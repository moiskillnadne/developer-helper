import { Typography } from "@mui/material"
import Box from "@mui/material/Box"

import { userModel } from "~/entities/user"
import { LogoutButton } from "~/features/Logout"
import { BoxText, ProfileImage } from "~/shared/ui"

export const AccountDetails = () => {
  const { user } = userModel.useUserState()

  const fullname = `${user.details?.firstName} ${user.details?.lastName}`

  return (
    <Box
      sx={{
        padding: 1,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}>
      <ProfileImage
        isStringAvatar={true}
        firstName={user.details?.firstName || ""}
        lastName={user.details?.lastName || ""}
        sx={{ width: 150, height: 150, fontSize: 50 }}
      />
      <Typography variant="h6" sx={{ color: "secondary.main", marginTop: 2, marginBottom: 4, textAlign: "center" }}>
        {fullname}
      </Typography>

      <Box sx={{ marginBottom: 2 }}>
        <BoxText mainText={user.details?.email || ""} secondaryText="email" />
      </Box>

      <LogoutButton />
    </Box>
  )
}
