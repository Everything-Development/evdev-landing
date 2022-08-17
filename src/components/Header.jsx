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

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };
  return (
    <div>
      <header>
        <span className='header-menu'></span>
        <img src={logo} className="logo" alt="logo" style={{transform: `translateX(${globalCoords.x*0.01}px) translateY(${globalCoords.y*0.01}px) skew(${(globalCoords.x - innerWidth / 2 )*0.01}deg)`}}/>
        <div className='header-start-cooperation'>
          <img src={cooperation_icon} alt="cooperation_icon"/>
          <p>START COOPERATION</p>
          {/* {innerWidth/2} */}
        </div>
      </header>
    </div>
  )
}

export default Header