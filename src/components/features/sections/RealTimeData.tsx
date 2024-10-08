import Image from 'next/image'

export function RealTimeData() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Real-Time Data, Always in Control</h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg text-gray-600">
          Get real-time data and monitor your strategies continuously. Our assistant works in the background to notify you of trading signals and opportunities, keeping you ahead of the game.
        </p>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md overflow-hidden">
          <div className="relative h-[400px] animate-pulse">
            {/* Replace this with an actual dynamic chart or graph */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-400 to-transparent" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-300 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}