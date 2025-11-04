export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffbeb] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6">
            About Biztro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to help creators and small businesses establish their online presence with beautiful, simple tools.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Biztro was born from the frustration of complicated link management tools. We believe that establishing your online presence should be as simple as creating a beautiful profile.
              </p>
              <p className="text-gray-600">
                Whether you're a photographer, consultant, local business, or creative professional, Biztro gives you the tools to showcase your work and connect with your audience effectively.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#282828] mb-4">Our Values</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#282828] font-bold">•</span>
                  <span>Simplicity above all - we remove complexity so you can focus on what matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#282828] font-bold">•</span>
                  <span>Beautiful design - every pixel is crafted to enhance your professional image</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#282828] font-bold">•</span>
                  <span>Reliability you can trust - your online presence is too important to compromise</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#282828] mb-4">Ready to get started?</h2>
            <p className="text-gray-600 mb-6">Join thousands of professionals who have simplified their online presence with Biztro.</p>
            <a href="/auth/signup" className="inline-block bg-[#282828] hover:bg-[#282828]/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:scale-105">
              Create Your Free Page
            </a>
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



