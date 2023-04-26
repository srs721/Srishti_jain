import React from 'react'
import './services.css'
import {RiCheckboxBlankFill} from 'react-icons/ri'

const Services = () => {
  return (
    <section id='services'>
      <h5> What I have built</h5>
      <h2> Projects </h2>
      <div className="container services__container">
        <article className='service'>
          <div className="services__head">
            <h3> Best Electronics</h3>
            <small>Java, Spring Boot</small>
          </div>

          <ul className='service__list'>
            <li>
              <RiCheckboxBlankFill className='service__list-icon'/>
              <p> Used SOLID principles</p>         
            </li>

            <li>
              <RiCheckboxBlankFill className='service__list-icon'/>
              <p> Used Design principles </p>         
            </li>

          </ul>
        </article>


        <article className='service'>
          <div className="services__head">
            <h3> Café Management System </h3>
            <small>AWS</small>
          </div>

          <ul className='service__list'>
            <li>
              <RiCheckboxBlankFill className='service__list-icon'/>
              <p> Used S3 storage bucket </p>         
            </li>

            <li>
              <RiCheckboxBlankFill className='service__list-icon'/>
              <p> Used EC2 </p>         
            </li>

          </ul>
        </article>


        <article className='service'>
          <div className="services__head">
            <h3> Automated Irrigation System</h3>
            <small>IOT and Machine Learning </small>
          </div>

          <ul className='service__list'>
            <li>
              <RiCheckboxBlankFill className='service__list-icon'/>
              <p> Used SVM machine learning Model</p>         
            </li>

            <li>
              <RiCheckboxBlankFill className='service__list-icon'/>
              <p> Used IOT sensors </p>         
            </li>

          </ul>
        </article>




      </div>
    </section>
  )
}

export default Services