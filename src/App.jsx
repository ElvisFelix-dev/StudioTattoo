import { ToastContainer } from 'react-toastify'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import GallerySection from './components/GallerySection'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'
import Interview from './components/Interview'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

export function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
        <Header />
        <Hero />
        <About />
        <GallerySection />
        <Skills />
        <Testimonial />
        <Interview />
        <Contact />
        <div className="w-full h-screen flex justify-center ">
          <Map />
        </div>
        <Footer />
        <Copyright />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
