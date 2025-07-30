"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

interface EditDeviceProps {
  onSave: () => void
}

export default function EditDevice({ onSave }: EditDeviceProps) {
  const [minTemp, setMinTemp] = useState("10")
  const [maxTemp, setMaxTemp] = useState("30")
  const [description, setDescription] = useState("")

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-white border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
          <CardTitle className="text-xl font-bold flex items-center">⚙️ Set Threshold Values</CardTitle>
          <p className="text-blue-100 text-sm mt-1">Configure device parameters</p>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-3">
            <Label className="text-gray-700 font-medium flex items-center">🌡️ Temperature Range</Label>
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <Label htmlFor="min-temp" className="text-sm text-gray-600 font-medium">
                  Min:
                </Label>
                <Input
                  id="min-temp"
                  value={minTemp}
                  onChange={(e) => setMinTemp(e.target.value)}
                  className="bg-blue-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="max-temp" className="text-sm text-gray-600 font-medium">
                  Max:
                </Label>
                <Input
                  id="max-temp"
                  value={maxTemp}
                  onChange={(e) => setMaxTemp(e.target.value)}
                  className="bg-blue-50 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <span className="text-sm text-gray-600 font-medium bg-gray-100 px-2 py-1 rounded">°C</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 shadow-md">
              🚨 Alarm Set & Active
            </Badge>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700 font-medium flex items-center">
              📝 Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 min-h-[80px]"
              placeholder="Enter threshold description and notes..."
            />
          </div>

          <Button
            onClick={onSave}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white h-12 font-medium shadow-lg"
          >
            💾 Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
