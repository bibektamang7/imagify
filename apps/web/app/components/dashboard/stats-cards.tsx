"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageIcon, Clock, Download, Star } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Portraits</CardTitle>
          <ImageIcon className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-gray-500">+12 from last month</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Remaining Credits</CardTitle>
          <Clock className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">26</div>
          <p className="text-xs text-gray-500">Resets in 18 days</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Downloads</CardTitle>
          <Download className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">16</div>
          <p className="text-xs text-gray-500">+4 from last month</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Favorite Style</CardTitle>
          <Star className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Professional</div>
          <p className="text-xs text-gray-500">8 portraits generated</p>
        </CardContent>
      </Card>
    </div>
  )
}
