import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Additional utility functions for the IoT dashboard
export function formatTemperature(temp: number, unit: "C" | "F" = "C"): string {
  if (unit === "F") {
    return `${Math.round((temp * 9) / 5 + 32)}°F`
  }
  return `${temp}°C`
}

export function formatTimestamp(timestamp: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(timestamp)
}

export function getStatusColor(value: number, min: number, max: number): string {
  if (value < min || value > max) {
    return "text-red-500"
  }
  if (value < min + (max - min) * 0.2 || value > max - (max - min) * 0.2) {
    return "text-yellow-500"
  }
  return "text-green-500"
}

export function generateSensorData(type: string) {
  const baseValues = {
    temperature: { min: 15, max: 25, unit: "°C" },
    humidity: { min: 40, max: 60, unit: "%" },
    co2: { min: 400, max: 1000, unit: "ppm" },
    noise: { min: 30, max: 70, unit: "dB" },
    ozone: { min: 0, max: 100, unit: "ppb" },
    radon: { min: 0, max: 4, unit: "Bq/m³" },
  }

  const config = baseValues[type as keyof typeof baseValues]
  if (!config) return null

  const value = Math.random() * (config.max - config.min) + config.min
  return {
    value: Math.round(value * 10) / 10,
    unit: config.unit,
    status: getStatusColor(value, config.min, config.max),
  }
}
