import React from 'react'
import img from "../assets/logo.png"
import { MdMenu } from "react-icons/md";
import { FaRegUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#"
  },
  {
    id: 2,
    title: "Categories",
    link: "#"
  },
  {
    id: 3,
    title: "Blog",
    link: "#"
  },
  {
    id: 4,
    title: "About",
    link: "#"
  },
  {
    id: 5,
    title: "Contact",
    link: "#"
  },
]

const Navbar = () => {
  return (
    <>
      <div className='text-white py-8'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, }}
          className='container flex justify-between items-center'>
          <div>
            <img src={img} alt='' className='max-w-[100px] invert' />
          </div>
          {/* Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex items-center relative gap-4 z-40'>
              {
                NavbarMenu.map((item) => {
                  return <li>
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 10,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference",
                      }}
                    >
                      <a href={item.link} className='text-base inline-block font-semibold py-2 px-3 uppercase'>{item.title}</a>
                    </UpdateFollower>
                  </li>
                })}
                <UpdateFollower
                   mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 10,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference",
                      }}
                >
              <button className='ps-14 text-xl'>
                <FaRegUser />
              </button>
              </UpdateFollower>
            </ul>
          </div>
          {/* Menu Section */}
          {/* Humbermenu Icon */}
          <div className='md:hidden'>
            <MdMenu className='text-4xl' />
          </div>
          {/* Humbermenu Icon */}
        </motion.div>
      </div>
    </>
  )
}

export default Navbar
