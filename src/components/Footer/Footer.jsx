import React from 'react'
import Logo from "../../assets/Images/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobile } from 'react-icons/fa6'

export const Footer = () => {
  return (
        <>
        <div className="bg-gray-100 dark:text-white dark:bg-gray-950">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 py-5">
                    <div className="py-8 px-4">
                    <h1 className="flex items-center gap-3
                    text-xl sm:text-3xl font-bold
                    text-justify sm:text-left">
                        <img src={Logo} alt="" 
                        className="max-w-[70px]"/>
                        MASTER
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Magnam ullam nemo sint soluta 
                        dolore autem non adipisci illo, molestias ea?
                        </p>
                        <br />
                        <div className="flex items-center gap-3 mt-6">
                            <FaLocationArrow />
                            <p>Sansodia, Lekki Lagos</p>
                        </div>
                        <div className="flex items-center ga-3 mt-3">
                            <FaMobile />
                            <p>+2348149208959</p>
                             
                        </div> 
                        {/* social handles */}
                     <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl"/>
                            </a>
                        </div>
                     </div>
                     </div>
                     
                    <div className="grid grid-cols-2
                    sm:grid-cols-3 col-span-2 md:pl-10"> 
                    <div>
                        <div className="py-8 px-10">
                            <h1 className="text-xl sm:text-3xl 
                            font-bold text-justify
                            sm:text-left mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl sm:text-3xl 
                            font-bold text-justify
                            sm:text-left mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl sm:text-3xl 
                            font-bold text-justify
                            sm:text-left mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
                @copyright 2024 All Rights Reserved || Made by Christian Imeba
            </div>
        </div>
        </>
  )
}
