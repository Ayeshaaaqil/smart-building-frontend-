"use client"

import { useState } from "react"
import { ChevronDown, LogOut, User, Settings } from "lucide-react"

interface NavigationProps {
  currentView: string
  onViewChange: (view: string) => void
  onLogout: () => void
}

export default function Navigation({ currentView, onViewChange, onLogout }: NavigationProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const navItems = [
    { id: "home", label: "Home", view: "dashboard" },
    { id: "room-dashboard", label: "Room Dashboard", view: "dashboard" },
    { id: "room-2", label: "Room 2", view: "room-data" },
    { id: "temperature-graph", label: "Temperature Graph", view: "temperature-graph" },
    { id: "set-threshold", label: "Set Threshold", view: "set-threshold" },
    { id: "edit-device", label: "Edit Device", view: "edit-device" },
  ]

  const handleLogout = () => {
    setShowUserMenu(false)
    onLogout()
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IoT</span>
            </div>
            <span className="font-bold text-gray-800">Dashboard</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-1 overflow-x-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.view)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentView === item.view
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${showUserMenu ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-800">Admin User</p>
                    <p className="text-xs text-gray-500">admin@iotdashboard.com</p>
                  </div>

                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2 border-t border-gray-100 mt-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {showUserMenu && <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />}
    </nav>
  )
}
