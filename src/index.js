import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme/theme"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
