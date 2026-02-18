import { Phone, Mail } from "lucide-react"
import logo from "../assets/logo.PNG"

export default function Navbar() {

  const menu = [
    { name: "Home", dropdown: false },
    { name: "Businesses", dropdown: true },
    { name: "Products", dropdown: true },
    { name: "Service & Solution", dropdown: true },
    { name: "Happenings", dropdown: true },
    { name: "About Us", dropdown: true },
  ]

  return (
    <div className="w-full">

      {/* ================= TOP HEADER ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LEFT — Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="AB Power" className="h-10 w-auto" />
            <div className="text-3xl font-bold leading-none">
              <span className="text-green-600">AB</span>{" "}
              <span className="text-red-600">POWER</span>
            </div>
          </div>

          {/* CENTER — Tagline */}
          <div className="hidden md:block text-green-700 font-semibold text-lg">
            All Kinds of Power Solutions
          </div>

          {/* RIGHT — Contact Block */}
          <div className="text-right">

            {/* Top row */}
            <div className="grid grid-cols-2 gap-6 text-green-700 font-semibold text-md">
              <div>How Can We Help?</div>
              <div>Talk To An Expert</div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-6 mt-1 text-md font-semibold">

              <a
                href="#contact"
                className="flex items-center justify-end gap-2 text-red-600 hover:underline"
              >
                <Mail size={16} />
                Contact Us
              </a>

              <a
                href="tel:+8801672073817"
                className="flex items-center justify-end gap-2 text-red-600 hover:underline"
              >
                <Phone size={16} />
                +8801672073817
              </a>

            </div>
          </div>

        </div>
      </div>


      {/* ================= GREEN MENU BAR ================= */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto flex text-white text-md font-medium overflow-x-auto">

          {menu.map((item, i) => (
            <div
              key={i}
              className="
                px-6 py-3 
                border-r border-green-600 
                hover:bg-green-800 
                cursor-pointer 
                flex items-center gap-1
                whitespace-nowrap
              "
            >
              {item.name}
              {item.dropdown && <span className="text-xs">▾</span>}
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}