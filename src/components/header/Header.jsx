import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__conatiner">
        <center>
        <h3>Hello I'm</h3>
        <h1> Srishti Jain</h1>
        <h3 className="text-light">Software Engineer</h3>
        </center>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
          
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header