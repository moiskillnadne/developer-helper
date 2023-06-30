import { AlertColor, Slide } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"

import { Alert } from "./Alert"

type Props = {
  isOpen: boolean
  handleClose: () => void
  content: string
  severity: AlertColor
}

export const Toast = ({ isOpen, handleClose, content, severity }: Props) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
      transitionDuration={350}
      TransitionComponent={Slide}>
      <Alert onClose={handleClose} sx={{ width: "100%" }} severity={severity}>
        {content}
      </Alert>
    </Snackbar>
  )
}
