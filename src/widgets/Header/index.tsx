import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"

import { userModel } from "~/entities/user"
import { LoginButton } from "~/features/Login"
import { LogoutButton } from "~/features/Logout"
import { SignupButton } from "~/features/Signup"
import { ROUTES, headerHeight } from "~/shared/utils"

import "./style.css"

export const Header = () => {
  const { isUserAuthenticated } = userModel.useAuthGuard()

  const mobileMatches = useMediaQuery("(max-width:600px)")

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        height: headerHeight,
      }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            paddingLeft: 1,
            paddingRight: 1,
          }}>
          <Typography
            variant={mobileMatches ? "h6" : "h5"}
            noWrap
            component="a"
            href={ROUTES.landing.path}
            className="effect-shine"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: mobileMatches ? "12px" : "40px",
            }}>
            Developer Helper
          </Typography>

          {!isUserAuthenticated && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}>
              <LoginButton />
              <SignupButton />
            </Box>
          )}

          {isUserAuthenticated && <LogoutButton />}
        </Toolbar>
      </Box>
    </AppBar>
  )
}
