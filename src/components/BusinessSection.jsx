import t1 from "../assets/abPower.png"
import t2 from "../assets/abElectric.png"
import t3 from "../assets/abGarments.png"

export default function FeaturedProducts() {

  const products = [
    {
      title: "AB POWER ENGINEERING LTD.",
      desc: "We are one of the leading manufacturers of high-quality switchgear & transformer solutions in Bangladesh. We provide reliable & innovative solutions designed to meet clients' needs.",
      img: t1
    },
    {
      title: "AB ELECTRIC LTD.",
      desc: "Our team of expert electricians is dedicated to providing high-quality installations, repairs, & maintenance services to ensure the safety & functionality of your electrical systems.",
      img: t2
    },
    {
      title: "AB GARMENTS ACCESSORIES & INDUSTRIES LTD.",
      desc: "We manufacture & supply high-quality garment accessories. Our products include buttons, zippers, ribbons, labels, and more, designed to enhance the aesthetics of your garments.",
      img: t3
    }
  ]

  return (
    <section className="bg-gray-200 py-16 px-6 md:px-16">

      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-7">
        <p className="text-red-500 tracking-widest font-medium mb-2 text-lg">
          Our Businesses
        </p>

        <h2 className="text-3xl md:text-3xl font-bold text-green-700 mb-4">
          Generating power & durability to thrive businesses in Bangladesh
        </h2>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-sm shadow">

            <img
              src={p.img}
              className="h-56 w-full object-cover rounded-t-sm"
            />

            <div className="p-3">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                {p.title}
              </h3>

              <p className="text-black-600 text-md">
                {p.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}