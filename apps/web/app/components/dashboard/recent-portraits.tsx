"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Share, Eye } from "lucide-react"

// Mock data for recent portraits
const recentPortraits = [
  {
    id: "portrait-1",
    style: "Professional",
    date: "2 days ago",
    image: "/placeholder.svg?height=400&width=300&text=Professional+1",
  },
  {
    id: "portrait-2",
    style: "Artistic",
    date: "3 days ago",
    image: "/placeholder.svg?height=400&width=300&text=Artistic+1",
  },
  {
    id: "portrait-3",
    style: "Vintage",
    date: "5 days ago",
    image: "/placeholder.svg?height=400&width=300&text=Vintage+1",
  },
  {
    id: "portrait-4",
    style: "Anime",
    date: "1 week ago",
    image: "/placeholder.svg?height=400&width=300&text=Anime+1",
  },
  {
    id: "portrait-5",
    style: "Cyberpunk",
    date: "1 week ago",
    image: "/placeholder.svg?height=400&width=300&text=Cyberpunk+1",
  },
  {
    id: "portrait-6",
    style: "Fantasy",
    date: "2 weeks ago",
    image: "/placeholder.svg?height=400&width=300&text=Fantasy+1",
  },
]

export function RecentPortraits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recentPortraits.map((portrait) => (
        <Card
          key={portrait.id}
          className="overflow-hidden bg-gray-900/50 border-gray-800 shadow-xl transition-all duration-300 hover:shadow-purple-900/10 hover:translate-y-[-5px]"
        >
          <CardContent className="p-0">
            <div className="relative group">
              <Image
                src={portrait.image || "/placeholder.svg"}
                alt={`${portrait.style} portrait`}
                width={300}
                height={400}
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-600/80">{portrait.style}</Badge>
                  <span className="text-xs text-gray-400">{portrait.date}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="w-full border-gray-700 bg-gray-800/50">
                    <Download className="h-4 w-4 mr-1" /> Download
                  </Button>
                  <Button size="sm" variant="outline" className="w-full border-gray-700 bg-gray-800/50">
                    <Share className="h-4 w-4 mr-1" /> Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Link href="/dashboard/portraits">
        <Card className="flex items-center justify-center h-full min-h-[300px] bg-gray-900/30 border-gray-800 border-dashed shadow-xl hover:bg-gray-900/50 transition-all duration-300 cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <Eye className="h-8 w-8 text-gray-500 mb-2" />
            <p className="text-gray-500">View all portraits</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
