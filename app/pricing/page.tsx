export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fffbeb] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start building your professional online presence completely free. Upgrade when you need more.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100/20">
            <div className="bg-gradient-to-r from-[#282828] to-[#282828]/90 px-6 py-8 text-center">
              <div className="text-white/60 text-sm font-medium mb-2">FREE FOREVER</div>
              <div className="text-4xl font-black text-white mb-2">$0</div>
              <div className="text-white/80 text-sm">No credit card required</div>
            </div>
            <div className="px-6 py-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#282828] font-medium">Custom Biztro link</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#282828] font-medium">Beautiful themes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#282828] font-medium">Unlimited links</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#282828] font-medium">Basic analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#282828] font-medium">Mobile optimized</span>
                </li>
              </ul>
              <div className="mt-8">
                <a href="/auth/signup">
                  <button className="w-full bg-[#282828] hover:bg-[#282828]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105">
                    Get Started Free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="text-[#282828] hover:text-[#282828]/80 font-medium">
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  )
}



