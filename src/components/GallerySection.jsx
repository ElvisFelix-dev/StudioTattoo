import { useState } from 'react'
// gallery data
import { galleryData } from '../data'
// photo album
import { PhotoAlbum } from 'react-photo-album'
// framer motion
import { motion } from 'framer-motion'
// animation
import { fadeIn } from '../variants'

export default function GallerySection() {
  // index state
  const [index, setIndex] = useState(-1)
  // destructure gallery data
  const { title, images } = galleryData

  return (
    <section id="galery" className="relative bg-[#f9f9f9] section mt-[40px]">
      {/* title */}
      <motion.div
        className="container mx-auto"
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
      >
        <h2 className="h2 max-w-[370px]">{title}</h2>
      </motion.div>
      {/* gallery */}
      <motion.div
        className="mb-8 lg:mb-20"
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
      >
        <PhotoAlbum
          photos={images}
          layout="rows"
          onClick={(event, photo, index) => setIndex(index)}
        />
      </motion.div>
      {/* btn */}
    </section>
  )
}
