import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import { ROUTES, headerHeight } from "~/shared/utils"

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        height: headerHeight,
      }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTES.landing.path}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            Developer Helper
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}>
            <Button
              variant="text"
              href={ROUTES.login.path}
              sx={{
                color: "black",
              }}>
              Login
            </Button>
            <Button
              variant="contained"
              href={ROUTES.signup.path}
              sx={{
                color: "black",
              }}>
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
