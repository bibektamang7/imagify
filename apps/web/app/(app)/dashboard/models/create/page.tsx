import type { Metadata } from "next"
import  CreateModelForm  from "@/components/models/create-model-form"

export const metadata: Metadata = {
  title: "Create Model | PhotoAI",
  description: "Create a new AI model for portrait generation",
}

export default function CreateModelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Model</h1>
        <p className="text-gray-500">Fill in the details to create a new AI model</p>
      </div>

      <CreateModelForm />
    </div>
  )
}
