import React,{useState} from 'react'
import img from "../assets/logo.png"
import { MdMenu, MdClose} from "react-icons/md";
import { FaRegUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { Link } from 'react-scroll';


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "home"
  },
  {
    id: 2,
    title: "Products",
    link: "products"
  },
  {
    id: 3,
    title: "Blog",
    link: "blog"
  },
  {
    id: 4,
    title: "FAQ",
    link: "faq"
  },
  {
    id: 5,
    title: "Contact",
    link: "footer"
  },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    console.log("Menu toggled!"); 
    setIsMenuOpen(!isMenuOpen);
  };
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
                  return <li  key={item.id}>
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 10,
                        followSpeed: 1.5,
                        scale: 5,
                        mixBlendMode: "difference",
                      }}
                    >
                      <Link 
                     to={item.link}
                     smooth={true}
                      duration={500} 
                     className='text-base inline-block font-semibold py-2 px-3 uppercase' style={{ cursor: 'pointer' }}>{item.title}</Link>
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
          <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <MdClose className='text-4xl' />
              ) : (
                <MdMenu className='text-4xl' />
              )}
            </button>
          </div>
          {/* Humbermenu Icon */}
        </motion.div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=' md:hidden mt-4 bg-gray-800'
          >
            <ul className='flex flex-col items-center gap-4'>
              {NavbarMenu.map((item) => (
                <li key={item.id}>

                  <Link to={item.link} 
                  smooth={true}
                  duration={500}
                  className='text-base font-semibold py-2 px-3 uppercase' style={{cursor: 'pointer'}}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default Navbar
