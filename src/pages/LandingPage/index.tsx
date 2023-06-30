import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"

import { headerHeight } from "~/shared/utils"
import { DemoQuiz } from "~/widgets/DemoQuiz"

export const LandingPage = () => {
  const mobileMatches = useMediaQuery("(max-width:600px)")

  return (
    <Container>
      <Container
        sx={{
          height: `calc(100vh - ${headerHeight}px)`,
          display: "grid",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          gridTemplateRows: "1fr 100px",
        }}>
        <Box>
          <Typography
            variant={mobileMatches ? "h6" : "h3"}
            align="center"
            sx={{
              fontWeight: "bold",
              width: mobileMatches ? "310px" : "100vh",
            }}>
            Тесты для начинающих <br /> frontend разработчиков
          </Typography>
          <Typography
            variant={mobileMatches ? "caption" : "h6"}
            align="center"
            sx={{
              fontWeight: "bold",
              width: mobileMatches ? "310px" : "100vh",
              fontSize: mobileMatches ? "10px" : "inherit",
              color: "text.secondary",
              opacity: 0.5,
            }}>
            Вот так вот 5 раз в день делаешь и работа болеть не будет
          </Typography>
        </Box>

        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <KeyboardArrowDownIcon />
        </Box>
      </Container>

      <Container
        sx={{
          height: "100vh",
          display: "grid",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          gridTemplateRows: "1fr 100px",
        }}>
        <DemoQuiz />
      </Container>
    </Container>
  )
}
