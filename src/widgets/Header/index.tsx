import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"

import { userModel } from "~/entities/user"
import { LoginButton } from "~/features/Login"
import { LogoutButton } from "~/features/Logout"
import { SignupButton } from "~/features/Signup"
import { ROUTES, headerHeight, useCustomNavigator } from "~/shared/utils"

import "./style.css"

export const Header = () => {
  const { isUserAuthenticated } = userModel.useAuthGuard()
  const { navigate } = useCustomNavigator()

  const mobileMatches = useMediaQuery("(max-width:600px)")

  const onLogoClick = () => {
    if (isUserAuthenticated) {
      navigate(ROUTES.dashboard.path)
    } else {
      navigate(ROUTES.landing.path)
    }
  }

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        height: headerHeight,
        boxShadow: "none",
        backdropFilter: "blur(20px)",
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
            onClick={onLogoClick}
            className="effect-shine"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontWeight: 700,
              letterSpacing: mobileMatches ? "0.1rem" : "0.3rem",
              textDecoration: "none",
              fontSize: mobileMatches ? "10px" : "inherit",
              cursor: "pointer",
            }}>
            Developer Helper
          </Typography>

          {!isUserAuthenticated && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}>
              <LoginButton fontSize={mobileMatches ? "10px" : "14px"} />
              <SignupButton fontSize={mobileMatches ? "10px" : "14px"} />
            </Box>
          )}

          {isUserAuthenticated && <LogoutButton />}
        </Toolbar>
      </Box>
    </AppBar>
  )
}
