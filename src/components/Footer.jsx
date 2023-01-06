import React from 'react'
import '../styles/Footer.scss';

import facebook_icon from '../assets/facebook_icon.svg';
import instagram_icon from '../assets/instagram_icon.svg';
import linkedin_icon from '../assets/linkedin_icon.svg';
import { motion } from 'framer-motion';


const Footer = (props) => {

  return (
    <footer>
        <div className='footer-content' ref={props.footerSectionRef}>
            <div className='footer-part'>
                <div className='footer-half-part'>
                    <h2>Let us make you the lit dev business calling card</h2>
                </div>
                <div className='footer-half-part desktopV'>
                    <p onClick={props.scrollToProjects}>PROJECTS</p>
                    <p onClick={props.scrollToClients}>CLIENTS</p>
                    <p onClick={props.scrollToReviews}>REVIEWS</p>
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
                        <a 
                            href="https://www.facebook.com/evdev.devdev" 
                            target="_blank" 
                            style={{textDecoration: "none", color: "white"}}
                        >evdev.devdev</a>
                    </div>
                    <div className='social-meadia-footer'>
                        <img src={instagram_icon}/>
                        <a 
                            href="https://www.instagram.com/evdev.dev/" 
                            target="_blank" 
                            style={{textDecoration: "none", color: "white"}}
                        >evdev.dev</a>
                    </div>
                    <div className='social-meadia-footer'>
                        <img src={linkedin_icon}/>
                        <a 
                            href="https://www.linkedin.com/company/evdev/" 
                            target="_blank" 
                            style={{textDecoration: "none", color: "white"}}
                        >evdev</a>
                    </div>
                </div>
                <div className='footer-half-part mobileV position-center'>
                    <p>BLOG</p>
                    <p>PROJECTS</p>
                    <p>CLIENTS</p>
                    <p>REVIEWS</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer