import aboutSection from "../assets/aboutSection.PNG"

export default function AboutSection() {
  return (
    <section className="bg-gray-200 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>

          {/* top small text + line */}
          <div className="flex items-center gap-3 mb-2">
            <p className="text-red-500 tracking-widest font-medium text-lg">
              Welcome To AB Power Engineering Ltd.
            </p>
            <div className="w-[23px] h-[2px] bg-red-500"></div>
          </div>

          <h2 className="text-4xl md:text-4xl font-bold text-green-700 leading-tight mb-6">
            Electricity Power solution <br />
            company in Bangladesh
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed">
            <span className="font-semibold">AB Power Engineering Ltd.</span> is a
            leading electricity <span className="font-semibold">power solution company in Bangladesh</span>,
            providing top-quality substations, Switch Gear, Power Generators,
            and Power Transformers, and reliable service & solutions for industries & businesses.
            With a legacy of excellence spanning over five decades, we stand as a cornerstone in power solutions.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            <span className="font-semibold">Since 1969</span>, with a rich history of reliability
            and expertise, we've been dedicated to providing dependable power
            solutions nationwide as part of the AB Power Group of Companies.
            Trust us for unparalleled expertise and service in power solutions.
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold shadow-md">
            Get A Quotation
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <img
            src={aboutSection}
            alt="Power Transformer Engineer"
            className="relative object-cover w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}
