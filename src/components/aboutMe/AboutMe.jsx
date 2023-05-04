import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {RiUserStarFill} from 'react-icons/ri'
import {VscFolderActive} from 'react-icons/vsc'


const AboutMe = () => {
  return (
    <section id='about'>
    <h5> Get to Know</h5>
    <h2> About Me </h2>

    <div className='container about__container'>
      
      <div className="about__me">
        <div className="about__me-image">
          <center>
          <img src = {ME} alt=""/>
          </center>
      </div>
    </div>

  <div className="about__content">
    <div className="about__cards">
      <article className='about__card'>
      <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small> 3+ Years Working </small>
      </article>
      

    <article className='about__card'>
    <RiUserStarFill className='about__icon'/>
      <h5>Clients</h5>
      <small> 50+ </small>
    </article>

    <article className='about__card'>
    <VscFolderActive className='about__icon'/>
      <h5>Projects</h5>
      <small> 20+ </small>
    </article>
    </div>
    <p>
    An engineer with the desire to integrate technology into daily life so that our clients can benefit the most from it. I aim to create technology that is safe, dependable, and satisfies user demands!
    </p>
    <a href='#contact' className='btn btn-primary'> Let's Talk </a>
  </div>
  </div>
</section>
)
  }
export default AboutMe