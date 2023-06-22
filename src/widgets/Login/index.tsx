import { Box, Container, Typography } from "@mui/material"

import { LoginFeature } from "~/features/Login"
import { headerHeight } from "~/shared/utils"

export const LoginWidget = () => {
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
          Войти
        </Typography>
        <LoginFeature />
      </Box>
    </Container>
  )
}
