import React from 'react'
import AboutSection from '../components/AboutSection'
// import MissionSection from '../components/MissionSection'
import TechnologiesSection from '../components/TechnologiesSection'
import ConnectionSection from '../components/ConnectionSection'
import ContactUs from '../components/ContactUs'

const About = () => {
  return (
    <div>
      <AboutSection />
      {/* <MissionSection /> */}
      <TechnologiesSection />
      <ConnectionSection />
      <ContactUs />
    </div>
  )
}

export default About