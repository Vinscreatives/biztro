"use client"

import { Navigation } from "@/components/ui/navigation"

export default function TestRealNavPage() {
  return (
    <div>
      <h1>Testing Real Navigation Component</h1>
      <Navigation currentPage="test" />
      <div style={{ height: '100vh', padding: '20px' }}>
        <p>Navigation should be at the top</p>
      </div>
    </div>
  )
}
