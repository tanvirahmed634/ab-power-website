import t1 from "../assets/transformer.PNG"
import t2 from "../assets/switchgear.PNG"
import t3 from "../assets/generator.PNG"

export default function FeaturedProducts() {

  const products = [
    {
      title: "Power Transformer",
      desc: "The power transformer from AB Power ensures stable & efficient electricity distribution, empowering industries and businesses with reliable energy.",
      img: t1
    },
    {
      title: "Switch Gear",
      desc: "Our switchgear ensures safe and efficient power distribution for various applications, with seamless control and protection for electrical systems.",
      img: t2
    },
    {
      title: "Power Generator",
      desc: "Our power generators deliver reliable electricity, ensuring uninterrupted power supply for industries, businesses, and industries across Bangladesh.",
      img: t3
    }
  ]

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">

      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-7">
        
        <p className="text-red-500 tracking-widest font-medium mb-2 text-lg">
          Our Featured Products
        </p>
        <h2 className="text-3xl md:text-3xl font-bold text-green-700 mb-4">
          Our Power solution products: Quality & sustainable in every piece
        </h2>

        <p className="text-black-600">
          Are you Looking for top-quality <b>transformer</b>, <b>substation</b>, and <b>power generator</b> solutions in Bangladesh? AB Power Engineering Ltd. offers a wide range of power products designed to meet your power needs with efficiency, reliability & durability.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-sm shadow">

            <img
              src={p.img}
              className="h-56 w-full object-cover rounded-t-sm"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-700 underline mb-3 text-center">
                {p.title}
              </h3>

              <p className="text-black-600 text-md">
                {p.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Button */}
      <div className="text-center mt-10">
        <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold">
          Ask for pricing!
        </button>
      </div>

    </section>
  )
}
