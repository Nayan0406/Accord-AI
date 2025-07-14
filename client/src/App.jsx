import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Module from './pages/Module'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () =>{
  
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/module' element={<Module/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
