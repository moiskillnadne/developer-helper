import { PropsWithChildren } from "react"

import { ThemeProvider, createTheme } from "@mui/material/styles"

type Props = PropsWithChildren<unknown>

const theme = createTheme({
  palette: {
    primary: {
      main: "#cf4dc8",
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
