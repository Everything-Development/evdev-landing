import React, {useEffect, useState} from 'react'
import "../styles/Header.scss"
import logo from '../assets/logo.svg'
import cooperation_icon from '../assets/cooperation_icon.svg'
import EvdevMenu from './EvdevMenu';
import EvdevContactElem from './EvdevContactElem';


const Header = (props) => {
  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  const {innerWidth, innerHeight} = window;
  const [headerButton, setHeaderButton] = useState('header-menu')
  const [isOpenedContact, setIsOpenContact] = useState(false);

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
      
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);


  const toogleOpened = () => {
    // alert('123123123123')
    if (props.isOpened == false){
      setHeaderButton('header-menu-x')
    } else {
      setHeaderButton('header-menu')
    }
    props.setIsOpened(!props.isOpened);

  }
  const toogleOpenedContact = () => {
    setIsOpenContact(!isOpenedContact);
  }

  useEffect(() => {
    if (props.isOpened == false){
      setHeaderButton('header-menu')
    } else {
      setHeaderButton('header-menu-x')
    }
  }, [props.isOpened])
  
  return (
    <div>
      <EvdevMenu 
        isOpened={props.isOpened}
        setIsOpened={props.setIsOpened}
        scrollToProjects={props.executeScrollToProjects}
        scrollToClients={props.executeScrollToProjects}
        scrollToReviews={props.executeScrollToProjects}
        scrollToProcess={props.executeScrollToProcess}
        scrollToHome={props.executeScrollToHome}

        />
      <EvdevContactElem setIsOpened={setIsOpenContact} isOpened={isOpenedContact}/>
      <div className='header-menu-button' onClick={toogleOpened}>
        <span className={`${headerButton}`}></span>
      </div> 
      <header>
        <img src={logo} className="logo mobileV" alt="logo" />
        <img src={logo} className="logo desktopV" alt="logo" style={{transform: `translateX(${globalCoords.x*0.01}px) translateY(${globalCoords.y*0.01}px) skew(${(globalCoords.x - innerWidth / 2 )*0.01}deg)`}}/>
      </header>
      <div className='header-start-cooperation' onClick={toogleOpenedContact}>
          <img src={cooperation_icon} alt="cooperation_icon"/>
          <p>START COOPERATION</p>
        </div>
      <div className="fixed-bottom-controls">
        <p className='contacts-title' onClick={props.executeScrollToFooter}>CONTACTS</p>
        <div className='language-toggle'>
          <p className="language-toggle-eng"></p>
          <p className="language-toggle-ua"></p>
        </div>
      </div>
    </div>
  )
}

export default Header