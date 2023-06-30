import { Typography } from "@mui/material"
import Box from "@mui/material/Box"

type Props = {
  mainText: string
  secondaryText: string
}

export const BoxText = ({ mainText, secondaryText }: Props) => {
  return (
    <Box
      sx={{
        padding: "4px 12px",
        border: "1px solid #ccc",
        borderRadius: 2,
      }}>
      <Typography variant="caption" sx={{ color: "secondary.main", cursor: "default" }}>
        {secondaryText}
      </Typography>
      <Typography variant="body1">{mainText}</Typography>
    </Box>
  )
}
