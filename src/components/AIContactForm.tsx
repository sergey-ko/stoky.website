"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function AIContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-20 text-white">Contact Us</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="peer h-14 w-full bg-gray-800 border-gray-700 text-white placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="Name"
                required
              />
              <Label
                htmlFor="name"
                className="absolute left-2 -top-2.5 bg-gray-900 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Name
              </Label>
            </div>
            <div className="relative">
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="peer h-14 w-full bg-gray-800 border-gray-700 text-white placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="Email"
                required
              />
              <Label
                htmlFor="email"
                className="absolute left-2 -top-2.5 bg-gray-900 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Email
              </Label>
            </div>
          </div>
          <div className="relative">
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="peer h-14 w-full bg-gray-800 border-gray-700 text-white placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              placeholder="Company"
              required
            />
            <Label
              htmlFor="company"
              className="absolute left-2 -top-2.5 bg-gray-900 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Company
            </Label>
          </div>
          <div className="relative">
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="peer h-32 w-full bg-gray-800 border-gray-700 text-white placeholder-transparent focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
              placeholder="Message"
              required
            />
            <Label
              htmlFor="message"
              className="absolute left-2 -top-2.5 bg-gray-900 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Message
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-200 ease-in-out hover:shadow-lg"
          >
            Request a Consultation
          </Button>
        </form>
      </div>
    </section>
  )
}