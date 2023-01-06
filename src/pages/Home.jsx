import React, { useRef, useState, useEffect } from 'react'
import Main from '../components/Main'
import PickIndustry from '../components/PickIndustry'
import WhatOthersTalk from '../components/WhatOthersTalk'
import HereWeAreTo from '../components/HereWeAreTo';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import WhatCustomerGet from '../components/WhatCustomerGet';
import Projects from '../components/Projects';
import ProjectDevelopment from '../components/ProjectDevelopment';
import Support from '../components/Support';

import octagon from '../assets/octagon_black.mp4';
import pyramid from '../assets/pyramid_black.mp4';
import spiral from '../assets/spiral_black.mp4';
import long_rect from '../assets/rech_black.mp4';
import evdev_light from '../assets/tg_image_3150386150.jpeg';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}




const Home = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [opacityLoader, setOpacityLoader] = useState(1)
  const [scrollY, setScrollY] = useState(0);
  
  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const loadingScreen = async () => {
    await sleep(2200)
    setOpacityLoader(0)
  }

    useEffect(() => {
      loadingScreen()
    }, [])
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
    {/* <div className='loadingScreen' 
      style={{
        height: '100vh', 
        width: '100vw', 
        backgroundColor: "black", 
        position: "fixed", 
        zIndex: "10000", 
        opacity: opacityLoader, 
        transition: '0.7s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none'
        }}>
      <h3 style={{color: "white", fontFamily: "Gotham"}}>PLEASE WAIT WHILE WEBSITE IS LOADING</h3>
    </div> */}
      <Main 
        long_rect={long_rect}
        scrollToProjects={props.executeScrollToProjects}
        scrollToClients={props.executeScrollToClients}
        scrollToReviews={props.executeScrollToReviews}
        refSection={props.homeSectionRef}
        />
      <PickIndustry 
        evdev_light={evdev_light} 
        pyramid={pyramid} 
        octagon={octagon} 


        />
      <Clients 
        evdev_light={evdev_light} 
        scroll={scrollY}
        refSection={props.clientsSectionRef}
        />
      <WhatOthersTalk 
        scroll={scrollY} 
        windowDimensions={windowDimensions} 
        refSection={props.reviewsSectionRef}
        octagon={octagon} 
        pyramid={pyramid} 
        long_rect={long_rect} 
        spiral={spiral}
        />
      <HereWeAreTo 
        scroll={scrollY}/>
      <Projects 
        refSection={props.projectsSectionRef} 
        scroll={scrollY} 
        evdev_light={evdev_light}
        />
      <WhatCustomerGet 
        scroll={scrollY} 
        evdev_light={evdev_light}
        />
      <ProjectDevelopment 
        scroll={scrollY} 
        evdev_light={evdev_light} 
        windowDimensions={windowDimensions} 
        octagon={octagon} 
        pyramid={pyramid} 
        long_rect={long_rect} 
        spiral={spiral}
        refSection={props.processSectionRef}
        />
      <Support 
        scroll={scrollY} 
        long_rect={long_rect}
        />
      <Footer 
        scrollToProjects={props.executeScrollToProjects}
        scrollToClients={props.executeScrollToClients}
        scrollToReviews={props.executeScrollToReviews}
        footerSectionRef={props.footerSectionRef}
        />
    </>
  )
}

export default Home