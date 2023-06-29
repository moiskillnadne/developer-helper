import React from "react"

import CssBaseline from "@mui/material/CssBaseline"
import ReactDOM from "react-dom/client"

import App from "./App.tsx"
import "../assets/fonts/Comfortaa/comfortaa.styles.css"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
)
