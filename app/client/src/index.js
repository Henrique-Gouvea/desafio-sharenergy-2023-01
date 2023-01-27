import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import AppProvider from "./context/AppProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AppProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AppProvider>
)

reportWebVitals()
