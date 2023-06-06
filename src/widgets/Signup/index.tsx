import { Box, Container, Typography } from "@mui/material"

import { SignupFeature } from "~/features/Signup"
import { headerHeight } from "~/shared/utils"

export const SignupWidget = () => {
  return (
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}>
          Sign up
        </Typography>
        <SignupFeature />
      </Box>
    </Container>
  )
}
