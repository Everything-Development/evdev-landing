import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/EvdevContactElem.scss';

const EvdevContactElem = (props) => {
    
    const [menuClass, setMenuClass] = useState('menu-closed');

    const closeContactMenu = () => {
        props.setIsOpened(!props.isOpened);
    }

    useEffect(() => {
        if (props.isOpened){
            setMenuClass("menu-contact-opened")
        } else {
            setMenuClass("menu-contact-closed")
        }
    }, [props.isOpened])
    
  return (
    <div className={`menu-contact ${menuClass}`}>
        <div style={{height: "50px", width: "50px", position: "absolute", marginLeft: "58px"}} onClick={closeContactMenu}>
            <span className='close-contact-cross'></span>
        </div>
        <div className='menu-contact-form'>
            <h4>START<br/>COOPERATION</h4>
            <p>Tell us more about your project and we will contact you soon</p>
            <input className='one-line-input' placeholder="name" type='text'/>
            <input className='one-line-input' placeholder="e-mail" type='text'/>
            <input className='one-line-input' placeholder="phone" type='text'/>
            <textarea className='many-lines-input' placeholder='describe your project'>
            </textarea>
            <button className='contact-button-send'>SEND</button>
        </div>
    </div>
  )
}

export default EvdevContactElem;