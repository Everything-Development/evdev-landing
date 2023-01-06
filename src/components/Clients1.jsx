import React, {useEffect, useState} from 'react'
import '../styles/Clients.scss'

import client_svg from '../assets/client_logo.svg'

// import all logos
import propm_logo from '../assets/logo/propm.svg'
import litium_logo from '../assets/logo/litium.svg'
import femm_logo from '../assets/logo/femm.png'
import oneeightplus_logo from '../assets/logo/180plus.svg'
import bm_logo from '../assets/logo/bm.svg'
import hippie_pigeons_logo from '../assets/logo/hippie_pigeons.png'
import ima_logo from '../assets/logo/ima.svg'
import independent_logo from '../assets/logo/independent_ua.png'
import loveka_logo from '../assets/logo/loveka.svg'
import lvbs_logo from '../assets/logo/lvbs.svg'
import mhp_logo from '../assets/logo/mhp.svg'
import min_osvity_logo from '../assets/logo/min_osvity.svg'
import osvita_logo from '../assets/logo/osvita.png'
import svoy_logo from '../assets/logo/svoy.svg'
import ufn_logo from '../assets/logo/ufn.png'





import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from 'framer-motion';

let clients_arr1 = [
    {
        'title': "PROPM",
        'image': propm_logo,
    },
    {
        'title': "normotim",
        'image': litium_logo,
    },
    {
        'title': "FEMMß",
        'image': femm_logo,
    },
    {
        'title': "180 Plus",
        'image': oneeightplus_logo,
    },
    {
        'title': "Bronia Mykolaiv",
        'image': bm_logo,
    },
    {
        'title': "Hippie Pigeons",
        'image': hippie_pigeons_logo,
    },
    {
        'title': "IMA",
        'image': ima_logo,
    },
]
let clients_arr2 = [
    {
        'title': "PROPM",
        'image': independent_logo,
    },
    {
        'title': "bootstap",
        'image': loveka_logo,
    },
    {
        'title': "bootstap",
        'image': lvbs_logo,
    },
    {
        'title': "bootstap",
        'image': min_osvity_logo,
    },
    {
        'title': "bootstap",
        'image': mhp_logo,
    },
    {
        'title': "bootstap",
        'image': osvita_logo,
    },
    {
        'title': "bootstap",
        'image': svoy_logo,
    },
    {
        'title': "bootstap",
        'image': ufn_logo,
    },
]


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const Clients = (props) => {

    const createSettings = (slidesToShow, slidesToScroll, rtl = false) => {
        return {
            cssEase: 'linear',
            arrows: false,
            dots: false,
            infinite: true,
            speed: 10000,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            autoplaySpeed: 1,
            autoplay: true,
            slidesPerRow: 1,
            centerMode: true,
            // className: 'slider-container-collection',
            pauseOnHover: false,
            draggable: false,
            swipe: false,
            rtl: rtl,
            variableWidth: true
        }
    }

      
  return (
    <div className='client-section' ref={props.refSection}>
        <div className='logos-section desktopV'>
            <Slider {...createSettings(4, 4)}>
                {clients_arr1.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image}/>
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section desktopV'>
            <Slider {...createSettings(4,4, true)}>
                {clients_arr2.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image}/>
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section mobileV'>
            <Slider {...createSettings(1.2,1)}>
                {clients_arr1.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image} />
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section mobileV'>
            <Slider {...createSettings(1.2,1, true)}>
                {clients_arr2.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image} />
                    </div>
                )}
                
            </Slider>
        </div>

        <h2 className='clients-section-title'>Clients trust us</h2>
        <motion.img 
            src={props.evdev_light} 
            className='clients-evdev-light'
            initial={{ opacity: 0, scale: 1, x: 300, width: 1000}}
            whileInView={{ opacity: 1, scale: 1, x: 0, width: 520}}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                duration: 1.5,
                delay: 0.2,
                }}
            />

        <div className='logos-section top100 desktopV'>
            <Slider {...createSettings(4, 4)}>
                {clients_arr1.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image} />
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section top100 desktopV'>
            <Slider {...createSettings(4,4, true)}>
                {clients_arr2.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image} />
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section mobileV top-mobile'>
            <Slider {...createSettings(1.2,1)}>
                {clients_arr1.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image} />
                    </div>
                )}
                
            </Slider>
        </div>
        <div className='logos-section top50 mobileV'>
            <Slider {...createSettings(1.2,1, true)}>
                {clients_arr2.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image} />
                    </div>
                )}
                
            </Slider>
        </div>
    </div>
  )
}

export default Clients