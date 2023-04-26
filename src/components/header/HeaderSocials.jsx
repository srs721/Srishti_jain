import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><SiLinkedin /></a>
        <a href="https://github.com" target="_blank"><SiGithub /></a>
    </div>
  )
}

export default HeaderSocials