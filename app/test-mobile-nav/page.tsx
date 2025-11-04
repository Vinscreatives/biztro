"use client"

import { Navigation } from "@/components/ui/navigation"

export default function TestMobileNavPage() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="test" />
      <div className="pt-32 px-8">
        <h1 className="text-3xl font-bold mb-4">Mobile Navigation Test</h1>
        <p className="text-lg text-gray-600 mb-6">
          On mobile devices, tap the hamburger menu (☰) in the top-right corner of the navigation bar above. You should now see a "Products" section that can be expanded to show all product options.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="font-semibold text-blue-800 mb-2">Mobile Navigation Features:</h2>
          <ul className="text-blue-700 space-y-1">
            <li>✅ Hamburger menu button (☰) in top-right</li>
            <li>✅ Full-screen mobile menu overlay</li>
            <li>✅ Expandable Products section with dropdown</li>
            <li>✅ Individual product links (Link in Bio, Link Shortener, QR Code)</li>
            <li>✅ Proper menu closing when navigating</li>
          </ul>
        </div>
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="font-semibold text-green-800 mb-2">How to Test:</h2>
          <ol className="text-green-700 space-y-1 list-decimal list-inside">
            <li>Resize your browser to mobile width or use mobile device</li>
            <li>Tap the hamburger menu button (☰)</li>
            <li>Tap "Products" to expand the dropdown</li>
            <li>Tap any product option to navigate</li>
            <li>Menu should close automatically after navigation</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
