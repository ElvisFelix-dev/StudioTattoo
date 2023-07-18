import { testimonialData } from '../data'

import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/swiper.min.css' // Importe o estilo principal do Swiper

import '../testimonialSlider.css'
import { fadeIn } from '../variants'

export default function Testimonial() {
  return (
    <motion.section
      className="py-[40px] lg:pb-[160px] lg:pt-0"
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      id="testimonial"
    >
      <div className="container mx-auto">
        <Swiper
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonialData.map((slide, index) => {
            const { quoteImg, message, name, occupation } = slide

            return (
              <SwiperSlide key={index}>
                <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  <div className="w-[154px] h-[109px] mb-5">
                    <img src={quoteImg} alt="Quote Icon" />
                  </div>
                  <div className="flex-1 lg:mt-[54px]">
                    <div className="text-2xl lg:text-[36px] mb-6 lg:mb-12">
                      {message}
                    </div>
                    <div className="flex items-center text-xl lg:text-2xl font-primary">
                      <div className="font-semibold">{name}</div>
                      <span className="mx-4">|</span>
                      <div className="font-light">{occupation}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </motion.section>
  )
}
