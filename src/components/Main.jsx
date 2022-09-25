import React, { useRef, useState } from 'react'
import '../styles/Home.scss'
import pyramid from '../assets/pyramid.svg'
import long_rect from '../assets/long_rect.mp4'

import {motion} from 'framer-motion';

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
                <div className="animation-container custom-width">
                    <p className="animated-text-04sdelay">with</p>
                </div>
                <span className='evdev-title'>
                  EVDEV
                </span>
              </div>
            </div>
            <p>and watch sculpting software that<br/>leaks productivity at the seams.</p>
          </div>
          <motion.div
              initial={{ opacity: 0, scale: 3, x: 400}}
              whileInView={{ opacity: 1, scale: 1, x: 0}}
              viewport={{ once: true }}
              className='main-section-visual-elem'
              transition={{
                  type: "spring",
                  duration: 2,
                  delay: 0.2,
                  
              }}>
          <video className='visual-elem-video' loop="true" autoplay="true" muted>
            <source src={long_rect} type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
          </motion.div>
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