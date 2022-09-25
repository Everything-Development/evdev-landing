import React from 'react'
import "../styles/ProjectDevelopment.scss";
import { motion } from 'framer-motion';





const ProjectDevelopment = (props) => {
  let project_stages_list = [
    {
      "id": 1,
      "image": props.spiral,
      "title": "BRIEF",
      "subtitle": ""
    },
    {
      "id": 2,
      "image": props.long_rect,
      "title": "MEETING",
      "subtitle": ""
    },
    {
      "id": 3,
      "image": props.octagon,
      "title": "ANALYSIS",
      "subtitle": "the proposal of the PRD (Product Requirements Document), and commercial proposal"
    },
    {
      "id": 4,
      "image": props.pyramid,
      "title": "DEVELOPMENT",
      "subtitle": "in parts with planned checkups"
    },
    {
      "id": 5,
      "image": props.long_rect,
      "title": "SUPPORT",
      "subtitle": "for the next 3 months from the project completion date"
    },
  ]
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
              the way{props.windowDimensions.width < 500 && <br/>}
            </motion.span>

          of{props.windowDimensions.width > 500 && <br/>} clients` project develo{props.windowDimensions.width < 500 && <br/>}pment?
        </h4>
        </motion.div>
        { project_stages_list.map((item, key) =>
        <div>
          { (item.id % 2 == 1) ? 
            <div className='project-development-stage' key={key}>
              <motion.div
                initial={{ opacity: 0, scale: 0}}
                whileInView={{ opacity: 1, scale: 1}}
                viewport={{ once: true }}
                className='project-development-image'
                transition={{
                    type: "spring",
                    duration: 2,
                    delay: 0.2,
                }}>
                  <video className='visual-elem-video' loop="true" autoplay="true" muted>
                    <source src={item.image} type="video/mp4"/>
                  Your browser does not support the video tag.
                  </video>
              </motion.div>
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
              <motion.div
            initial={{ opacity: 0, scale: 2}}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ once: true }}
            className='project-development-image-left'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                
            }}>
              <video className='visual-elem-video-left' loop="true" autoplay="true" muted>
                    <source src={item.image} type="video/mp4"/>
                  Your browser does not support the video tag.
                  </video>
              </motion.div>
                 
            </div>
          }
          </div>
         
        )}
        
    </section>
    )
}

export default ProjectDevelopment