import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import DesktopSection3 from '../components/DesktopSection3.jsx'
import DesktopSection4 from '../components/DesktopSection4.jsx'
import PartnersSection from '../components/PartnersSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import PricingSection from '../components/PricingSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Footer from '../components/Footer.jsx'



const LandingPage = () => {
  return (
    <>
      <HeroSection /> 
      <FeaturesSection />
      <DesktopSection3 />
      <DesktopSection4 />
      <PartnersSection />
      <TestimonialsSection />
      <PricingSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default LandingPage