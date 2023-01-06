import React from 'react'
import "../styles/Projects.scss";

import imgima from '../assets/img-preview-3.png';
import imgnehorikhbot from '../assets/img-preview.png';
import imghippie from '../assets/img-preview-4.png';
import nasharyaba from '../assets/img-ryaba.png';
import independent_ua from '../assets/independent-img.png';
import oneeightplus from '../assets/180plus-img.png'
import poradnya from '../assets/poradnya-img.png';
import sequoia from '../assets/img-sequoia.png';
import show_more from '../assets/show_more.svg';
import { motion } from "framer-motion";
import ProjectItem from './ProjectItem';

let projects_list = [
    {
        "id": 1,
        "title": 'MHP, "Nasha Ryaba"',
        "type": "Website",
        "image": nasharyaba,
        "link": "https://fortuna.ryaba.ua",
        "main_functionality": [
            "More than 35 000 codes registered",
            "Many appearing animations for prize",
            "Developed using React and Django",
            "Used Google Looker Studio for analytics",
            "There were an ability to register codes in Viber and Telegram bots",
        ]
    },
    {
        "id": 2,
        "title": "Independent UA",
        "type": "Landing",
        "image": independent_ua,
        "link": "http://independentua.com",
        "main_functionality": [
            "Developed using WordPress",
            "Ability to add news and update content through Admin Panel",
            "Donations by PayPal, Stripe's patment methods",
            "Desktop, Tablet and Mobile adapted design",
            "Support of Polish and English languages",
        ]
    },
    {
        "id": 3,
        "title": "IMA",
        "type": "Landing",
        "image": imgima,
        "link": "https://www.imavirtuosos.com",
        "main_functionality": [
            "Moving animation of the elements on scroll",
            "Pixel Perfect adapataion of the elements",
            "Form for collecting applications",
            "Saving apllication to the Google Sheets",
        ]
    },
    {
        "id": 4,
        "title": "Hippie Pigeons",
        "type": "Landing",
        "image": imghippie,
        "link": "https://hippiepigeons.com",
        "main_functionality": [
            "Appearing animation of the elements on scroll",
            "Mobile and Desktop versions",
            "Endless autoplayed slideshows",
            "Unique and high level design",
        ]
    },
    {
        "id": 5,
        "title": "Sequoia Harness",
        "type": "Shopify website",
        "image": sequoia,
        "link": "https://sequoiaharness.com",
        "main_functionality": [
            "Website developed using Shopify",
            "Implemented lots of sliders",
            "Connected Etsy reviews and feedback for each product",
            "Mobile, Tablet and desktop versions avialable",
        ]
    },
    {
        "id": 6,
        "title": "180+ ZNO Center",
        "type": "Wordpress website",
        "image": oneeightplus,
        "link": "http://180plus.od.ua",
        "main_functionality": [
            "Developed on WordPress",
            "Ability to edit almost all content through admin panel",
            "Mobile and Desktop adaptation",
            "Ability to leave an apllication for call back",
            "SEO optimized content and pages",

        ]
    },
    {
        "id": 7,
        "title": "Nehorikh bot",
        "type": "Telegram bot",
        "image": imgnehorikhbot,
        "link": "https://t.me/nehorikh_bot",
        "main_functionality": [
            "Ability to make an order and pay for it in bot",
            "Useful way to preview images of the order",
            "Admin panel with an ability to change order statuses",
            "Notification system",
            "Referal program for inviting more people",
        ]
    },
    {
        "id": 8,
        "title": "Poradnya",
        "type": "Landing platform",
        "image": poradnya,
        "link": "https://poradnya.org.ua",
        "main_functionality": [
            "Easy to understand admin panel with ability to add new centers, news",
            "Animated and adapted website for Desktop and Mobile",
            "Catching and thematic design",
            "Website created using React and Django Rest Framework",
        ]
    },
]

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Projects = (props) => {
    // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


    const [showMore, setShowMore] = React.useState(false);

    const openMore = () => {
        setShowMore(!showMore)
    }

  return (
    <section className='projects-section' ref={props.refSection}>
        
        <motion.div
            initial={{ opacity: 0, scale: 1.2, x: -200}}
            whileInView={{ opacity: 1, scale: 1, x: 0}}
            viewport={{ once: true }}
            className='projects-title-container'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                
            }}>
                <h3>Projects we are { getWindowDimensions() < 500 && <br/>}
                    <motion.span
                    initial={{ opacity: 0, scale: 2, x: -200}}
                    whileInView={{ opacity: 1, scale: 1, x: 0}}
                    viewport={{ once: true }}
                    className='evdev-gradient'
                    transition={{
                        type: "spring",
                        duration: 2,
                        delay: 0.2,
                        
                    }}>
                        proud of
                    </motion.span>
                </h3>
                
            </motion.div>
            <div style={{marginTop: "-70px", zIndex: 0,}}>
            <motion.img 
            src={props.evdev_light} 
            className='projects-evdev-light'
            initial={{ opacity: 0, scale: 2, x: 700, width: 0}}
            whileInView={{ opacity: 1, scale: 1, x: 310, width: 720}}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                duration: 1.5,
                delay: 0.8,
                }}
            />
            </div>
            
            
        {
            (showMore === false) ?
                <>
                    { projects_list.slice(0, 3).map((project, key) =>
                        <div style={{overflowY: "hidden !important"}}>
                            <ProjectItem windowDimensions={getWindowDimensions()} project={project} show_more={show_more} key={key}/>    
                        </div>  
                    )}
                </>
            :
                <>
                    { projects_list.map((project, key) =>
                        <div style={{overflowY: "hidden !important"}}>
                            <ProjectItem windowDimensions={getWindowDimensions()} project={project} show_more={show_more} key={key}/>    
                        </div>  
                    )}
                </>
        }
        <div className='show-more-button' onClick={openMore}>
            { showMore ?
                <p>SHOW LESS PROJECTS</p>
                :
                <p>SHOW MORE PROJECTS</p>
            }

        </div>
    </section>
  )
}

export default Projects