"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import RoomDashboard from "@/components/room-dashboard"
import RoomSensorData from "@/components/room-sensor-data"
import TemperatureGraph from "@/components/temperature-graph"
import SetThreshold from "@/components/set-threshold"
import EditDevice from "@/components/edit-device"

interface DashboardLayoutProps {
  currentView: string
  onViewChange: (view: string) => void
  onLogout: () => void
}

export default function DashboardLayout({ currentView, onViewChange, onLogout }: DashboardLayoutProps) {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <RoomDashboard
            onRoomSelect={(roomId) => {
              setSelectedRoom(roomId)
              onViewChange("room-data")
            }}
          />
        )
      case "room-data":
        return <RoomSensorData roomId={selectedRoom || 2} onViewAnalytics={() => onViewChange("temperature-graph")} />
      case "temperature-graph":
        return <TemperatureGraph onSetThreshold={() => onViewChange("set-threshold")} />
      case "set-threshold":
        return (
          <SetThreshold
            onVerify={() => onViewChange("edit-device")}
            onCancel={() => onViewChange("temperature-graph")}
          />
        )
      case "edit-device":
        return <EditDevice onSave={() => onViewChange("temperature-graph")} />
      default:
        return <RoomDashboard onRoomSelect={() => {}} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation currentView={currentView} onViewChange={onViewChange} onLogout={onLogout} />
      <main className="container mx-auto px-4 py-8">{renderCurrentView()}</main>
    </div>
  )
}
