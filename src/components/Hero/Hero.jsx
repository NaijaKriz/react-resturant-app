import React from 'react'
import bgImg from "../../assets/Images/vector3.png"
import Food1 from "../../assets/Images/3.jpg"
import Food2 from "../../assets/Images/11.jpg"
import Food3 from "../../assets/Images/12.jpg"

const ImageList = [
    {
      id: 1,
      img:Food1
    },
    {
      id: 2,
      img:Food2
    },
    {
      id: 3,
      img:Food3
    },
    
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize:"cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%"
}

const Hero = () => {
  const [imageId, setImageId] = React.useState(Food1)
  return (
    <>
    <div style={bgImage} className="min-h-[550px] sm:min-h-[600px]
    bg-gray-100 dark:bg-gray-950 dark:text-white 
    duration-200 flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/*Text Content Section */}
          <div 
          data-aos="zoom-out"
          data-aos-duration="400"
          data-aos-once="true"
          className="flex flex-col 
          justify-center gap-4 pt-12
          sm:pt-0 text-center sm:text-left 
          order-2 sm:order-1">
            <h1 className="text-5xl 
            sm:text-6xl lg:text-7xl 
            font-bold">
              Welcome to Master Chef
              </h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Molestiae ex iusto quae quibusdam quod dicta voluptatem 
              iure distinctio soluta ducimus!
              </p>
          <div>
            <button className="bg-gradient-to-r from-primary to-secondary
            text-white p-4 py-2 rounded-full hover:scale-105 duration-200">Order Now</button>
          </div>
          </div>
           {/*Image Section */}
           <div className="order-1 
           sm:order-2 min-h-[450px]
           sm:min-h-[450px] flex 
           justify-center item-center 
           relative">
            {/* main image section */}
            <div 
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex justify-center
            items-center h-[300px] sm:h-[350px]
            overflow-hidden">
                <img src={imageId} 
                alt="" 
                className="w-[200px] sm:w-[350px] 
                rounded-full mx-auto custom-spin "/>
            </div>
             {/* main  section */}
             <div 
             data-aos="zoom-out"
             data-aos-duration="400"
             data-aos-once="true"
             className="flex 
             lg:flex-col lg:top-1/2
             lg:-translate-y-1/2 lg:py-4
             justify-center gap-4 absolute bottom-[0px]
             lg:-right-10 bg-white/10 rounded-full">
             {
            ImageList.map((item) =>(
              <img key={item.id} src={item.img}
              className="w-[80px]
              h-[80px] object-contain
              inline-block hover:scale-105
              duration-200 mx-auto rounded-full"
              onClick={() =>{
                setImageId(
                  item.id ===1 ?
                  Food1 : item.id ===
                  2 ? Food2 : Food3
                )
              }}/>
            ))
           } 
             </div>
           </div>
           </div>
      </div>
    </div>
    </>
  )
}

export default Hero