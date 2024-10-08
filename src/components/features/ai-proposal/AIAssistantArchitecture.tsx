import React from 'react'
import { FaLightbulb, FaCode, FaDatabase, FaDesktop, FaCogs, FaUsers, FaBook } from 'react-icons/fa'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/common/card"

const architecturePoints = [
  { 
    icon: FaCode, 
    title: 'Code Interpreter',
    description: 'Access complex data through custom scripts, allowing you to manipulate and analyze data in ways that standard tools cannot.',
    color: '#9333ea'  // purple
  },
  { 
    icon: FaBook, 
    title: 'Knowledge Base',
    description: 'Integrated best practices and Standard Operating Procedures (SOPs) to guide the AI Assistant, ensuring consistency and reliability in decision-making.',
    color: '#3b82f6'  // blue
  },
  { 
    icon: FaDatabase, 
    title: 'Data API',
    description: 'Direct access to your databases and data lakes through secure APIs, enabling real-time data retrieval and updates for informed decision-making.',
    color: '#22c55e'  // green
  },
  { 
    icon: FaCogs, 
    title: 'Processes',
    description: 'Automated processes to keep data, models, and workflows up-to-date, ensuring that your AI assistant always operates on the latest information.',
    color: '#ef4444'  // red
  },
  { 
    icon: FaDesktop, 
    title: 'UI',
    description: 'Customized user interface tailored to your business-specific needs, providing an intuitive and efficient way to interact with your data.',
    color: '#f97316'  // orange
  },
  { 
    icon: FaUsers, 
    title: 'Team',
    description: 'A qualified team of experts to develop, support, and enhance your AI solution, providing ongoing assistance for optimal performance.',
    color: '#6366f1'  // indigo
  },
]

export default function AIAssistantArchitecture() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-100">AI Assistant</h2>
        <p className="text-2xl text-center mb-16 text-gray-100">
          Integrating multiple components for seamless data access and analysis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {architecturePoints.map((point, index) => (
            <Card key={index} className="bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-6">
                <div style={{ backgroundColor: point.color }} className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <point.icon className="text-3xl text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white text-center">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300 text-xl text-center">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      
      </div>
    </section>
  )
}