import React from 'react'
import "../styles/ProjectDevelopment.scss";
import spiral from '../assets/spiral.png';
import cube from '../assets/cube-2.png';
import pyramid from '../assets/pyramid.png';
import octagon from '../assets/octagon-2.png';


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
        <div className='project-development-title'>
        <h4>
          What is<br/><txt className='evdev-gradient'>the way</txt> of<br/> clients` project development?
        </h4>
        </div>
        {project_stages_list.map((item, key) =>
        <div>
          { (item.id % 2 == 1) ? 
            <div className='project-development-stage' key={key}>
              <div className='project-development-image'>
                  <img src={item.image}/>
              </div>
              <div className='project-stage-title'>
                <h4>0{item.id}</h4>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
            :
            <div className='project-development-stage-left' key={key}>
              <div className='project-stage-title-left'>
                <h4>0{item.id}</h4>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
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