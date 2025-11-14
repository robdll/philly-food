import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import UseCases from './components/UseCases'
import PainPoints from './components/PainPoints'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
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
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

