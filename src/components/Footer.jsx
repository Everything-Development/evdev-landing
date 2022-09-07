import React from 'react'
import '../styles/Footer.scss';

import facebook_icon from '../assets/facebook_icon.svg'
import instagram_icon from '../assets/instagram_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'

const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
            <div className='footer-part'>
                <div className='footer-half-part'>
                    <h2>Let us make you the lit dev business calling card</h2>
                </div>
                <div className='footer-half-part'>
                    <p>BLOG</p>
                    <p>PROJECTS</p>
                    <p>CLIENTS</p>
                    <p>REVIEWS</p>
                </div>
            </div>
            <div className='footer-part'>
                <div className='footer-half-part'>
                    <p className='footer-label'>EMAIL</p>
                    <h4>info@evdev.dev</h4>
                    <p className='footer-label'>PHONE</p>
                    <h4>+38 (066) 926-61-71</h4>
                </div>
                <div className='footer-half-part'>
                    <div className='social-meadia-footer'>
                        <img src={facebook_icon}/>
                        <p>evdev.devdev</p>
                    </div>
                    <div className='social-meadia-footer'>
                        <img src={instagram_icon}/>
                        <p>evdev.dev</p>
                    </div>
                    <div className='social-meadia-footer'>
                        <img src={linkedin_icon}/>
                        <p>evdev</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer