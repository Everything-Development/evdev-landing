import React, { useRef, useState, useEffect } from 'react'
import Main from '../components/Main'
import PickIndustry from '../components/PickIndustry'
import WhatOthersTalk from '../components/WhatOthersTalk'
import HereWeAreTo from '../components/HereWeAreTo';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import WhatCustomerGet from '../components/WhatCustomerGet';
import Projects from '../components/Projects'
import ProjectDevelopment from '../components/ProjectDevelopment'
import Support from '../components/Support'

import octagon from '../assets/octagon.mp4'
import pyramid from '../assets/pyramid.mp4'
import spiral from '../assets/spiral_1.mp4'
import long_rect from '../assets/long_rect.mp4'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Home = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const [scrollY, setScrollY] = useState(0);

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
      
      <Main />
      {/* <PickIndustry /> */}
      <Clients scroll={scrollY}/>
      <WhatOthersTalk scroll={scrollY}/>
      <HereWeAreTo scroll={scrollY}/>
      <Projects scroll={scrollY} />
      <WhatCustomerGet scroll={scrollY}/>
      <ProjectDevelopment scroll={scrollY} windowDimensions={windowDimensions} octagon={octagon} pyramid={pyramid} long_rect={long_rect} spiral={spiral}/>
      <Support scroll={scrollY} long_rect={long_rect}/>
      <Footer />
    </>
  )
}

export default Home