"use client"

import { useGoogleAnalytics } from "@/hooks/use-google-analytics"

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useGoogleAnalytics()
  return <>{children}</>
}
