"use client"

import { useState } from "react"
import LoginScreen from "@/components/login-screen"
import DashboardLayout from "@/components/dashboard-layout"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState("dashboard")

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentView("dashboard") // Reset to dashboard view on logout
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />
  }

  return <DashboardLayout currentView={currentView} onViewChange={setCurrentView} onLogout={handleLogout} />
}
