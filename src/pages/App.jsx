import React from "react"
import { Router } from "@reach/router"
import Dashboard from "../components/pageSections/Dashboard/Dashboard"

export default function App() {
  return (
    <Router>
      <Dashboard path="/" />
    </Router>
  )
}
