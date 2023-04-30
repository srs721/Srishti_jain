import React from 'react'
import './services.css'
import {GiBulletImpacts} from 'react-icons/gi'

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
              <GiBulletImpacts className='service__list-icon'/>
              <p> Built an electronics shopping web app that is a one place shopping destination for all your electronics. </p>         
            </li>

            <li>
              <GiBulletImpacts className='service__list-icon'/>
              <p> This project has been designed using TDD, SOLID, design patterns like Abstract factory and Singleton.</p>         
            </li>


            <li>
              <GiBulletImpacts className='service__list-icon'/>
              <p>Used My SQL database and created stored procedures for reducing the query time!</p>
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
              <GiBulletImpacts className='service__list-icon'/>
              <p> Created dynamic website for a Cafe using EC2 instance and S3 storage bucket which resulted in high availability and reliability.</p>         
            </li>

            <li>
              <GiBulletImpacts className='service__list-icon'/>
              <p> Used Amazon RDS, VPC, created IAM roles and serverless architecture to ensure security and componenets are seperated from each other. </p>         
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
              <GiBulletImpacts className='service__list-icon'/>
              <p> Developed a smart irrigation mobile app which can predict the diseases in leaves using SVM model, that gave an accuracyof 80%.</p>         
            </li>

            <li>
              <GiBulletImpacts className='service__list-icon'/>
              <p> Used IOT sensor to check the physical condition of soil and various other environment sensors like temperature, humidityand soil moisture sensor. </p>         
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services