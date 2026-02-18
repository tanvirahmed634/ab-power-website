import img1 from "../assets/glance1.PNG"
import img2 from "../assets/glance2.PNG"
import { CheckCircle } from "lucide-react"

export default function AtAGlance() {

  const values = [
    "We Manufacture Electrical substations ranging from 11 KV to 33 KV.",
    "Provide all sorts of electrical installation and maintenance services.",
    "Low cost & high-quality substation equipment & controlling components.",
    "Up to 100,000000 Tk financial capability.",
    "Sufficient tools are available to the maintenance crews."
  ]

  return (
    <section className="bg-gray-200 py-16 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-3xl md:text-3xl font-bold text-green-700 mb-3">
            AB Power Engineering Ltd. (At A Glance)
          </h2>

          <p className="text-black-700 mb-3 leading-relaxed text-md">
            Whether you need customized switchgear, transformer, substation, or
            generator solutions for your business or industry, AB Power Engineering Ltd.
            has the expertise and resources to deliver high-quality power solution
            products built to last.
          </p>

          <h3 className="text-green-700 font-bold mb-3">
            Our Core Values
          </h3>

          {/* VALUES LIST */}
          <div className="space-y-3 mb-7">
            {values.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-green-700 w-5 h-5 mt-1 shrink-0" />
                <p className="text-black-700 text-md">{item}</p>
              </div>
            ))}
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold shadow">
            View Details
          </button>

        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">

          {/* border frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-green-600 rounded-md"></div>

          <div className="grid grid-cols-2 gap-4 relative p-3 rounded-md">

            <img
              src={img1}
              alt="Substation"
              className="h-80 w-full object-cover"
            />

            <img
              src={img2}
              alt="Transformer"
              className="h-82 w-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  )
}
