import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Page Not Found | PhotoAI",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md py-16 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            404 - Page Not Found
          </h1>
          <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
          <Link href="/">
            <Button className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/20">
              <ArrowLeft className="h-4 w-4" /> Go Back Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

