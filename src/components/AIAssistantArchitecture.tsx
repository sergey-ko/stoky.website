import React from 'react'
import { FaLightbulb, FaCode, FaDatabase, FaDesktop, FaCogs, FaUsers, FaBook } from 'react-icons/fa'

const architecturePoints = [
  { 
    icon: FaCode, 
    title: 'Code Interpreter',
    description: 'Access complex data through custom scripts, allowing you to manipulate and analyze data in ways that standard tools cannot.',
    color: 'purple'
  },
  { 
    icon: FaBook, 
    title: 'Knowledge Base',
    description: 'Integrated best practices and Standard Operating Procedures (SOPs) to guide the AI Assistant, ensuring consistency and reliability in decision-making.',
    color: 'blue'
  },
  { 
    icon: FaDatabase, 
    title: 'Data API',
    description: 'Direct access to your databases and data lakes through secure APIs, enabling real-time data retrieval and updates for informed decision-making.',
    color: 'green'
  },
  { 
    icon: FaCogs, 
    title: 'Processes',
    description: 'Automated processes to keep data, models, and workflows up-to-date, ensuring that your AI assistant always operates on the latest information.',
    color: 'purple'
  },
  { 
    icon: FaDesktop, 
    title: 'UI',
    description: 'Customized user interface tailored to your business-specific needs, providing an intuitive and efficient way to interact with your data.',
    color: 'blue'
  },
  { 
    icon: FaUsers, 
    title: 'Team',
    description: 'A qualified team of experts to develop, support, and enhance your AI solution, providing ongoing assistance for optimal performance.',
    color: 'green'
  },
]

export default function AIAssistantArchitecture() {
  return (
    <section className="bg-[#0a0b1e] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">AI Assistant Architecture</h1>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-center">
          A comprehensive solution tailored to your business needs, integrating multiple
          components for seamless data access and analysis.
        </p>
        
        <div className="relative w-[700px] h-[700px] mx-auto">
          {architecturePoints.map((point, index) => (
            <div
              key={index}
              className="absolute w-60 text-center"
              style={{
                top: `${50 - 40 * Math.cos(2 * Math.PI * index / architecturePoints.length)}%`,
                left: `${50 + 40 * Math.sin(2 * Math.PI * index / architecturePoints.length)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-${point.color}-500 flex items-center justify-center`}>
                <point.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">{point.title}</h3>
              <p className="text-xs text-gray-400 max-w-[200px] mx-auto">{point.description}</p>
            </div>
          ))}
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <FaLightbulb className="text-5xl text-yellow-400 mb-2" />
            <h2 className="text-2xl font-bold">AI Assistant</h2>
          </div>
        </div>
      </div>
    </section>
  )
}