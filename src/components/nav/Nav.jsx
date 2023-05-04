import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsJournalBookmark } from 'react-icons/bs'
import { BsHeartPulse } from 'react-icons/bs'
import { BsHeadphones } from 'react-icons/bs'

//Hook
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  console.log(activeNav)
  return (
    <nav>
      {/* this have a bug in this line 20 */}
      <a  href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>    
      <a  href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a  href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BsJournalBookmark /> </a>
      <a  href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <BsHeartPulse /> </a>
      <a  href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BsHeadphones /> </a>
    </nav>
    
  )
}

export default Nav