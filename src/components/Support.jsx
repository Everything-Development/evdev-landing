import React from 'react'
import '../styles/Support.scss';
import { motion } from 'framer-motion';

let support_items = [
    {
        "title": "Change of text blocks on the site (up to 3 per week)",
    },
    {
        "title": "Editing links on the site",
    },
    {
        "title": "Change photos/videos on the site (up to 3 per week)",
    },
    {
        "title": "Server/hosting support",
    },

]

const Support = () => {
  return (
    <section className='support-section'>
        <motion.div
            initial={{ opacity: 0, scale: 1, x: -200}}
            whileInView={{ opacity: 1, scale: 1, x: 0}}
            viewport={{ once: true }}
            className='support-section-title'
            transition={{
                type: "spring",
                duration: 2,
                delay: 0.2,
                
            }}>
            <h4>05</h4>
            <h3>SUPPORT</h3>
            <p>for the next 3 months from the<br/>project completion date</p>
        </motion.div>
        <div className='support-section-inclusion'>
            <h3>Includes</h3>
            {support_items.map((item, key)=> 
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 100}}
                    whileInView={{ opacity: 1, scale: 1, x: 0}}
                    viewport={{ once: true }}
                    className='support-section-elem'
                    transition={{
                        type: "spring",
                        duration: 1,
                        delay: 0.2,
                        
                    }}>
                    <p>{item.title}</p>
                </motion.div>
            )}

        </div>
    </section>
  )
}

export default Support