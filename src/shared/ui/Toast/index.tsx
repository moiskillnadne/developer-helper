import React, { useEffect, useState } from "react"

import { AlertColor, Slide } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import { Helmet } from "react-helmet"

import { Alert } from "./Alert"

type Props = {
  isOpen: boolean
  handleClose: () => void
  content: string
  severity: AlertColor
}

export const Toast = ({ isOpen, handleClose, content, severity }: Props) => {
  const [theme, setTheme] = useState<string>("inherit")

  const autoHideDuration = 2000

  useEffect(() => {
    if (isOpen) {
      setTheme(severity === "error" ? "#f44336" : "#4caf50")

      setTimeout(() => setTheme("inherit"), autoHideDuration)
    }
  }, [isOpen, severity])

  const intermediateHandleClose = () => {
    setTheme("inherit")

    return handleClose()
  }

  return (
    <React.Fragment>
      <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={intermediateHandleClose}
        transitionDuration={350}
        TransitionComponent={Slide}>
        <Alert onClose={handleClose} sx={{ width: "100%" }} severity={severity}>
          {content}
        </Alert>
      </Snackbar>

      <Helmet>
        <meta name="theme-color" content={theme} />
      </Helmet>
    </React.Fragment>
  )
}
