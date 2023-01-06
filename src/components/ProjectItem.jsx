import React from 'react'
import {useState, useEffect} from 'react';
import open_link from '../assets/arrow_n.png'


const ProjectItem = (props) => {
    let [isOpened, setIsOpened] = useState(false)
    let [funcHeight, setFuncHeight] = useState(0)
    const toogleMenu = () => {
        setIsOpened(!isOpened)
        if (funcHeight == 0){
            setFuncHeight(props.project.main_functionality.length * 50)
        } else {
            setFuncHeight(0)
        }
    
    }
  return (
      <>
    <div>
        { (props.project.id % 2 != 0 && props.windowDimensions.width > 500) ?
        <div className='project-element' style={{overflowY: "hidden !important"}} key={props.key}>
            <div className='description-part'>
                <div className='project-name'>
                    <p>PROJECT NAME</p>
                    <h4>{props.project.title}</h4>
                </div>
                <div className='project-type'>
                    <p>DEVELOPMENT PRODUCT</p>
                    <h4>{props.project.type}</h4>
                </div>
                <div className='project-functionality' onClick={toogleMenu}>
                    <h4>Main functnality</h4>
                    { !isOpened ?
                            <img src={props.show_more} style={{transition: '0.3s'}}/>
                            :
                            <img src={props.show_more} style={{transition: '0.3s', rotate: "180deg"}}/>
                    }
                </div>
                <div className='project-functionality-list' style={{height: `${funcHeight}px`}}>
                    {props.project.main_functionality.map((item, key) => 
                        <p>{item}</p>
                    )}
                </div>
               
            </div>
            <img className='project-image'  src={props.project.image}/>
        </div>
    :
    <div className='project-element' key={props.key}>
            { (props.project.id % 2 == 0 && props.windowDimensions.width < 500) ?
                <img className='project-image'  src={props.project.image}/>
                :
                <img className='project-image-left'  src={props.project.image}/>
            }
        <div className='description-part'>
            <div className='project-name'>
                <p>PROJECT NAME</p>
                <h4>{props.project.title}</h4>
            </div>
            <div className='project-type'>
                <p>DEVELOPMENT PRODUCT</p>
                <h4>{props.project.type}</h4>
            </div>
            <div className='project-functionality' onClick={toogleMenu}>
                <h4>Main functnality</h4>
                { !isOpened ?
                        <img src={props.show_more} style={{transition: '0.3s'}}/>
                        :
                        <img src={props.show_more} style={{transition: '0.3s', rotate: "180deg"}}/>
                }
            </div>
                <div className='project-functionality-list' style={{height: `${funcHeight}px`}}>
                    {props.project.main_functionality.map((item, key) => 
                        <p>{item}</p>
                    )}
                </div>
                
        </div>
        
    </div>
    }
    </div>
    <a 
    href={props.project.link} 
    className='open-link-to-project'
    target="_blank"
    >
     <img src={open_link} /> 
     <p>OPEN LINK</p>
</a>
</>
  )
}

export default ProjectItem