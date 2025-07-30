"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"

interface RoomDashboardProps {
  onRoomSelect: (roomId: number) => void
}

export default function RoomDashboard({ onRoomSelect }: RoomDashboardProps) {
  const rooms = [
    { id: 1, name: "Room 1" },
    { id: 2, name: "Room 2" },
    { id: 3, name: "Room 3" },
    { id: 4, name: "Room 4" },
    { id: 5, name: "Room 5" },
    { id: 6, name: "Room 6" },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Room Dashboard
          </h1>
          <p className="text-gray-600 mt-1">Monitor all your connected devices</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">All Systems Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {rooms.map((room, index) => (
          <Card
            key={room.id}
            className={`cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 ${
              index % 3 === 0
                ? "bg-gradient-to-br from-blue-500 to-blue-600"
                : index % 3 === 1
                  ? "bg-gradient-to-br from-purple-500 to-purple-600"
                  : "bg-gradient-to-br from-teal-500 to-teal-600"
            }`}
            onClick={() => onRoomSelect(room.id)}
          >
            <CardContent className="flex flex-col items-center justify-center h-32 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🏠</span>
              </div>
              <span className="text-lg font-semibold">{room.name}</span>
              <span className="text-sm opacity-90">Active</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl shadow-lg font-medium">
          <Plus className="w-5 h-5 mr-2" />
          Add New Device
        </Button>
      </div>
    </div>
  )
}
