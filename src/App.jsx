import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import AboutMe from './components/aboutMe/AboutMe'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
// import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <AboutMe />
    <Experience />
    <Services />
    {/* <Portfolio /> */}
    <Testimonials />
    <Contact />
    <Footer />
    </>

  )
}

export default App