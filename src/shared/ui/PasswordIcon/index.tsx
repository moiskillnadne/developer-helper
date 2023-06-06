import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

type Props = {
  isSecure: boolean
  onClick: () => void
}

export const PasswordIcon = ({ isSecure, onClick }: Props) => {
  return isSecure ? (
    <VisibilityOffIcon onClick={onClick} sx={{ cursor: "pointer" }} />
  ) : (
    <VisibilityIcon onClick={onClick} sx={{ cursor: "pointer" }} />
  )
}
