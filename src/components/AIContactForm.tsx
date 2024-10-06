"use client"

import { FaEnvelope, FaTelegram } from 'react-icons/fa'

export function AIContactForm() {
  const handleEmailClick = () => {
    window.location.href = "mailto:sk@stoky.pro"
  }

  const handleTelegramClick = () => {
    window.open("https://t.me/Sergey0Kovalev", "_blank")
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-white">Contact Us</h2>
        <div className="flex justify-center space-x-8">
          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 ease-in-out hover:shadow-lg"
            aria-label="Send email"
          >
            <FaEnvelope size={24} />
          </button>
          <button
            onClick={handleTelegramClick}
            className="flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-200 ease-in-out hover:shadow-lg"
            aria-label="Send Telegram message"
          >
            <FaTelegram size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}