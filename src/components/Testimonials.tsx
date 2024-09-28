import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from 'next-themes'

const testimonials = [
  {
    quote: "Testing hypothesis is a game-changer. I can now test all my ideas by myself. I used to pay $1000+ for this.",
    author: "Andrey B.",
    role: "SnP 500 Follower",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote: "Backtesting complex strategy on all universe of stocks was impossible before. Now it takes only few words.",
    author: "Kate R.",
    role: "NASDAQ Trader",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote: "My custom indicators and dynamic list of stocks to watch for let me have edge over the market. I feel confident that I am on top of things.",
    author: "Vlad M.",
    role: "Ichimoku Fan",
    image: "/images/testimonial-3.jpg",
  },
]

export function Testimonials() {
  const { theme } = useTheme()

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white drop-shadow-md">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="italic mb-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}