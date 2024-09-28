import Image from 'next/image'

export function AIPartnerships() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Partnerships</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="w-64 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <Image
              src="/images/microsoft-for-startups-logo.png"
              alt="Microsoft for Startups"
              width={200}
              height={100}
              objectFit="contain"
            />
          </div>
          <div className="w-64 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
            <Image
              src="/images/openai-startup-logo.png"
              alt="OpenAI Startup"
              width={200}
              height={100}
              objectFit="contain"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder-logo.png";
                e.currentTarget.alt = "OpenAI Startup (Logo unavailable)";
              }}
            />
          </div>
        </div>
        <p className="text-center mt-12 text-gray-600 italic max-w-2xl mx-auto">
          Part of the Microsoft for Startups and OpenAI Startup programs, ensuring access to the latest technology.
        </p>
      </div>
    </section>
  )
}