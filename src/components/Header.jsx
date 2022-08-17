import React from 'react'
import "../styles/Header.scss"
import logo from '../assets/logo.svg'
import cooperation_icon from '../assets/cooperation_icon.svg'

const Header = () => {
  return (
    <div>
      <header>
        <span className='header-menu'></span>
        <img src={logo} className="logo" alt="logo" />
        <div className='header-start-cooperation'>
          <img src={cooperation_icon} alt="cooperation_icon"/>
          <p>START COOPERATION</p>
        </div>
      </header>
    </div>
  )
}

export default Header