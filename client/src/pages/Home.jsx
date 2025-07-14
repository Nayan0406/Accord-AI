import React from 'react'
import HomeIntro from '../components/HomeIntro'
import SmarterModuleSection from '../components/SmarterModuleSection'
import HowItWorks from '../components/HowItWorks'
import LimtlessSection from '../components/LimtlessSection'
import TechnologiesSection from '../components/TechnologiesSection'
import ConnectSection from '../components/ConnectionSection'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div>
      <HomeIntro />
      <SmarterModuleSection />
      <HowItWorks />
      <LimtlessSection />
      <TechnologiesSection />
      <ConnectSection />
      <ContactUs />
    </div>
  )
}

export default Home