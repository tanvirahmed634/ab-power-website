import { useEffect, useState } from "react"

import slide1 from "../assets/slide1.jpeg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import slide4 from "../assets/slide4.png"

export default function HeroSlider() {

  const slides = [
    {
      image: slide1,
      title: "Solar PV System Supply & Installation in Bangladesh",
      subtitle: "Sustainable Power Solutions.",
      buttonText: "View Details!",
      buttonLink: "#detailsSolar"
    },
    {
      image: slide2,
      title: "33/11 KV Transformer in Bangladesh",
      subtitle: "Bringing Power to the People.",
      buttonText: "Explore More!",
      buttonLink: "#explore"
    },
    {
      image: slide3,
      title: "3 MVA 33/11 KV Sub Station in Bangladesh",
      subtitle: "Elevating Energy Access.",
      buttonText: "Ask for Pricing",
      buttonLink: "#Pricing"
    },
    {
      image: slide4,
      title: "Gas & Diesel / Power Generator in Bangladesh",
      subtitle: "Uninterrupted Energy Access.",
      buttonText: "View Details!",
      buttonLink: "#detailsGas"
    }
  ]

  const [index, setIndex] = useState(0)

  // 🔁 auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const current = slides[index]

  return (
    <div className="relative w-full h-[520px] overflow-hidden">

      {/* Images */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          className={`
            absolute w-full h-full object-cover
            transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/40" />

      {/* TEXT BLOCK */}
        <div className="absolute left-10 top-24 z-10 max-w-xl">

        {/* gradient background box */}
        <div className="
            bg-gradient-to-r
            from-black/75
            via-black/50
            to-transparent
            p-8
            rounded
            text-white
        ">

            <h1 className="text-5xl font-bold leading-tight">
            {current.title}
            </h1>

            <p className="mt-4 text-xl">
            {current.subtitle}
            </p>

            <a href={current.buttonLink}>
            <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold">
                {current.buttonText}
            </button>
            </a>

        </div>

        </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full border-2 border-white
              ${i === index ? "bg-white" : "bg-transparent"}
            `}
          />
        ))}
      </div>

    </div>
  )
}