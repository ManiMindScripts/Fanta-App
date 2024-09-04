import React from 'react'
import P1 from '../../assets/fanta1.png'
import P2 from '../../assets/fanta2.png'
import P3 from '../../assets/fanta3.png'
import { motion } from 'framer-motion'

export const fadeUp = (delay) => {
 return {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
    opacity:1,
    y: 0,
    transition:{
         duration: 0.5,
         delay: delay,
    },
},
 }
}

const productsData = [
    {
        id: 1,
        title: "Orange Fanta",
        image: P1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus doloribus cupiditate perferendis commodi a nesciunt exercitationem earum iure maiores.",
        delay:0.5,   
      },
      {
        id: 2,
        title: "Lorem Fanta",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus doloribus cupiditate perferendis commodi a nesciunt exercitationem earum iure maiores.",
        image: P2, 
        delay:0.8,  
      },
      {
        id: 3,
        title: "Cola Zero",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus doloribus cupiditate perferendis commodi a nesciunt exercitationem earum iure maiores.",
        image: P3,
        delay:1.1,   
      },
      
]
const Products = () => {
  return (
    <div className='bg-gray-100 py-8'>
    <div className='container py-14'>
        <motion.h1
          variants={fadeUp(0.2)}
                initial= "hidden"
                whileInView={"show"}
         className='text-center font-bold text-3xl pb-10'>Our Products</motion.h1>
        {/* Card Section */}
        <div className='justify-center flex'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 justify-items-center'>
        { 
            productsData.map((item)=> {
                return (
                <motion.div
                variants={fadeUp(item.delay)}
                key={item.id}
                initial= "hidden"
                whileInView={"show"}
                
                 className='items-center flex flex-col justify-center p-5 max-w-[300px] max-auto shadow-lg rounded-xl bg-white'>
                    <img src={item.image} alt='' className='w-[100px] hover:rotate-12 mb-4 hover:scale-110 duration-300'/>
                    <div className='text-center space-y-2'>
                        <h1 className='font-bold text-2xl font-handwriting text-center'>{item.title}</h1>
                        <p className='text-center text-sm text-gray-600'>{item.desc}</p>
                        <button className=
                        'border-2 !mt-5 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200'>
                        Buy Now</button>
                    </div>
                </motion.div>
            )})
        
        }
        </div>
        </div>
    </div>
    </div>
  )
}

export default Products