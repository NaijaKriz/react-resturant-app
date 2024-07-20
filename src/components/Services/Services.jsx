import React from 'react'
import Rice from "../../assets/Images/11.jpg"
import noodles from "../../assets/Images/13.jpg"
import Coffee from "../../assets/Images/14.jpg"


const ServicesData = [
    {
        id:1,
        img: Rice,
        name: "Rice",
        Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis accusantium facilis earum voluptatum?"
    },
    {
        id:2,
        img: noodles,
        name: "Noodles",
        Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis accusantium facilis earum voluptatum?"
    },
    {
        id:3,
        img: Coffee,
        name: "Coffee",
        Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis accusantium facilis earum voluptatum?"
    },
]

const Services = () => {
  return (
    <>
    <div className="py-10 dark:bg-gray-800">
        <div className="container">
            {/* Header Section */}
            <div 
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r
                from-primary to-secondary">Our Services</p>
                <h1 className="text-3xl font-bold dark:text-white">Services</h1>
                <p className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Accusamus debitis 
                    accusantium facilis earum voluptatum? 
                    Natus reiciendis quis voluptatem similique 
                    nam?
                </p>
            </div>
             {/* Card Section */} 
             <div >
                <div 
                data-aos="zoom-out"
                data-aos-duration="400"
                data-aos-once="true"
                className="grid grid-cols-1 ms:grid-cols-2
                  md:grid-cols-3 gap-14 cursor-pointer md:gap-5 place-items-center">
                {
                    ServicesData.map(({id, img, name, Description}) =>{
                        return(
                        <div key={id} 
                            className="mx-w-[300px]
                            group rounded-2xl bg-white dark:bg-gray-700
                             dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 
                             p-6 shadow-xl">
                               <div className="h-[100px">
                               <img src={img} alt="" 
                               className="max-w-[200px] mx-auto
                                block transform-translate-y-14
                                group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full"/>
                               </div>
                               <div className="p-4 text-center">
                                <h1 className="text-xl font-bold dark:text-white">{name}</h1>
                                <p className="text-gray-500 group-hover:text-white 
                                duration-300 text-sm 
                                line-clamp-2">{Description}
                                </p>
                               </div>
                        </div>
                            
                        )
                    })
                }
                </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Services