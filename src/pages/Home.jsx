import Navbar from "../components/Navbar"
import HeroSlider from "../components/HeroSlider"
import AboutSection from "../components/AboutSection"
import FeaturedProducts from "../components/FeaturedProducts"
import BusinessSection from "../components/BusinessSection"
import Services from "../components/Services"
import AtAGlance from "../components/AtAGlance"
import Leadership from "../components/Leadership"
import Clients from "../components/Clients"
import Banner from "../components/Banner"
import Certifications from "../components/Certifications"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <FeaturedProducts />
      <BusinessSection />
      <Services />
      <AtAGlance />
      <Leadership />
      <Clients />
      <Banner />
      <Certifications />
      <Footer />
    </>
  )
}
