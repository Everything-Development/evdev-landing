import React from 'react'
import '../styles/PickIndustry.scss';
import TagComponent from '../components/TagComponent'

import { motion } from "framer-motion";
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


let first_tags_set = [
  {
    id: 1,
    title: "RETAIL"
  },
  {
    id: 2,
    title: "HEALTHCARE"
  },
  {
    id: 3,
    title: "MEDIA & ENTRENTAINMENT"
  },
  {
    id: 4,
    title: "GOVERNMENT"
  },
  {
    id: 5,
    title: "NEWS"
  },
  {
    id: 6,
    title: "EDUCATION"
  },
]

let second_step_tags = [
  {
    id: 1,
    title: "Wasting time doing work that can be automated"
  },
  {
    id: 2,
    title: "Small customer base"
  },
  {
    id: 3,
    title: "Outdated design"
  },
  {
    id: 4,
    title: "I sell offline, while my competitors sell online"
  },
  {
    id: 5,
    title: "I struggle to collect data & customer feedback"
  },
]

let third_step_tags = [
  {
    id: 1,
    title: "Short term engagement"
  },
  {
    id: 2,
    title: "Long term engagement"
  },
]


let step_title = [
  {
    id: 1,
  }
]


let projects_match = [
  {
    id: 1,
    title: "MHP, NASHA RYABA",
    logo: mhp_logo,
    url: 'https://fortuna.ryaba.ua',
    industry: [
      "RETAIL",
      "AGRICULTURE"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "I struggle to collect data & customer feedback",
      "Wasting time doing work that can be automated"
    ]
  },
  {
    id: 2,
    title: "UKRAINIAN FREEDOM NEWS",
    logo: ufn_logo,
    url: 'https://www.ukrainianfreedomnews.com',
    industry: [
      "MEDIA & ENTRENTAINMENT",
      "NEWS",
      "RETAIL"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "I struggle to collect data & customer feedback",
      "Wasting time doing work that can be automated"
    ]
  },
  {
    id: 3,
    title: "PROCONNECT",
    logo: propm_logo,
    url: '',
    industry: [
      "MEDIA & ENTRENTAINMENT",
      "RETAIL"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "I struggle to collect data & customer feedback",
      "Wasting time doing work that can be automated"
    ]
  },
  {
    id: 4,
    title: "FEMM HEALTH",
    logo: femm_logo,
    url: '',
    industry: [
      "HEALTHCARE",
      "RETAIL"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "I struggle to collect data & customer feedback",
      "Wasting time doing work that can be automated"
    ]
  },
  {
    id: 5,
    title: "HIPPIE PIGEONS",
    logo: hippie_pigeons_logo,
    url: 'https://hippiepigeons.com',
    industry: [
      "MEDIA & ENTRENTAINMENT",
      "RETAIL"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "I struggle to collect data & customer feedback",
      "Wasting time doing work that can be automated",
      "Outdated design"
    ]
  },
  {
    id: 6,
    title: "INDEPENDENT UA",
    logo: independent_logo,
    url: 'https://independentua.com',
    industry: [
      "MEDIA & ENTRENTAINMENT",
      "NEWS"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "I struggle to collect data & customer feedback",
      "Wasting time doing work that can be automated",
      "Outdated design"
    ]
  },
  {
    id: 7,
    title: "VSO BOT",
    logo: min_osvity_logo,
    url: 'https://t.me/vso_rozklad_bot',
    industry: [
      "MEDIA & ENTRENTAINMENT",
      "GOVERNMENT",
      "EDUCATION"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "Wasting time doing work that can be automated",
    ]
  },
  {
    id: 8,
    title: "BRONIA MYKOLAIV",
    logo: bm_logo,
    url: 'https://broniamykolaiv.com.ua',
    industry: [
      "RETAIL"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "Wasting time doing work that can be automated",
      "I sell offline, while my competitors sell online"
    ]
  },
  {
    id: 9,
    title: "LOVEKA",
    logo: loveka_logo,
    url: 'https://loveka.shop',
    industry: [
      "RETAIL"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "Wasting time doing work that can be automated",
      "I sell offline, while my competitors sell online"
    ]
  },
  {
    id: 11,
    title: "NORMOTIM",
    logo: litium_logo,
    url: 'https://normotim.com',
    industry: [
      "RETAIL"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "Wasting time doing work that can be automated",
      "I sell offline, while my competitors sell online"
    ]
  },
  {
    id: 12,
    title: "180 PLUS",
    logo: oneeightplus_logo,
    url: 'https://180plus.od.ua',
    industry: [
      "EDUCATION"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "Wasting time doing work that can be automated",
      "I sell offline, while my competitors sell online",
      "Outdated design"
    ]
  },
  {
    id: 13,
    title: "LVBS",
    logo: lvbs_logo,
    url: 'https://7wings.tech',
    industry: [
      "EDUCATION"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "Wasting time doing work that can be automated",
      "Outdated design"
    ]
  },
  {
    id: 14,
    title: "IMA",
    logo: ima_logo,
    url: 'https://www.imavirtuosos.com',
    industry: [
      "EDUCATION",
      "MEDIA & ENTRENTAINMENT"
    ],
    engagement: [
      "Long term engagement",
      "Short term engagement"
    ],
    problem: [
      "Small customer base",
      "Wasting time doing work that can be automated",
      "I struggle to collect data & customer feedback",
      "Outdated design"
    ]
  },
]

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const PickIndusty = (props) => {

  const [selectedIndustry, setSelectedIndustry] = React.useState("")
  const [selectedProblem, setSelectedProblem] = React.useState("")
  const [selectedEngagement, setSelectedEngagement] = React.useState("")
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  const [currentStep, setCurrentStep] = React.useState(1)
  const [currentTagList, setCurrentTagList] = React.useState(first_tags_set)
  const [pickedIndustry, setPickedIndustry] = React.useState();
  const [pickedProblem, setPickedProblem] = React.useState();
  const [pickedEngagement, setPickedEngagement] = React.useState();
  const [currentTextOne, setCurrentTextOne] = React.useState("PICK");
  const [currentTextTwo, setCurrentTextTwo] = React.useState("YOUR");
  const [currentTextThree, setCurrentTextThree] = React.useState("INDUSTRY");

  const [matchingProjects, setMatchingProjects] = React.useState([]);

  const createSettings = (slidesToShow, slidesToScroll, rtl = false) => {
    return {
        // cssEase: 'linear',
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplaySpeed: 10000,
        autoplay: true,
        slidesPerRow: 1,
        // centerMode: true,
        // className: 'slider-container-collection',
        pauseOnHover: false,
        draggable: false,
        swipe: false,
        rtl: rtl,
        // variableWidth: true
    }
}

  const updateTagsList = (newStepTags) => {
    setCurrentTagList(newStepTags)
  }

  const updateMatch = () => {
    let new_match = []

    for (let item in projects_match){
      if (projects_match[item].industry.includes(pickedIndustry) && projects_match[item].problem.includes(pickedProblem) && projects_match[item].engagement.includes(pickedEngagement)){
        new_match.push(projects_match[item])
      } 

    }

    return new_match
  }

  React.useEffect(() => {
    if ( currentStep == 2){
      setCurrentTextThree("PROBLEM")
    }
    if (currentStep == 3){
      setCurrentTextTwo("OUR")
      setCurrentTextThree("ENGAGEMENT")
    }
    if (currentStep == 4){
      setCurrentTextOne("HERE ARE")
      setCurrentTextTwo("BEST")
      setCurrentTextThree("PROJECTS MATCHED")
    }
    console.log(
      "Industry: " + pickedIndustry,
      "Problem: " + pickedProblem,
      "Engagement: " + pickedEngagement
    )
    setMatchingProjects(updateMatch())
    
  }, [currentStep])


  return (
    <>
    
 <motion.img 
    src={props.evdev_light} 
    className='pickind-evdev-light'
    initial={{ opacity: 0, scale: 1, x: 200, y: 250, width: 0}}
    whileInView={{ opacity: 1, scale: 1, x: -500, y: 250, width: 550}}
    viewport={{ once: true }}
    transition={{
        type: "spring",
        duration: 1.5,
        delay: 1,
        }}
    />
    <div className='pick-industry-section desktopV'>
    {
            windowDimensions.width >= 500 && 
            <>
                <video className='background-element-industry' style={{height: `350px`}} loop="true" autoplay="true" muted>
                    <source src={props.pyramid} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </>
        }
      <div className='pick-industry-container'>
        <div className='left-part'>
          <div className='counter-block'>
            <p className='current-step'>0{currentStep}</p>
            <p className='all-steps'>/ 03</p>
          </div>
          <motion.div
              initial={{ opacity: 0, scale: 1.5}}
              whileInView={{ opacity: 1, scale: 1}}
              viewport={{ once: true }}
              transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0,
            }}>
              <h3>{currentTextOne}</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.5}}
              whileInView={{ opacity: 1, scale: 1}}
              viewport={{ once: true }}
              transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.25,
            }}>
              <h3>{currentTextTwo}</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.5}}
              whileInView={{ opacity: 1, scale: 1}}
              viewport={{ once: true }}
              transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
            }}>
              <h3>{currentTextThree}</h3>
            </motion.div>
        </div>
        { currentStep <= 3 ? 
        <div className='right-part'>
          {currentTagList.map((item, key) => 
            <motion.div
              initial={{ opacity: 0, scale: 1.5, x: -200}}
              whileInView={{ opacity: 1, scale: 1, x: 0}}
              viewport={{ once: true }}
              transition={{
                  type: "spring",
                  duration: 1,
                  delay: 0.15 * item.id,
            }}>
              <TagComponent 
                title={item.title} 
                key={key}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                updateTagsList={updateTagsList}
                secondStepList={second_step_tags}
                thirdStepList={third_step_tags}
                setPickedIndustry={setPickedIndustry}
                setPickedProblem={setPickedProblem}
                setPickedEngagement={setPickedEngagement}
                />
            </motion.div>
          )}
        </div>
        :
        <div className='right-part-noflex'>
          {matchingProjects.length > 1 &&
           <Slider {...createSettings(2, 1)}>
           {matchingProjects.map((item, key) => 
             <a 
              href={item.url} 
              className='recommended-project'
              target="_blank">
               <img src={item.logo} /> 
             </a>
           )}
          </Slider>
          }
          { matchingProjects == 1 &&
          <>
          {matchingProjects.map((item, key) => 
            <a 
              href={item.url} 
              className='recommended-project'
              target="_blank"
              >
              <img src={item.logo} /> 
            </a>
          )}
          </>
            
          }
          { matchingProjects == 0 &&
            <p style={{color: "white", fontFamily: "Gotham", textAlign: "left"}}>FOR YOUR CHOICES WE CANNOT FIND<br/>ANY MATCHING PROJECTS.</p>            
          }
         
          
      </div>
      }
      </div>
    </div>
    </>
  )
}

export default PickIndusty