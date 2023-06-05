import { PropsWithChildren } from "react"

import { ThemeProvider, createTheme } from "@mui/material/styles"

type Props = PropsWithChildren<unknown>

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#DE07A2",
    },
    secondary: {
      main: "#00c73b",
    },
    error: {
      main: "#ed2939",
    },
    success: {
      main: "#2ade32",
    },
    info: {
      main: "#3da8ff",
    },
  },
})

export const CustomThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
