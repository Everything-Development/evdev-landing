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


const Home = () => {
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
      <PickIndustry />
      <Clients scroll={scrollY}/>
      <WhatOthersTalk scroll={scrollY}/>
      <HereWeAreTo scroll={scrollY}/>
      <Projects scroll={scrollY} />
      <WhatCustomerGet scroll={scrollY}/>
      <ProjectDevelopment scroll={scrollY}/>
      <Footer />
    </>
  )
}

export default Home