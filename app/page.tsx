import Navbar from './components/shared/Navbar/Navbar'
import Footer from './components/shared/Footer'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof/SocialProof'
import UseCases from './components/UseCases/UseCases'
import PainPoints from './components/PainPoints'
import WhyUs from './components/WhyUs/WhyUs'
import VehicleFleet from './components/VehicleFleet/VehicleFleet'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ/FAQ'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <UseCases />
      <PainPoints />
      <WhyUs />
      <VehicleFleet />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
