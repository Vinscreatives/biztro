export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#fffbeb] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and get the help you need to succeed with Biztro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#282828] mb-6">Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">How do I create my Biztro page?</h3>
                <p className="text-gray-600">Sign up for free, choose your username, and start customizing your page immediately.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">What makes Biztro different?</h3>
                <p className="text-gray-600">Biztro focuses on simplicity and beautiful design, making it perfect for creators and small businesses.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#282828] mb-6">Customization</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">Can I change my theme?</h3>
                <p className="text-gray-600">Yes! Choose from multiple beautiful themes and customize colors to match your brand.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">How many links can I add?</h3>
                <p className="text-gray-600">Add unlimited links to your Biztro page - there's no limit to what you can include.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#282828] mb-6">Analytics</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">Can I track my page views?</h3>
                <p className="text-gray-600">Yes, view basic analytics including page views, link clicks, and visitor insights.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">Is my data secure?</h3>
                <p className="text-gray-600">We take security seriously. All data is encrypted and we follow industry best practices.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#282828] mb-6">Support</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">Need more help?</h3>
                <p className="text-gray-600">Contact our support team for personalized assistance with your Biztro page.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#282828] mb-2">Report a problem</h3>
                <p className="text-gray-600">Found a bug or issue? Let us know so we can fix it quickly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="text-[#282828] hover:text-[#282828]/80 font-medium">
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  )
}



