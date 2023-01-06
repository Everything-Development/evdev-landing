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

function fillArray(in_arr, len) {
    var arr = [];
    in_arr = shuffle(in_arr)
    for (var i = 0; i < len; i++) {
        for (let item in in_arr){
            arr.push(in_arr[item]);
        }
    }
    return arr;
  }

const Clients = (props) => {
    const [clientsArr, setClientsArr] = React.useState(fillArray(clients_arr1, 5))
    const [clientsArr2, setClientsArr2] = React.useState(fillArray(clients_arr2, 5))
    const [clientsArr3, setClientsArr3] = React.useState(fillArray(clients_arr1, 5))
    const [clientsArr4, setClientsArr4] = React.useState(fillArray(clients_arr2, 5))
    
    const [offset, setOffset] = React.useState(0)
    const [offset2, setOffset2] = React.useState(-6000)
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 768;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    
    React.useEffect(() => {
        const interval = setInterval(() => {
                setOffset((offset) => offset >= -5500 ? offset - 0.5 : 0)
          }, 20);
        
          return () => {
              clearInterval(interval);
          }
    }, [])

    React.useEffect(() => {
        const interval = setInterval(() => {
            setOffset2((offset2) => offset2 <= -500 ? offset2 + 0.5 : -6000)
          }, 20);
        
          return () => clearInterval(interval);
    }, [])

      
  return (
    <div className='client-section' ref={props.refSection}>
        {!isMobile ?
            <>
                <div className='logos-section desktopV' style={{transform: `rotate(-15deg) translateX(${offset}px)`}}>
                    {clientsArr.map((item) => 
                        <div className='logos-section-elem'>
                            <img src={item.image}/>
                        </div>
                    )}     
                </div>
                <div className='logos-section desktopV' style={{transform: `rotate(-15deg) translateX(${offset2}px)`}}>
                    {clientsArr2.map((item) => 
                        <div className='logos-section-elem'>
                            <img src={item.image}/>
                        </div>
                    )}     
                </div>
            </>
        :
            <>
            <div className='logos-section mobileV' style={{transform: `rotate(-15deg) translateX(${offset}px)`}}>
                {clientsArr.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image}/>
                    </div>
                )}  
            </div>
            <div className='logos-section mobileV' style={{transform: `rotate(-15deg) translateX(${offset2}px)`}}>
                {clientsArr2.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image}/>
                    </div>
                )}  
            </div>
            </>
        }
        {/* <div className='logos-section mobileV'>
            <Slider {...createSettings(1.2,1, true)}>
                {clients_arr2.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image} />
                    </div>
                )}
                
            </Slider>
        </div> */}
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
        {!isMobile ?
            <>
                <div className='logos-section desktopV' style={{transform: `rotate(-15deg) translateX(${offset}px)`}}>
                    {clientsArr3.map((item) => 
                        <div className='logos-section-elem'>
                            <img src={item.image}/>
                        </div>
                    )}     
                </div>
                <div className='logos-section desktopV top100' style={{transform: `rotate(-15deg) translateX(${offset2}px)`}}>
                    {clientsArr4.map((item) => 
                        <div className='logos-section-elem'>
                            <img src={item.image}/>
                        </div>
                    )}     
                </div> 
            </> 
        :
            <>
            <>
            <div className='logos-section mobileV' style={{transform: `rotate(-15deg) translateX(${offset}px)`}}>
                {clientsArr3.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image}/>
                    </div>
                )}  
            </div>
            <div className='logos-section mobileV' style={{transform: `rotate(-15deg) translateX(${offset2}px)`}}>
                {clientsArr4.map((item) => 
                    <div className='logos-section-elem'>
                        <img src={item.image}/>
                    </div>
                )}  
            </div>
            </>
            </>
        }
    </div>
  )
}

export default Clients