"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Save, Download, Trash2, AlertCircle } from "lucide-react"

export default function SettingsPage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("preferences")


  const handleSaveSettings = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    // In a real app, you would update the user settings here
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500">Manage your application settings and preferences</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="danger">Danger Zone</TabsTrigger>
        </TabsList>

        <TabsContent value="preferences" className="space-y-4">
          <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle>Application Preferences</CardTitle>
              <CardDescription>Customize your application experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label htmlFor="auto-save" className="text-base">
                      Auto-Save Generated Images
                    </Label>
                    <p className="text-sm text-gray-500">Automatically save all generated images to your gallery</p>
                  </div>
                  <Switch id="auto-save" defaultChecked />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label htmlFor="high-quality" className="text-base">
                      High Quality Preview
                    </Label>
                    <p className="text-sm text-gray-500">Show high quality previews (may slow down performance)</p>
                  </div>
                  <Switch id="high-quality" defaultChecked />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label htmlFor="animations" className="text-base">
                      UI Animations
                    </Label>
                    <p className="text-sm text-gray-500">Enable animations in the user interface</p>
                  </div>
                  <Switch id="animations" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language" className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image-format">Default Image Format</Label>
                <Select defaultValue="png">
                  <SelectTrigger id="image-format" className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="jpg">JPG</SelectItem>
                    <SelectItem value="webp">WebP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" /> Save Preferences
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label htmlFor="public-profile" className="text-base">
                      Public Profile
                    </Label>
                    <p className="text-sm text-gray-500">Allow others to view your profile and generated images</p>
                  </div>
                  <Switch id="public-profile" defaultChecked />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label htmlFor="data-collection" className="text-base">
                      Data Collection
                    </Label>
                    <p className="text-sm text-gray-500">
                      Allow us to collect anonymous usage data to improve the service
                    </p>
                  </div>
                  <Switch id="data-collection" defaultChecked />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Label htmlFor="marketing" className="text-base">
                      Marketing Communications
                    </Label>
                    <p className="text-sm text-gray-500">Receive marketing emails and promotions</p>
                  </div>
                  <Switch id="marketing" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" /> Save Privacy Settings
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Export or delete your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Export Your Data</h3>
                <p className="text-sm text-gray-500">
                  Download all your data including generated images, models, and account information
                </p>
                <Button variant="outline" className="mt-2 gap-2 border-gray-700 hover:bg-gray-800">
                  <Download className="h-4 w-4" /> Export Data
                </Button>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Clear Generated Images</h3>
                <p className="text-sm text-gray-500">
                  Delete all your generated images from our servers. This action cannot be undone.
                </p>
                <Button variant="outline" className="mt-2 gap-2 border-gray-700 hover:bg-gray-800">
                  <Trash2 className="h-4 w-4" /> Clear Images
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="danger" className="space-y-4">
          <Card className="bg-gray-900/50 border-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-red-500">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions that affect your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-red-900/50 bg-red-900/10 p-4">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-red-500">Delete Account</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive" className="mt-4">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
