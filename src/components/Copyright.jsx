import { motion } from 'framer-motion'
// framer motion
export default function Copyright() {
  return (
    <div className="bg-dark text-[#dbdbdb] py-6 border-t border-[#2b2b2b]">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0 }}
          className="tracking-[0.02em] text-base"
        >
          &copy; 2023
          <span className="font-semibold text-white"> 2System.</span> Todos os 
          direitos reservado.
        </motion.div>
      </div>
    </div>
  )
}
