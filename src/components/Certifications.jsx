import cert1 from "../assets/certificate1.jpg"
import cert2 from "../assets/certificate2.jpg"
import eventImg from "../assets/event.jpg"

export default function Certifications() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">

      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-2xl font-bold text-green-700">
          Discover the Latest Developments in Energy Solutions
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {/* Certifications Card */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <h3 className="text-2xl font-semibold text-green-700 text-center mb-6">
            Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <img
              src={cert1}
              alt="Certification 1"
              className="rounded-lg shadow-sm object-cover"
            />

            <img
              src={cert2}
              alt="Certification 2"
              className="rounded-lg shadow-sm object-cover"
            />
          </div>

          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition">
              All Certificates
            </button>
          </div>

        </div>

        {/* Events Card */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <h3 className="text-2xl font-semibold text-green-700 text-center mb-8">
            Events
          </h3>

          <img
            src={eventImg}
            alt="Event"
            className="rounded-lg shadow-sm mb-6 object-cover"
          />

          <p className="text-center text-green-700 font-bold mb-6">
            33/11KV 10/14 MVA Sub-Station Commissioning
          </p>

          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition">
              Check Events
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}
