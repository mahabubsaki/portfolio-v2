import './App.css';
import InitialLoader from './Components/Loaders/InitialLoader';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Common/Navbar';
import PageChange from './Components/Loaders/PageChange';
import About from './Components/Pages/About';
import toast, { Toaster } from 'react-hot-toast';
import Skills from './Components/Pages/Skills';
import Services from './Components/Pages/Services';
import Aos from 'aos';
import Portfolio from './Components/Pages/Portfolio';
import Blogs from './Components/Pages/Blogs';
import 'react-chatbot-kit/build/main.css'
import Contact from './Components/Pages/Contact';
import Footer from './Components/Common/Footer';
Aos.init({ offset: 120, duration: 500, })


export const AppContext = createContext()

function App() {
  const navigate = useNavigate()
  const [hideLoadingComponent, setHideLoadingComponent] = useState(true)
  const [currentRoute, setCurrentRoute] = useState('')
  const [changing, setChanging] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHideLoadingComponent(false)
    }, 7000)
    setInterval(() => {
      Aos.refresh()
    }, 0);
  }, [])
  const [closeLoader, setCloseLoader] = useState(false)
  const handleChangeRoute = (route, change) => {
    setCurrentRoute(route)
    setChanging(true)
    if (change) {
      navigate(route)
    }
    setTimeout(() => {
      setChanging(false)
    }, 2000)
  }
  return (
    <AppContext.Provider value={{ closeLoader, setCloseLoader, navOpen, setNavOpen, handleChangeRoute }}>
      <div className={`App`}>
        <Toaster />
        {changing && <PageChange route={currentRoute} />}
        {hideLoadingComponent ? <InitialLoader /> : <div className={`${changing && 'hidden'}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
