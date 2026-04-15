"use client"

import { Building2, FileText, Calendar } from "lucide-react"

export function Header() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="bg-primary text-primary-foreground py-6 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold tracking-tight">
              Gray Stone Transport
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Strategic Business Plan & Overview
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <Calendar className="w-4 h-4" />
            <span>{currentDate}</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Executive Review Document</span>
          </div>
        </div>
      </div>
    </header>
  )
}
