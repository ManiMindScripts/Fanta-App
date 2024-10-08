import React, { useState } from 'react'
import fanta1 from '../assets/fanta1.png'
import fanta2 from '../assets/fanta2.png'
import fanta3 from '../assets/fanta3.png'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './Navbar'
import { motion, AnimatePresence, easeInOut, animate, } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const sideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },

    }

  }


}


const HeroData = [
  {
    id: 1,
    image: fanta1,
    title: "Orange Fanta",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus doloribus cupiditate perferendis commodi a nesciunt exercitationem earum iure maiores.",
    price: 100,
    modal: "Orange",
    bgColor: "#cf4f00"

  },
  {
    id: 2,
    image: fanta2,
    title: "Cola Zero",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus doloribus cupiditate perferendis commodi a nesciunt exercitationem earum iure maiores.",
    price: 150,
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: fanta3,
    title: "CoCa Cola",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus doloribus cupiditate perferendis commodi a nesciunt exercitationem earum iure maiores.",
    price: 200,
    modal: "Cola",
    bgColor: "#ac1a00",
  },
]

const Hero = () => {
  const [activeData, setactiveData] = useState(HeroData[0])

  const handActiveData = (data) => {
    setactiveData(data)
  }
  return (
    <>
      <motion.div initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        {/* NAvbar Component */}
        <Navbar />
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[500px]'>
          {/* Data Info */}
          <div className='justify-center flex flex-col py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1 relative z-40'>
            <div className='space-y-5 text-center md:text-left'>
              <AnimatePresence mode='wait'>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 10,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference"
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={sideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow'> {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.p
                  key={activeData.id}
                  variants={sideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-sm leading-lose text-white/80'> {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={sideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{
                      color: activeData.bgColor
                    }}
                    className='px-4 py-2 bg-white inline-block font-normal rounded-sm font-handwriting text-black'>Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
              {/* Seprator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
                className='text-center flex justify-center md:justify-start gap-4 !md:mt-24 !mb-10'>
                <div className='w-20 h-[1px] bg-white'></div>
                <p>TOP RECOMENDATION</p>
                <div className='w-20 h-[1px] bg-white'></div>
              </motion.div>
              {/* Image Swiper */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
                className='grid grid-cols-3 gap-10'>
                {
                  HeroData.map((data) => {
                    return (
                      <UpdateFollower
                        mouseOptions={{
                          backgroundColor: data.bgColor,
                          zIndex: 9999,
                          followSpeed: 0.5,
                          scale: 5,
                          text: "View Details",
                          textFontSize: "3px",
                        }}
                      >
                        <div onClick={() => handActiveData(data)}

                          className='cursor-pointer space-y-3 hover:scale-105 transition-all duration-200'>
                          <div className='justify-center flex'>
                            <img src={data.image} alt='' className={
                              `img-shadow w[80px] ${activeData.image === data.image ? "opacity-100 scale-100" : "opacity-50"}`
                            } />
                          </div>
                          <div className='!mt-6 text-center space-y-1'>
                            <p className='text-base opacity-50 line-through'>{data.price}</p>
                            <p className='text-xl font-bold'>{data.price}</p>
                          </div>
                        </div>
                      </UpdateFollower>
                    )
                  })
                }
              </motion.div>
            </div>
          </div>
          {/* Hero Img */}
          <div className='justify-end flex flex-col items-center relative order-1 md:order-2'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4
                  },
                }}
                src={activeData.image} alt='' className='w-[150px] md:w-[200px] xl:w-[250px] img-shadow relative z-10' />
            </AnimatePresence>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4
                  },
                }}
                className='text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Whatsapp Icon */}
          <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
            <a href='#'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>

    </>
  )
}

export default Hero