import React from 'react'
import img from "../assets/logo.png"
import { MdMenu } from "react-icons/md";
import { FaRegUser } from 'react-icons/fa';


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
    <div className= 'text-white py-8'>
    <div className='container flex justify-between items-center'>
    <div>
       <img src={img} alt='' className='max-w-[100px] invert'/>
       </div>
       {/* Menu Section */}
       <div className='hidden md:block'>
        <ul className='flex items-center relative gap-4 z-40'>
        {
          NavbarMenu.map((item)=> {
           return <li>
              <a href={item.link} className='text-base inline-block font-semibold py-2 px-3 uppercase'>{item.title}</a>
            </li>
          })}
          <button className='ps-14 text-xl'>
            <FaRegUser/>
          </button>
        </ul>
       </div>
        {/* Menu Section */}
        {/* Humbermenu Icon */}
        <div className='md:hidden'>
             <MdMenu className='text-4xl'/>
        </div>
        {/* Humbermenu Icon */}
       </div>
       </div>
    </>
  )
}

export default Navbar
