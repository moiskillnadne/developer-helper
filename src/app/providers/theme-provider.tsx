import { PropsWithChildren } from "react"

import { ThemeProvider, createTheme } from "@mui/material/styles"

type Props = PropsWithChildren<unknown>

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e74c3c",
    },
    secondary: {
      main: "#999",
    },
    error: {
      main: "#ed2939",
    },
    success: {
      main: "#2ade32",
    },
  },
})

export const CustomThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
