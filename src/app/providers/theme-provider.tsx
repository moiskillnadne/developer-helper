import { PropsWithChildren } from "react"

import { ThemeProvider, createTheme } from "@mui/material/styles"

type Props = PropsWithChildren<unknown>

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#75d054",
    },
    secondary: {
      main: "#9400f5",
    },
    error: {
      main: "#cb180a",
    },
    success: {
      main: "#1e8123",
    },
    warning: {
      main: "#f5a623",
    },
    info: {
      main: "#2196f3",
    },
  },
})

export const CustomThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
