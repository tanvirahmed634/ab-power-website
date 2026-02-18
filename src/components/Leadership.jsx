import { useState } from "react"
import leader1 from "../assets/leader1.jpg"
import leader2 from "../assets/leader2.jpg"
import leader3 from "../assets/leader3.jpg"
import leadershipVideo from "../assets/leadershipVideo.mp4"

export default function Leadership() {

  const featuredLeader = {
    name: "Mr. Golam Mortuza",
    title: "Chairman",
    desc: "Mr. Golam Murtoza is the chairman of AB Power Engineering Ltd. He is a retired REB/PBS General Manager. AB Power Engineering Ltd. certainly is the best friend of people who need electricity, electrical equipment and services.",
    img: leader1
  }

  const team = [
    { name: "Md. Burhan Uddeen", role: "Deputy Managing Director", img: leader2 },
    { name: "Md. Anisuzzaman", role: "Managing Director", img: leader3 }
  ]

  const visibleCount = 3
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState("right")

  const next = () => {
    setDir("right")
    setIndex(i => i + 1)
  }

  const prev = () => {
    setDir("left")
    setIndex(i => i - 1)
  }

  /* build always 3 visible cards (cycle repeat) */
  const visibleTeam = Array.from({ length: visibleCount }, (_, i) => {
    const idx = (index + i + team.length * 1000) % team.length
    return team[idx]
  })

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-red-500 tracking-widest mb-2 text-lg font-medium">
            — Our Leadership —
          </p>
          <h2 className="text-3xl md:text-3xl font-bold text-green-700">
            Meets the Experts: Our Comprehensive Engineering Solution
          </h2>
        </div>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* FEATURED */}
          <div className="bg-white border rounded-md p-6 flex gap-6">
            <div className="flex-1">
              <h3 className="text-blue-700 font-bold text-lg mb-1">
                {featuredLeader.name}
              </h3>
              <p className="font-semibold text-md mb-3">
                {featuredLeader.title}
              </p>
              <p className="text-md text-black-700 mb-4 leading-relaxed">
                {featuredLeader.desc}
              </p>
              <button className="text-blue-700 font-semibold text-md">
                View Details
              </button>
            </div>

            <img
              src={featuredLeader.img}
              className="w-36 h-44 object-cover rounded"
            />
          </div>

          {/* VIDEO */}
          <div className="bg-white border rounded-md p-4">
            <video
              src={leadershipVideo}
              controls
              className="w-full h-64 object-cover rounded"
            />
            <p className="text-md mt-3 font-bold">
              Powering Up: A Look Inside Substations, Switch Gear & Generators
            </p>
          </div>

        </div>

        {/* ===== TEAM SLIDER ===== */}

        <div className="overflow-hidden mb-6">

          <div
            key={index}
            className={`flex gap-6 ${
              dir === "right"
                ? "animate-slideLeft"
                : "animate-slideRight"
            }`}
          >
            {visibleTeam.map((member, i) => (
              <div key={i} className="w-1/3">

                <div className="bg-white border rounded-md p-1 flex gap-4 items-center shadow-sm">
                  <img
                    src={member.img}
                    className="w-35 h-40 object-cover rounded"
                  />

                  <div>
                    <h4 className="text-blue-700 font-bold text-lg">
                      {member.name}
                    </h4>
                    <p className="text-md text-black-600 font-bold">
                      {member.role}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* SLIDER BUTTONS */}
        <div className="flex justify-center gap-3 mb-6">

          <button
            onClick={prev}
            className="w-10 h-10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="w-10 h-10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            ›
          </button>

        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold shadow">
            View All Team Members
          </button>
        </div>

      </div>

      {/* animation */}
      <style>
        {`
          @keyframes slideLeft {
            from { transform: translateX(40px); opacity: 0 }
            to { transform: translateX(0); opacity: 1 }
          }

          @keyframes slideRight {
            from { transform: translateX(-40px); opacity: 0 }
            to { transform: translateX(0); opacity: 1 }
          }

          .animate-slideLeft {
            animation: slideLeft .35s ease;
          }

          .animate-slideRight {
            animation: slideRight .35s ease;
          }
        `}
      </style>

    </section>
  )
}
