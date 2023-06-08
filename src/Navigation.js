import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Chat from "./pages/Chat"
import Meeting from "./pages/Meeting"
import Presentation from "./pages/Presentation"
import Reminder from "./pages/Reminder"
import Webvisit from "./pages/Webvisit"
import Dashboard from './Dashboard'

export default function Navigation() {
  return (
    <>
    <Dashboard />

    </>
  )
}
