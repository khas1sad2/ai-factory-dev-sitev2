"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-center text-5xl font-bold tracking-tight lg:text-6xl">
        Automate Your Workflow with <span className="text-primary">TaskFlow AI</span>
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground">
        Streamline collaboration, boost productivity, and empower your remote team.
      </p>

      {/* Placeholder for hero section content */}
      <div className="mt-12 flex flex-col items-center justify-center gap-4">
        <div className="h-64 w-full max-w-2xl rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
          <p>Demo Video Placeholder</p>
        </div>
        <Button size="lg">Start Your Free Trial</Button>
      </div>
    </MainLayout>
  )
}