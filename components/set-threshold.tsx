"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SetThresholdProps {
  onVerify: () => void
  onCancel: () => void
}

export default function SetThreshold({ onVerify, onCancel }: SetThresholdProps) {
  const [password, setPassword] = useState("")

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-white border-0 shadow-2xl">
        <CardHeader className="text-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
          <CardTitle className="text-xl font-bold flex items-center justify-center">
            🔒 Level 2 Access Required
          </CardTitle>
          <p className="text-red-100 mt-2 text-sm">Please enter your level 2 password to modify threshold values</p>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Security Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500 h-12"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-3">
            <Button
              onClick={onVerify}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white h-12 font-medium shadow-lg"
            >
              ✓ Verify and Continue
            </Button>
            <Button
              onClick={onCancel}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 h-12 bg-transparent"
            >
              Cancel and Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
