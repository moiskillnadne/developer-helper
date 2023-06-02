import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import { headerHeight } from "~/shared/utils"

export const LandingPage = () => {
  const welcomePhrase = "Улучши свои программерские навыки и получи работу"

  return (
    <Container>
      <Container
        sx={{
          height: `calc(100vh - ${headerHeight}px)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
          }}>
          {welcomePhrase}
        </Typography>
      </Container>
    </Container>
  )
}
