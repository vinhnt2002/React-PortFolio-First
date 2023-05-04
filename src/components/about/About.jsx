import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { TbFileCertificate } from 'react-icons/tb'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { AspectRatio } from 'react-aspect-ratio'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <AspectRatio ratio={1}>
          <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt="" />
            </div>
          </div>
        </AspectRatio>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <HiOutlineAcademicCap className='about__icon' />
              <h5>academic level</h5>
              <small>+3 Year students</small>
            </article>

            <article className='about__card'>
              <TbFileCertificate className='about__icon' />
              <h5>Certificate</h5>
              <small>+++</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Project</h5>
              <small>+10 Small Project</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, sunt. Harum sit corrupti temporibus explicabo, non libero.
            Nesciunt, reprehenderit mollitia, illum blanditiis optio iusto
            veritatis provident voluptas quo, quia autem.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About