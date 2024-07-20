import React from 'react'
import AppStoreImg from "../../assets/Images/app.png"
import PlayStoreImg from "../../assets/Images/play.png"
import MobileImg from "../../assets/Images/mobile.gif"

const AppStore = () => {
  return (
    <>
        <div className="bg-gray-100 dark:bg-gray-700
        py-4">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <div 
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className="space-y-6 max-w-xl mx-ato">
                        <h1 className="text-2xl text-center 
                        sm:text-left sm:text-4xl font-semibold
                        dark:text-gray-400 text-gray-700">
                            Master Chef is available on android and IOS
                            </h1>
                            <div className="flex flex-wrap
                        justify-center sm:justify-start items-center">
                        <a href="#">
                            <img src={PlayStoreImg} alt=""
                            className="max-w-[150x] 
                            sm:max-w-[120px] md:max-w-[200px]" />
                        </a>
                        <a href="#">
                            <img src={AppStoreImg} alt=""
                            className="max-w-[150x] 
                            sm:max-w-[120px] md:max-w-[200px]" />
                        </a>
                    </div>
                    </div>
                    <img src={MobileImg} alt="" 
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className="max-w-[300px] mx-auto"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppStore