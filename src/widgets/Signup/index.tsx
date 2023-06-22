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
          marginBottom={2}
          sx={{
            textAlign: "center",
          }}>
          Регистрация
        </Typography>
        <SignupFeature />
      </Box>
    </Container>
  )
}
