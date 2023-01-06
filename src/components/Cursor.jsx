import React from 'react'
import cursor from '../assets/pointer/pointer.png'
import '../styles/Cursor.scss'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const Cursor = (props) => {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  return (
    <>
        {
      windowDimensions.width <= 600 ?
      <></>
      :
      <div style={{zIndex: '100000', pointerEvents: 'none', backgroundPosition: 'left', height: '150px', width: '150px', scale: '0.5', backgroundImage: `url(${cursor})`, position: 'fixed', marginTop: `${props.cursorY-60}px`, marginLeft: `${props.cursorX-60}px`}}>
      {/* <img src={cursor} style={{height: '100px', marginLeft: '-45px', marginTop: '-45px', zIndex: "10000"}}/> */}
      
      </div>
    }
    </>

  )
}

export default Cursor