import { Activity, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
              <Image src="/logo.jpg" alt="Void Works" width={24} height={24} />
            </div>
            <span className="text-sm text-gray-400">Void Works</span>
          </div>

          <div className="flex items-center space-x-8">
            <a href="" className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm">
              <Activity className="w-3 h-3" />
              <span>Status</span>
            </a>
            <a href="mailto:hello@voidworks.io" className="text-gray-400 hover:text-white text-sm">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Void Works</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
