import React from 'react'
// footer data
import { footerData } from '../data'
// framer motion
import { motion } from 'framer-motion'
// animation
import { fadeIn } from '../variants'

const Footer = () => {
  // destructure footer data
  const { about } = footerData

  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col text-white lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div>
            <div className="text-xl uppercase font-primary tracking-[0.08em]">
              {about.title}
            </div>
            <div className="leading-relaxed text-[#dbdbdb]">
              {about.subtitle}
            </div>
            <div className="flex flex-col font-semibold gap-y-4 text-[#dbdbdb]">
              {/* addresses */}
              <div className="flex items-center gap-x-[10px]">
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>{about.cel.icon}</div>
                <div>{about.cel.number}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
