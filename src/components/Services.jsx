import { Wrench, Settings, Users } from "lucide-react"

export default function Services() {

  const services = [
    {
      icon: Wrench,
      title: "Annual Maintenance",
      desc: "We offer comprehensive annual maintenance services customized to your specific power product needs."
    },
    {
      icon: Settings,
      title: "Supply & Installation",
      desc: "We offer high-quality power product supply and installation services for a wide range of electrical equipment and systems."
    },
    {
      icon: Users,
      title: "Corporate Service",
      desc: "Our corporate services are designed to help businesses optimize their energy use & reduce impact."
    }
  ]

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">

      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-18">

        <p className="text-red-500 tracking-widest font-medium mb-2 text-lg">
          Service & Solution
        </p>

        <h2 className="text-3xl md:text-3xl font-bold text-green-700 mb-3">
          Trusted experts in Power Solution services
        </h2>

        <p className="text-black-600">
          At <b>AB Power Engineering Ltd.</b>, we're the trusted experts in power solutions. Rely on us for reliable and customized solutions to meet your energy needs with ease and expertise.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {services.map((s, i) => {
          const Icon = s.icon

          return (
            <div
              key={i}
              className="relative border-2 border-green-700 rounded-3xl p-8 text-center bg-white hover:shadow-lg transition"
            >

              {/* top circle icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white border-2 border-green-700 rounded-full p-4 shadow">
                <Icon className="w-7 h-7 text-green-700" />
              </div>

              <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">
                {s.title}
              </h3>

              <p className="text-green-800 text-md leading-relaxed">
                {s.desc}
              </p>

            </div>
          )
        })}

      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow">
          Talk To Our Experts
        </button>
      </div>

    </section>
  )
}
