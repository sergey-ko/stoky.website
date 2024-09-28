import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useTheme } from 'next-themes'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">AI Trading Assistant</h3>
            <p className="text-sm text-gray-400">Empowering traders with AI-driven insights and tools.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest features and trading tips.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="mr-2 bg-gray-700 dark:bg-gray-800 border-gray-600 dark:border-gray-700" />
              <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">Subscribe</Button>
            </div>
          </div> 
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 `Stoky` Trading Assistant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Twitter size={24} /></a> */}
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Linkedin size={24} /></a>
            {/*<a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><Instagram size={24} /></a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}