import React, {useEffect, useState} from 'react'
import "../styles/Header.scss"
import logo from '../assets/logo.svg'
import cooperation_icon from '../assets/cooperation_icon.svg'

const Header = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  const {innerWidth, innerHeight} = window;
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

  const openMenu = (props) => {
    console.log(props)
  }
  
  return (
    <div>
      <header>
        <span className={`header-menu`} onClick={openMenu()}></span>
        <img src={logo} className="logo mobileV" alt="logo" />
        <img src={logo} className="logo desktopV" alt="logo" style={{transform: `translateX(${globalCoords.x*0.01}px) translateY(${globalCoords.y*0.01}px) skew(${(globalCoords.x - innerWidth / 2 )*0.01}deg)`}}/>
        <div className='header-start-cooperation'>
          <img src={cooperation_icon} alt="cooperation_icon"/>
          <p>START COOPERATION</p>
        </div>
      </header>
      <div className="fixed-bottom-controls">
        <p className='contacts-title'>CONTACTS</p>
        <div className='language-toggle'>
          <p className="language-toggle-eng">ENG</p>
          <p className="language-toggle-ua">UA</p>

        </div>

      </div>
    </div>
  )
}

export default Header