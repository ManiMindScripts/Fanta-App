import React from 'react'
import Banner1 from '../../assets/Banners/juice.png'
import Banner2 from '../../assets/Banners/splash.png'
import { motion } from 'framer-motion'
import { fadeUp } from '../products/Products'

const Banner = () => {
    return (
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 p-4'>
                {/* Baner image */}
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                        src={Banner1} alt='' className='z-10 w-[300px] md:max-w-[400px] mx-auto relative' />
                    <motion.img
                        initial={{ opacity: 0, y: -100, rotate: -180, scale:0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                        src={Banner2} alt='' className='z-0 bottom-0 absolute' />
                </div>
                {/* Banner info */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                        <motion.h1 
                        variants={fadeUp(0.6)}
                         initial=  "hidden"
                         whileInView= "show"  
                        className="text-3xl font-semibold lg:text-4xl">Referesh Your World With Fanta</motion.h1>
                        <motion.p 
                         variants={fadeUp(0.9)}
                         initial=  "hidden"
                         whileInView= "show"  
                        className="text-gray-500">
                            Fanta is a globally popular carbonated soft drink known for its vibrant,
                            fruity flavors. Originally created in Germany during World War II due to Coca-Cola syrup
                            shortages, Fanta has since become a household name, offering a wide range of flavors that cater to different
                            regional tastes. The most common variant, orange, is beloved for its sweet and tangy taste, making it a refreshing option for hot days
                            or as a complement to meals. Over the years, Fanta has introduced various flavors, including grape, pineapple, and exotic blends, making it a versatile and colorful
                            addition to the soft drink market. Its bold advertising campaigns and playful branding have helped cement its status as a favorite among younger audiences.
                        </motion.p>
                        <motion.button 
                         variants={fadeUp(1.1)}
                         initial=  "hidden"
                         whileInView= "show"  
                        className='border-2 !mt-5 border-primary text-primary px-6 py-2 rounded-md
                     hover:bg-primary hover:text-white duration-200 mb-4'>
                            Buy Now</motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner