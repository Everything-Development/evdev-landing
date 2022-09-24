import React, {useState} from 'react'
import '../styles/WhatOthersTalk.scss';
import review_example from '../assets/review.svg'
import { useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const WhatOthersTalk = ({scroll}) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [fontSizeTitle, setFontSizeTitle] = useState(400)
    useEffect(() => {
        if (windowDimensions.width >= 500) {
            if (fontSizeTitle >= 90 || (290 - scroll *  0.05 >= 90)){
                setFontSizeTitle(290 - scroll *  0.05)
            }
        } else {
            if (fontSizeTitle >= 45 || (170 - scroll *  0.05 >= 45)){
                setFontSizeTitle(170 - scroll *  0.05)
            }
        }
    }, [scroll])
  return (
    <div className='what-other-talk-section'>
        <div className='sticky-content'>
            <h3 className='title-text'>
                What
            </h3>
            <h3 style={{
                    backgroundImage: `linear-gradient(${scroll*0.3}deg, #E9C600 -8.31%, #FF5001 115.37%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    color: "transparent",
                    fontSize: `${fontSizeTitle}px`,
                }} className='title-text-gradient'>
                others talk
            </h3>
            <h3 className='title-text'>
                about us
            </h3>
        </div>
        <div className='reviews-items'>
            <div className='review-item'>
                <img src={review_example}/>
                <p className='review-spec'>CEO of Google</p>
                <p className='review-name'>Alex</p>
                <hr/>
                <div className='review-social-media'>
                    <p>Social Media</p>
                    <div className='review-social-media-links'>

                    </div>
                </div>
            </div>
            <div className='review-item'>
                <img src={review_example}/>
                <p className='review-spec'>CEO of Google</p>
                <p className='review-name'>Alex</p>
                <hr/>
                <div className='review-social-media'>
                    <p>Social Media</p>
                    <div className='review-social-media-links'>

                    </div>
                </div>
            </div>
            <div className='review-item'>
                <img src={review_example}/>
                <p className='review-spec'>CEO of Google</p>
                <p className='review-name'>Michael Morgan</p>
                <hr/>
                <div className='review-social-media'>
                    <p>Social Media</p>
                    <div className='review-social-media-links'>

                    </div>
                </div>
            </div><div className='review-item'>
                <img src={review_example}/>
                <p className='review-spec'>CEO of Google</p>
                <p className='review-name'>Alex</p>
                <hr/>
                <div className='review-social-media'>
                    <p>Social Media</p>
                    <div className='review-social-media-links'>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default WhatOthersTalk