// hero data
import { heroData } from '../data'
// framer motion
import { motion } from 'framer-motion'
// framer motion transition
import { fadeIn } from '../variants'

// transition
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
}

export default function Hero() {
  // destructure hero data
  const { title, subtitle } = heroData

  return (
    <section
      id="home"
      className="bg-center bg-cover bg-hero min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={'show'}
        className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end"
      >
        {/* content */}
        <div className="text-center text-white lg:text-left lg:max-w-[640px]">
          <motion.h1 variants={fadeIn('down')} className="h1">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn('down')}
            className="max-w-lg mb-8 leading-relaxed lg:mb-16"
          >
            {subtitle}
          </motion.p>
          {/* btn */}
        </div>
      </motion.div>
    </section>
  )
}
