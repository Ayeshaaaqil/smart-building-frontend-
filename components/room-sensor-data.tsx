"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RoomSensorDataProps {
  roomId: number
  onViewAnalytics: () => void
}

export default function RoomSensorData({ roomId, onViewAnalytics }: RoomSensorDataProps) {
  const sensorData = [
    { label: "Temperature", value: "18°C", unit: "" },
    { label: "Humidity", value: "48%", unit: "" },
    { label: "CO2", value: "520", unit: "ppm" },
    { label: "Noise", value: "", unit: "unit (dB)" },
    { label: "Ozone (O₃)", value: "", unit: "unit (ppb)" },
    { label: "Radon (Rn)", value: "", unit: "unit (Bq/m³)" },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Room {roomId}
          </h1>
          <p className="text-gray-600 mt-1">Live Sensor Data & Monitoring</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">Live Data</span>
        </div>
      </div>

      <div className="mb-6">
        <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-4 py-2">
          📊 Hourly/Daily/Monthly Analytics
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensorData.map((sensor, index) => {
          const colors = [
            "from-red-500 to-orange-500",
            "from-blue-500 to-cyan-500",
            "from-green-500 to-emerald-500",
            "from-purple-500 to-pink-500",
            "from-yellow-500 to-orange-500",
            "from-indigo-500 to-purple-500",
          ]
          const bgColors = [
            "from-red-50 to-orange-50",
            "from-blue-50 to-cyan-50",
            "from-green-50 to-emerald-50",
            "from-purple-50 to-pink-50",
            "from-yellow-50 to-orange-50",
            "from-indigo-50 to-purple-50",
          ]

          return (
            <Card
              key={index}
              className={`bg-gradient-to-br ${bgColors[index]} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-800">{sensor.label}</CardTitle>
                  <div className={`w-3 h-3 bg-gradient-to-r ${colors[index]} rounded-full`}></div>
                </div>
                {sensor.value && (
                  <p className={`text-3xl font-bold bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent`}>
                    {sensor.value}
                  </p>
                )}
                {sensor.unit && <p className="text-sm text-gray-500 font-medium">{sensor.unit}</p>}
              </CardHeader>
              <CardContent>
                <Button
                  onClick={onViewAnalytics}
                  className={`w-full bg-gradient-to-r ${colors[index]} hover:opacity-90 text-white border-0 shadow-md`}
                  size="sm"
                >
                  📈 View Analytics
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl shadow-lg font-medium">
          🌬️ Air Quality Indicators
        </Button>
      </div>
    </div>
  )
}
