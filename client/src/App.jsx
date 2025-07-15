import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Module from './pages/Module'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CookiesPolicy from './components/Cookies-Policy'
import PrivacyPolicy from './components/Privacy-Policy'
import TermsAndCondition from './components/Terms-And-Condition'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/module' element={<Module />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cookies-policy' element={<CookiesPolicy />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndCondition />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
