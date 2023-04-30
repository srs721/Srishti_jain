import React from 'react'
import './testimonials.css'
import Sandeep from '../../assets/Sandeep.jpg'
import Subhash from '../../assets/Subhash.jpg'
import Manju from '../../assets/Manju.jpg'

import { Navigation,Pagination,Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const data = [
  {
    avatar: Sandeep,
    name:'Sandeep Gurung (Senior Data Integration Engineer at DXC Technology)',
    review: 'I have worked closely with Srishti for two year at NTT Ltd. Being her collegue I have had a chance to engage with her in multiple projects. She has been one of most talented employees, and '
  },
  {
    avatar: Subhash,
    name:'Subhash Kakkar (DevOps Architect at NTT Ltd.)',
    review: 'Srishti is hardworking'
  },
  {
    avatar: Manju,
    name:'Manjunath Dayananda (Software Engineer at Amazon)',
    review: 'Srishti is hardworking'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from my team</h5>
      <h2>Testimonials</h2>

      <Swiper className="conatiner testimonials__container"
      modules={[Navigation,Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review},index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
              <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
              </SwiperSlide>

            )
            
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials