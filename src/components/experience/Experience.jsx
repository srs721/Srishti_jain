import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
        </div>
        </div>

        <div className="experience__backened">
        <h3>Backened Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            
          </article>
          
        </div>
        </div>

        <div className="experience__cloud">
        <h3>Cloud Experience</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />

              <div>
              <h4>Azure</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>AWS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>GCP</h4>
              <small className='text-light'>Beginner</small>
              </div>
            
          </article>
        </div>
        </div>
        

        <div className="experience__other">
        <h3>Databases and Other Technologies</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>My SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
              <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Apache Airflow</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Apache NiFi</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
        </div>
        </div>
        </div>
      </section>
  )
}

export default Experience