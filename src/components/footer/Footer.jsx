import React from 'react'
import {
   FaLinkedin,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
} from "react-icons/fa"
import { FaMapLocation } from "react-icons/fa6"
import fanta from "../../assets/logo.png"
import CardsImg from "../../assets/credit-cards.webp"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className="bg-primary pt-12 pb-8 text-white">
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* company detai Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6
                        }}
                        className="space-y-6">
                        <img src={fanta} alt='' className="invert max-w-[100px]" />
                        <div>
                            <p className="flex items-center gap-2">
                                <FaPhone />
                                (+92) 310669122
                            </p>
                            <p className="flex items-center gap-2 mt-2">
                                <FaMapLocation />
                                Toba Tek Singh
                            </p>
                        </div>
                    </motion.div>
                    {/* Footer Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.6
                        }}
                        className="space-y-6">
                        <h1 className="text-3xl font-bold"> Quick Links</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
                            <div>
                                <ul className="space-y-2">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contanct US</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contanct US</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>

                        </div>
                    </motion.div>
                    {/* socia section */}
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6
                        }} className="space-y-6"
                    >
                        <h1 className="text-3xl font-bold">follow Us</h1>
                        <div className="flex items-center gap-3">
                            <FaLinkedin className="text-3xl hover:scale-105 duration-300"/>
                            <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                            <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
                            <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
                        </div>
                        <div className="space-y-2">
                        <p>Payment Method</p>
                            <img src={CardsImg} alt=''/> 
                        </div>
                    </motion.div>
                </div>

                {/* copyrught section */}
                <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
                    copyright  &copy: 2024. All Rights Reserved 
                </p>
            </div>
        </footer>
    )
}

export default Footer