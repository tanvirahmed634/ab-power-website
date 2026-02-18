import c1 from "../assets/fsib.jpg"
import c2 from "../assets/rose.jpg"
import c3 from "../assets/model.jpg"
import c4 from "../assets/union.jpg"
import c5 from "../assets/aci.jpg"
import c6 from "../assets/ripon.jpg"

import a1 from "../assets/excel.jpg"
import a2 from "../assets/abb.jpg"
import a3 from "../assets/epcos.jpg"
import a4 from "../assets/shizuki.jpg"
import a5 from "../assets/enerux.jpg"
import a6 from "../assets/imefy.jpg"

export default function Clients() {

  const clients = [c1, c2, c3, c4, c5, c6]
  const affiliations = [a1, a2, a3, a4, a5, a6]

  return (
    <section className="bg-gray-20 py-20 px-6 md:px-16">

      {/* Header */}
      <div className="text-center max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl md:text-2xl font-bold text-green-700 mb-3">
          Trusted by Clients & Business Partners
        </h2>

        <h4 className="font-semibold mb-3">
          Collaborating with Our Clients and Partners for Sustainable Business Success.
        </h4>

        <p className="text-black-600 text-sm md:text-base">
          We believe that collaboration is key to achieving sustainable business success. 
          That’s why we work closely with our clients and partners to understand their unique 
          needs & develop customized solutions that deliver the best possible outcomes.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">

        {/* Clients Section */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-2xl font-semibold text-green-700 text-center mb-8">
            Clients
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className="h-16 mx-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition">
              Our Clients
            </button>
          </div>

        </div>

        {/* Affiliations Section */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-2xl font-semibold text-green-700 text-center mb-8">
            Affiliations
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {affiliations.map((logo, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt="Affiliation Logo"
                  className="h-16 mx-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition">
              Our Affiliations
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}
