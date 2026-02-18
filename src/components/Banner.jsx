import { Mail, Phone } from "lucide-react"

export default function Banner() {
  return (
    <section className="relative bg-green-700 py-8 px-6 md:px-16 overflow-hidden">

      {/* Background Overlay Effect */}
      <div className="absolute inset-0 bg-green-800 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Text */}
        <h2 className="text-white text-xl md:text-3xl font-semibold text-center md:text-left max-w-3xl">
          "Start Your Journey Towards Sustainable Energy Solutions with AB Power Engineering Ltd."
        </h2>

        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">

          <button className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            <Mail size={18} />
            Contact Us Now!
          </button>

          <button className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            <Phone size={18} />
            Call Us Today
          </button>

        </div>

      </div>

    </section>
  )
}
