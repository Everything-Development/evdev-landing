import React from 'react'
import '../styles/EvdevMenu.scss';
import {useEffect, useState} from 'react';


const EvdevMenu = (props) => {
    let menu_elems  = [
        {
            title: "HOME PAGE",
            anchorLink: props.scrollToHome
        },
        {
            title: "QUICK OVERVIEW",
            anchorLink: props.scrollToProjects
        },
        {
            title: "SERVICES",
            anchorLink: props.scrollToProjects
        },
        {
            title: "PORTFOLIO",
            anchorLink: props.scrollToProjects
        },
        {
            title: "CLIENTS",
            anchorLink: props.scrollToClients
        },
        {
            title: "PROCESS",
            anchorLink: props.scrollToProcess
        },
        {
            title: "REVIEWS",
            anchorLink: props.scrollToReviews
        },
    ]
    const [menuClass, setMenuClass] = useState('menu-closed');


    useEffect(() => {
        if (props.isOpened){
            setMenuClass("menu-opened")
        } else {
            setMenuClass("menu-closed")
        }
    }, [props.isOpened]);

  return (
      <>
            <div className={`evdev-menu ${menuClass}`}>
            <div className='evdev-menu-anchors'>
                {menu_elems.map((item, key) => 
                    <div className='evdev-menu-elem'>
                        <h3 onClick={item.anchorLink}>{item.title}</h3>
                        <div className='line'/>
                    </div>            
                )}

                </div>
            </div>
    </>

  )
}

export default EvdevMenu