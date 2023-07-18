/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
//  interview data
import { interviewData } from '../data'
// framer motion
import { motion } from 'framer-motion'
// modal video
import ModalVideo from 'react-modal-video'
import '../modalVideo.scss'
// animation
import { fadeIn } from '../variants'

export default function Interview() {
  // destructure interview data
  const { title, btnText, btnIcon } = interviewData
  // open video state
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.section
      className="bg-no-repeat bg-cover bg-dark section bg-interview lg:h-[812px]"
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container h-full mx-auto">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            {/* title */}
            <h3
              className="text-white text-[40px] lg::text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8"
              variants={fadeIn('down')}
            >
              {title}
            </h3>
            <motion.div variants={fadeIn('down')}>
              {/* play button */}
              <div
                onClick={() => setIsOpen(true)}
                className="flex items-center text-white transition cursor-pointer gap-x-5 hover:opacity-80"
              >
                {/* button border */}
                <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
                  {/* button inner */}
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                    <div className="pl-1">{btnIcon}</div>
                  </div>
                </div>
                {/* button text */}
                <div className="uppercase font-primary">{btnText}</div>
              </div>
            </motion.div>
            {/* video modal */}
            <ModalVideo
              channel="youtube"
              autoplay
              videoId="_l1mqYQuNf8"
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
