"use client"

import { Navigation } from "@/components/ui/navigation"

export default function TestDropdownPage() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="test" />
      <div className="pt-32 px-8">
        <h1 className="text-3xl font-bold mb-4">Navigation Dropdown Test</h1>
        <p className="text-lg text-gray-600 mb-6">
          Hover over the "Products" menu item in the navigation bar above. The dropdown should stay open when you move your mouse over the menu items, allowing you to click on them.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="font-semibold text-yellow-800 mb-2">Fixed Issues:</h2>
          <ul className="text-yellow-700 space-y-1">
            <li>✅ Dropdown stays open when hovering over menu items</li>
            <li>✅ Users can now click on dropdown links</li>
            <li>✅ Fixed for both desktop and tablet navigation</li>
            <li>✅ Added missing mobileDropdownRef for tablet navigation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
