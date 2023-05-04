import React from 'react'
import './footer.css'
import {CiFacebook} from 'react-icons/ci'
import {BsInstagram} from 'react-icons/bs'
import {CiTwitter} from 'react-icons/ci'

const Footer = () => {
  return (
      <footer>
        <a href="#" className='footer__logo'>VinhNguyen</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='footer__socials'>
            <a href="https://facebook.com"><CiFacebook/></a>
            <a href="https://instagram.com"><BsInstagram/></a>
            <a href="https://twitter.com"><CiTwitter/></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy;Make by Vinh Nguyen. All rights reserved</small>
        </div>
      </footer>
    )
}

export default Footer