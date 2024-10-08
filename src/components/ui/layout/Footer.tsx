import { Input } from "@/components/ui/common/input"
import { Button } from "@/components/ui/common/button"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useTheme } from 'next-themes'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Trading Assistant</h3>
            <p className="text-sm text-gray-400">Empowering traders with Quant insights and tools.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#features-section" className="hover:text-blue-400 transition-colors duration-200">Features</a></li>
              <li><a href="#subscription-plans" className="hover:text-blue-400 transition-colors duration-200">Subscription Plans</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
              {/* <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest features and trading tips.</p>
            <a 
              href="#" 
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <Linkedin size={24} className="mr-2" />
              Follow us on LinkedIn
            </a>
          </div> 
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 `Stoky` Trading Assistant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Twitter size={24} /></a> */}
            {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Linkedin size={24} /></a> */}
            {/*<a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Instagram size={24} /></a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}