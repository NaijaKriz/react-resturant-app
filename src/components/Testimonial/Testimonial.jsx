import React from 'react'
import Slider from 'react-slick'
import Joy from "../../assets/Images/T1.jpg"
import Francis from "../../assets/Images/T3.jpg"
import Precious from "../../assets/Images/T4.jpg"

const testimonialData = [
    {
        id:1,
        name: "Joy Nwoye",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est doloribus iste deleniti",
        img: Joy,
    },
    {
        id:2,
        name: "Francis",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est doloribus iste deleniti",
        img: Francis,
    },
    {
        id:3,
        name: "Precious",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est doloribus iste deleniti",
        img: Precious,
    },
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover:true,
        pauseOnocus: true,
    }
  return (
    <>
        <div className="py-10 dark:bg-gray-800">
            <div className="container">
            <div 
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r
                from-primary to-secondary">Testimonial</p>
                <h1 className="text-3xl font-bold dark:text-white">Testimonial</h1>
                <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Accusamus debitis 
                    accusantium facilis earum voluptatum? 
                    Natus reiciendis quis voluptatem similique 
                    nam?</p>
            </div>
            {/* Testimonial section */}
             <div 
             data-aos="zoom-in"
             data-aos-duration="400"
             data-aos-once="true"
             className="grid grid-cols-1 mx-w-[600px] mx-auto gap-6">
                <Slider {...settings}>
                    {testimonialData.map(({id, name, text, img}) =>{
                        return(
                            <div key={id} className="my-6">
                                <div
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-aos-once="true"
                                className="flex flex-col justify-center
                                items-center gap-4 text-center shadow-lg p-4
                                mx-4 rounded-xl dark:bg-gray-700 bg-primary/10 relative"
                                >
                                    <img src={img} alt="" className="h-20 w-20 rounded-full block mx-auto" />
                                    <p className="text-gray-500 text-sm">{text}</p>
                                    <h1 className="text-xl dark:text-white font-bold">{name}</h1>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
        </div>
    </>
  )
}

export default Testimonial