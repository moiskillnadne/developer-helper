import { Box, Container, Typography } from "@mui/material"
import { animated, useSpring } from "@react-spring/web"

import { SignupFeature } from "~/features/Signup"
import { headerHeight } from "~/shared/utils"

export const SignupWidget = () => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 250,
    config: {
      duration: 750,
    },
  })

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
        <animated.span style={{ ...springs }}>
          <SignupFeature />
        </animated.span>
      </Box>
    </Container>
  )
}
