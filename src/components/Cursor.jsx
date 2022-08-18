import React from 'react'
import cursor1 from '../assets/pointer/part1.svg'
import cursor2 from '../assets/pointer/part2.svg'
import cursor3 from '../assets/pointer/part3.svg'
import full_cursor from '../assets/pointer/full.svg'
import '../styles/Cursor.scss'

const Cursor = (props) => {
  console.log(props)
  return (
    <div className='cursor-elem' style={{position: 'fixed', zIndex: "1000", marginTop: `${props.cursorY}px`, marginLeft: `${props.cursorX}px`}}>
      
    </div>
  )
}

export default Cursor