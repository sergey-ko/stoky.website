import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { FaChartLine, FaCogs, FaExpandArrowsAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function AIHero() {
  console.log("AIHero component is rendering");

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image 
          src="/background/data_flow_overlay.jpg"
          alt="Data flow background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-extrabold mb-6 leading-tight"
        >
          Unlock Your Data with a Custom AI Assistant
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl font-light mb-10"
        >
          A 6-Month Program to Build an AI Assistant Tailored for Your Data Access Challenges
        </motion.h2>
        <div className="flex justify-center space-x-4 mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <a href="#contact">Start Your Data Journey Today</a>
          </Button>          
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl font-semibold mb-10"
        >
          Discover how our tailored AI assistant addresses your data challenges:
        </motion.p>
        <div className="flex justify-center space-x-8">
          {[
            { icon: FaChartLine, text: "Extract actionable insights effortlessly", color: "text-blue-400" },
            { icon: FaCogs, text: "Empower your team without technical AI expertise", color: "text-green-400" },
            { icon: FaExpandArrowsAlt, text: "Scale data analysis across your organization seamlessly", color: "text-yellow-400" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              className="flex flex-col items-center max-w-xs bg-black/30 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <item.icon className={`text-5xl mb-4 ${item.color}`} />
              <p className="text-xl">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}