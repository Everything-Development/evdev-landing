import React from 'react'
import "../styles/Projects.scss";
import project_ex from '../assets/img-preview.png'
import project_ex2 from '../assets/img-preview-2.png'
import show_more from '../assets/show_more.svg';

let projects_list = [
    {
        "id": 1,
        "title": "Nehorikh bot",
        "type": "Bot",
        "image": project_ex,
        "main_functionality": [
            "elem1",
            "elem2",
            "elem3",
            "elem4",
            "elem5",
        ]
    },
    {
        "id": 2,
        "title": "Nehorikh crm",
        "type": "CRM",
        "image": project_ex2,
        "main_functionality": [
            "elem1",
            "elem2",
            "elem3",
            "elem4",
            "elem5",
        ]
    }
]


const Projects = () => {
  return (
    <section className='projects-section'>
        <div className='projects-title-container'><h3>Projects we are <txt className='evdev-gradient'>proud of</txt></h3></div>
        {projects_list.map((project, key) =>
        <div>
            { project.id % 2 != 0 ?
                <div className='project-element' key={key}>
                    <div className='description-part'>
                        <div className='project-name'>
                            <p>PROJECT NAME</p>
                            <h4>{project.title}</h4>
                        </div>
                        <div className='project-type'>
                            <p>PRODUCT TYPE</p>
                            <h4>{project.type}</h4>
                        </div>
                        <div className='project-functionality'>
                            <h4>Main functnality</h4>
                            <img src={show_more} />
                        </div>
                    </div>
                    <img className='project-image'  src={project.image}/>
                </div>
            :
            <div className='project-element' key={key}>
                <img className='project-image-left'  src={project.image}/>
                <div className='description-part'>
                    <div className='project-name'>
                        <p>PROJECT NAME</p>
                        <h4>{project.title}</h4>
                    </div>
                    <div className='project-type'>
                        <p>PRODUCT TYPE</p>
                        <h4>{project.type}</h4>
                    </div>
                    <div className='project-functionality'>
                        <h4>Main functnality</h4>
                        <img src={show_more} />
                    </div>
                </div>
            </div>
            }
            </div>
            
        )}
    </section>
  )
}

export default Projects