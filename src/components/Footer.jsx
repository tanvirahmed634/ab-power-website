import { MapPin, Phone } from "lucide-react"
import logoFooter from "../assets/logoFooter.PNG"
import facebook from "../assets/facebook.png"
import google from "../assets/google.png"

export default function Footer() {
  return (
    <footer className="bg-[#1A6B38] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid md:grid-cols-3 gap-10">

        {/* Left Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={logoFooter} alt="AB Power Logo" className="h-10" />
            <h2 className="text-2xl font-bold">AB POWER</h2>
          </div>

          <p className="font-semibold mb-4">Follow Us On</p>

          <div className="flex gap-4">
            <a href="#" className="bg-white p-2 rounded-md">
              <img src={facebook} alt="Facebook" className="h-6 w-6" />
            </a>

            <a href="#" className="bg-white p-2 rounded-md">
              <img src={google} alt="Google" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Businesses</h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline">
                AB Power Engineering Ltd.
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AB Electric Ltd.
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AB Garments Accessories & Industries Ltd.
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AB Pharma Ltd.
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-2">
              <MapPin size={18} className="mt-1" />
              <p>
                House 4/6, Road 9, J block, Baridhara <br />
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+8801715956823" className="hover:underline">
                +8801715956823
              </a>
            </div>

          </div>
        </div>

      </div>

    <p className="border-t border-white mx-auto"></p>

      {/* Bottom Bar */}
      <div className="bg-[#1A6B38] text-center py-6 text-sm">

        <div className="mb-2 space-x-3">
          <a href="#" className="hover:underline">About Us</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <p>
          © 2026 AB Power Engineering Ltd. | All rights reserved.
        </p>

        <p className="mt-1">
          Designed & Developed by American Best IT Limited.
        </p>

      </div>

    </footer>
  )
}
