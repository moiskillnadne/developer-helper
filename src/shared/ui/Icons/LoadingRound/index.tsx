import CachedRoundedIcon from "@mui/icons-material/CachedRounded"
import Box from "@mui/material/Box"

import "./style.css"

export const LoadingRound = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CachedRoundedIcon className="loading-round" />
    </Box>
  )
}
