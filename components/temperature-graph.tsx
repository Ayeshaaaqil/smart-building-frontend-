"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TemperatureGraphProps {
  onSetThreshold: () => void
}

export default function TemperatureGraph({ onSetThreshold }: TemperatureGraphProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600">Temperature monitoring and threshold management</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">🌡️ Temperature</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => {}}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 shadow-md"
                size="sm"
              >
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Current Value</CardTitle>
              <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                18°C
              </p>
              <p className="text-sm text-emerald-600 font-medium">● Normal Range</p>
            </CardHeader>
          </Card>
        </div>

        <div className="lg:col-span-6">
          <Card className="bg-white border-0 shadow-lg h-full">
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 border-pink-200 px-4 py-2">
                  📈 Temperature (°C) - Past 7 Days
                </Badge>
              </div>

              <div className="h-40 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 rounded-xl flex items-end justify-center relative overflow-hidden shadow-inner">
                <svg viewBox="0 0 200 60" className="w-full h-full absolute">
                  <defs>
                    <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#eab308" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 50 Q 50 30 100 35 T 190 25"
                    stroke="url(#tempGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="drop-shadow-sm"
                  />
                  <circle cx="100" cy="35" r="4" fill="#ec4899" className="animate-pulse" />
                </svg>
                <div className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white/80 px-2 py-1 rounded">
                  Avg: 19.2°C
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={onSetThreshold}
                  className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg shadow-lg font-medium"
                >
                  ⚙️ Set Threshold Values
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
