import React from 'react'
import '../styles/WhatCustomerGet.scss';
import { motion } from "framer-motion";

let services = [
    {
        "title": 'The ".com" domain',
        "subtitle": "",
    },
    {
        "title": 'Setting up a domain and connecting it to the site',
        "subtitle": "",
    },
    {
        "title": 'SSL certificate settings',
        "subtitle": 'for site security, will be displayed in the "https" site feed',
    },
    {
        "title": 'Hosting settings and the first month of free use',
        "subtitle": "",
    },
    {
        "title": 'Consultation and support of the site for the next 3 months',
        "subtitle": "",
    }
]

const WhatCustomerGet = () => {
  return (
    <section className='customer-get-section'>
        <motion.div
            initial={{ opacity: 0, scale: 1, x: -200}}
            whileInView={{ opacity: 1, scale: 1, x: 0}}
            viewport={{ once: true }}
            className='service-element'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                
            }}
            >
                <h3>What <br/>does the customer get <txt className='gradient-txt'>for</txt> <txt className='gradient-txt'>free</txt> when he orders from us?</h3>
            </motion.div>
        <div className='services-list'>
            {services.map((item, key) => 
            <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 100}}
            whileInView={{ opacity: 1, scale: 1, x: 0}}
            viewport={{ once: true }}
            className='service-element'
            transition={{
                type: "spring",
                duration: 1,
                delay: 0.2,
                
            }}
            >
                    <p>{item.title}</p>
                    {item.subtitle != "" &&
                        <p className='subtitle'>{item.subtitle}</p>
                    }
                </motion.div>
            )}
            
        </div>
    </section>
  )
}

export default WhatCustomerGet