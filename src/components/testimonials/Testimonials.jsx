import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { AspectRatio } from 'react-aspect-ratio'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Beatiful'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Beatiful'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Beatiful'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Beatiful'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testtimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <AspectRatio ratio={1} >
                    <img src={avatar} alt={review} />
                  </AspectRatio>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'> {review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section >
  )
}

export default Testimonials