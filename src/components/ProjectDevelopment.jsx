import React from 'react'
import "../styles/ProjectDevelopment.scss";
import spiral from '../assets/spiral.png';
import cube from '../assets/cube-2.png';
import pyramid from '../assets/pyramid.png';
import octagon from '../assets/octagon-2.png';
import { motion } from 'framer-motion';


let project_stages_list = [
  {
    "id": 1,
    "image": spiral,
    "title": "BRIEF",
    "subtitle": ""
  },
  {
    "id": 2,
    "image": cube,
    "title": "MEETING",
    "subtitle": ""
  },
  {
    "id": 3,
    "image": octagon,
    "title": "ANALYSIS",
    "subtitle": "the proposal of the PRD (Product Requirements Document), and commercial proposal"
  },
  {
    "id": 4,
    "image": pyramid,
    "title": "DEVELOPMENT",
    "subtitle": "in parts with planned checkups"
  },
  {
    "id": 5,
    "image": cube,
    "title": "SUPPORT",
    "subtitle": "for the next 3 months from the project completion date"
  },
]


const ProjectDevelopment = () => {
  return (
    <section className="project-development-section">
      <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -200}}
            whileInView={{ opacity: 1, scale: 1, x: 0}}
            viewport={{ once: true }}
            className='project-development-title'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                
            }}>
        <h4>
          What is<br/>
          
          <motion.span
            initial={{ opacity: 0, scale: 2}}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ once: true }}
            className='evdev-gradient'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.5,
                
            }}>
              the way
            </motion.span>

          of<br/> clients` project development?
        </h4>
        </motion.div>
        { project_stages_list.map((item, key) =>
        <div>
          { (item.id % 2 == 1) ? 
            <div className='project-development-stage' key={key}>
              <div className='project-development-image'>
                  <img src={item.image}/>
                  {/* <video width="320" height="240" autoplay muted>
                    <source src={item.image} type="video/mp4"/>
                  Your browser does not support the video tag.
                  </video> */}
              </div>
              <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100}}
            whileInView={{ opacity: 1, scale: 1, x: 0}}
            viewport={{ once: true }}
            className='project-stage-title'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                
            }}>
               <h4>0{item.id}</h4>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
            </motion.div>
            </div>
            :
            <div className='project-development-stage-left' key={key}>
              <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -100}}
            whileInView={{ opacity: 1, scale: 1, x: 0}}
            viewport={{ once: true }}
            className='project-stage-title-left'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                
            }}>
                <h4>0{item.id}</h4>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </motion.div>
              <div className='project-development-image-left'>
                  <img src={item.image}/>
              </div>
            </div>
          }
          </div>
         
        )}
        
    </section>
    )
}

export default ProjectDevelopment