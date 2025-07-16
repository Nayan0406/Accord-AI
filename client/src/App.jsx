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
import TermsAndUse from "./components/TermsAndUse";
import BlogDetails from './components/BlogDetails'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/module' element={<Module />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cookies-policy' element={<CookiesPolicy />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndCondition />} />
        <Route path='/terms-and-use' element={<TermsAndUse />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
