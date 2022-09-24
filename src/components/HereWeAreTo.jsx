import React from 'react'
import '../styles/HereWeAreTo.scss';
import { motion } from "framer-motion";


const hereweare_array = [
    {
        "id": 1,
        "title": 'Bring offline business to online platforms',
    },
    {
        "id": 2,
        "title": 'Find and expand your customer base',
    },
    {
        "id": 3,
        "title": 'Raise sales by site/bot/apps',
    },
    {
        "id": 4,
        "title": 'Simplify and automate your business routine through our products',
    },
    {
        "id": 5,
        "title": 'And more other problems',
    }
]


const HereWeAreTo = () => {
  return (
    <div className='hereweare-section'>

        <motion.p
                    initial={{ opacity: 0, scale: 2}}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{ once: true }}
                    viewport={{ once: true }}
                    className='small-title'
                    transition={{
                        type: "spring",
                        duration: 1.5,
                        delay: 0.3,
                        }}
                    >
            Here we are
        </motion.p>

        <motion.div
                    initial={{ opacity: 0, x: -100}}
                    whileInView={{ opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        duration: 1.5,
                        delay: 0.3,
                        
                    }}>
        <h2>To solve a number of your business problems</h2>
        </motion.div>

            {hereweare_array.map((elem, key) => 
                <motion.div
                    initial={{ opacity: 0, scale: 0.8}}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{ once: true }}
                    className='hereweare-element'
                    transition={{
                        type: "spring",
                        duration: 1,
                        delay: 0.2,
                        
                    }}
                    >
                        <p>{elem.title}</p>
                        <p>0{elem.id}</p>
                    </motion.div>
            )}

    </div>
  )
}

export default HereWeAreTo