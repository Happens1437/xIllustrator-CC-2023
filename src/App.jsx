import './App.css'
import About from './assets/components/About'
import Brands from './assets/components/Brands'
import Footer from './assets/components/Footer'
import GetInTouch from './assets/components/GetInTouch'
import Hero from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
import Services from './assets/components/Services'
import Testimonials from './assets/components/Testimonials'

function App() {


  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Brands />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
