export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fffbeb] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using Biztro's services.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Biztro, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Use License</h2>
              <p className="text-gray-600">
                Permission is granted to temporarily use Biztro for personal and business use, subject to restrictions set in these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">User Responsibilities</h2>
              <p className="text-gray-600">
                You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Contact Information</h2>
              <p className="text-gray-600">
                Questions about the Terms of Service should be sent to us at legal@biztro.com.
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



