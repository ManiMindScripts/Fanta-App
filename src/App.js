import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { UpdateFollower } from 'react-mouse-follower'
import Products from './components/products/Products'
import Banner from './components/Banner/Banner'
import BannerText from './components/Banner/BannerText'
import Blog from './components/Blogs/Blog'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
    <UpdateFollower 
     mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                followSpeed: 1.5,
               } }   >
      <Hero/>
      <Products/>
      <Banner/>
      <BannerText/>
      <Blog/>
      <FAQ/>
      <Footer/>
      </UpdateFollower>
    </main>
    </>
  )
}

export default App
