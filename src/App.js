import './App.css';
import InitialLoader from './Components/Loaders/InitialLoader';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Common/Navbar';
import PageChange from './Components/Loaders/PageChange';
import About from './Components/Pages/About';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import toast, { Toaster } from 'react-hot-toast';
import Skills from './Components/Pages/Skills';
import AOS from 'aos'
AOS.init()

export const AppContext = createContext()

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };
  const navigate = useNavigate()
  const [hideLoadingComponent, setHideLoadingComponent] = useState(true)
  const [currentRoute, setCurrentRoute] = useState('')
  const [changing, setChanging] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHideLoadingComponent(false)
    }, 7000)
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
  useEffect(() => {
    setInterval(() => {
      toast("It's so cold here please help us from the snow's by clicking on them ", {
        duration: 5000,
        position: 'top-right',
        icon: '🥶',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
        id: 'clipboard',
      })
    }, 20000)
  }, [])
  return (
    <AppContext.Provider value={{ closeLoader, setCloseLoader, navOpen, setNavOpen, handleChangeRoute }}>
      <div className={`App`}>
        <Toaster />
        {changing && <PageChange route={currentRoute} />}
        {hideLoadingComponent ? <InitialLoader /> : <div className={`${changing && 'hidden'}`}>
          <Navbar />
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              "fullScreen": {
                "enable": true,
                "zIndex": 0
              },
              "particles": {
                "number": {
                  "value": 400,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle"
                },
                "opacity": {
                  "value": 1.2,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 2,
                    "opacity_min": 1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 10,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 80,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 500,
                  "color": "#ffffff",
                  "opacity": 1,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 4,
                  "direction": "bottom",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true,
              "background": {
                "color": "transparent",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
              }
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
