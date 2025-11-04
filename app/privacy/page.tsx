export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fffbeb] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Information We Collect</h2>
              <p className="text-gray-600">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Information Sharing</h2>
              <p className="text-gray-600">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at privacy@biztro.com.
              </p>
            </section>
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



