import { PropsWithChildren } from "react"

import { ThemeProvider, createTheme } from "@mui/material/styles"

type Props = PropsWithChildren<unknown>

const theme = createTheme({
  palette: {
    primary: {
      main: "#8EEA6E",
    },
    secondary: {
      main: "#faedfa",
    },
    info: {
      main: "#30b237",
    },
  },
})

export const CustomThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
