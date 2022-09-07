import React, { useRef, useState } from 'react'
import '../styles/Home.scss'
import pyramid from '../assets/pyramid.svg'

const Main = () => {
  return (
    <div>
        <div className="main-section">
        <div className='main-section-text'>
          <div className='main-section-title'>
            
            <div className="animation-container">
                <p className="animated-text-nodelay">Breathe</p>
            </div>

            <div className="animation-container">
                <p className="animated-text-02sdelay">Apple dust</p>
            </div>
            <div className='evdev-text-animation'>
              <div className="animation-container" style={{width: '320px'}}>
                  <p className="animated-text-04sdelay">with</p>
              </div>
              <span className='evdev-title'>
                EVDEV
              </span>
            </div>
          </div>
          <p>and watch sculpting software that<br/>leaks productivity at the seams.</p>
        </div>
        <div className='main-section-visual-elem'>

        </div>
      </div>
      <div className='discover-projects'>
        <div className='projects-button-container'>
          <img className='pyramid-image' src={pyramid}/>
          <p className='discover-project-title'>DISCOVER PROJECTS</p>
        </div>
      </div>
    </div>
  )
}

export default Main