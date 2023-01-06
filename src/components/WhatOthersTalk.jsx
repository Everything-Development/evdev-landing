import React, {useState} from 'react'
import '../styles/WhatOthersTalk.scss';
import review_example from '../assets/review.svg'
import { useEffect } from 'react';

import psychologist_video from '../assets/psychologist_natalia.mp4';
import ukrainian_fredom_vid from '../assets/ukrainian_freedom_vid.mp4';
import independent_ua from '../assets/independent_ua.mp4';
import oneeightplus_video from '../assets/oneeightplus_video.mp4';

import facebook_icon from '../assets/facebook_icon.svg';
import linkedin_icon from '../assets/linkedin_icon.svg';
import instagram_icon from '../assets/instagram_icon.svg';

import octagon from '../assets/octagon.png'

import Iframe from 'react-iframe'

import arrow from '../assets/arrow-87-256.png'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


let customers = [
    {
        name: "Joe Lindsly",
        position: "Founder",
        video: "https://www.youtube.com/embed/e6-NjY4e54M",
        instagram: "",
        linkedin: "",
        facebook: "",
        url: "https://www.ukrainianfreedomnews.com"
    },
    {
        name: "Natalia",
        position: "Psychologists",
        video: "https://www.youtube.com/embed/FcrDmGsvVQE",
        instagram: "",
        linkedin: "",
        facebook: "",
        url: "https://koretska-natalia.com/"

    },
    {
        name: "Khrystyna Ivanytska",
        position: "Founder",
        video: "https://www.youtube.com/embed/U0cWv_e1cj0",
        instagram: "",
        linkedin: "",
        facebook: "",
        url: "https://independentua.com/"
    },
    {
        name: "Tetiana Buryanova",
        position: "Founder",
        video: "https://www.youtube.com/embed/S-wxp05SjyA",
        instagram: "",
        linkedin: "",
        facebook: "",
        url: "https://180plus.od.ua/"
    },
    {
        name: "Trevor Dane",
        position: "Founder",
        video: "https://www.youtube.com/embed/iOKDIdxGYdQ",
        instagram: "",
        linkedin: "",
        facebook: "",
        url: "https://www.hugsfromfriends.org/"
    }
]


const WhatOthersTalk = (props) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [fontSizeTitle, setFontSizeTitle] = useState(400)
    const [octagonSize, setOctagonSize] = useState(0)
    const [pyramidSize, setPyramidSize] = useState(0)
    const [marginArr, setMarginArr] = useState({"octagon": 0})
    useEffect(() => {   
        if (windowDimensions.width >= 500) {
            setOctagonSize(props.scroll * 0.09)
            setPyramidSize(props.scroll * 0.1)
            if (props.scroll <= 5500){
                setMarginArr({
                    "octagonTop": -200 + props.scroll * 0.4,
                    "octagonLeft": -200 + props.scroll * 0.1,
                    "long_rectTop": props.scroll * 0.4,
                })
            } else {
                setMarginArr({
                    "octagonTop": -200 + props.scroll * 0.4,
                    "octagonLeft": -200 + 5500 * 0.1,
                    "long_rectTop": props.scroll * 0.4,
                })
            }
           
            if (fontSizeTitle >= 90 || (290 - props.scroll *  0.05 >= 90)){
                setFontSizeTitle(290 - props.scroll *  0.05)
            }
        } else {
            if (fontSizeTitle >= 45 || (170 - props.scroll *  0.05 >= 45)){
                setFontSizeTitle(170 - props.scroll *  0.05)
            }
        }
    }, [props.scroll])

  return (
    <div className='what-other-talk-section' ref={props.refSection}>
        {
            windowDimensions.width >= 500 && 
            <>
                <video className='background-element' style={{height: `${octagonSize}px`}} loop="true" autoplay="true" muted>
                    <source src={props.octagon} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </>
        }
        
        <div className='sticky-content'>
            <h3 className='title-text'>
                What
            </h3>
            <h3 
                style={{
                    backgroundImage: `linear-gradient(${props.scroll*0.3}deg, #E9C600 -8.31%, #FF5001 115.37%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    color: "transparent",
                    fontSize: `${fontSizeTitle}px`,
                    transition: '0.1s'
                }} 
                className='title-text-gradient'
                >
                others<br/>think
            </h3>
            <h3 className='title-text'>
                about us
            </h3>
        </div>

        <div className='reviews-items'>
        {customers.map((item, key) => 
            <div className='review-item' key={key}>
                {
                    windowDimensions.width <= 700 ? 

                    <Iframe url={item.video}
                    width="100%"
                    height="260px"
                    id=""
                    className="iframe-styles"
                    display="block"
                    position="relative"
                    />
                    :

                    <Iframe url={item.video}
                        width="350px"
                        height="370px"
                        id=""
                        className="iframe-styles"
                        display="block"
                        position="relative"
                        />
                }
                
                <p className='review-spec'>{item.position}</p>
                <p className='review-name'>{item.name}</p>
                <hr/>
                <div className='review-social-media'>
                    <a 
                        href={item.url} 
                        align='center'
                        target="_blank"
                    >
                    OPEN PROJECT</a>
                </div>
            </div>
        )}
           
        </div>
    </div>
    
  )
}

export default WhatOthersTalk