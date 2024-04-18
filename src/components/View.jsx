import React from "react";
import { Carousel } from "@material-tailwind/react"; // Import Carousel from Material Tailwind

import photo1 from "../assets/images/carousel1.jpeg";
import photo2 from "../assets/images/carousel2.jpeg";
import photo3 from "../assets/images/carousel3.jpeg";
import photo4 from "../assets/images/carousel4.jpeg";
import photo5 from "../assets/images/carousel5.jpeg";
import photo6 from "../assets/images/carousel6.jpeg";
import photo7 from "../assets/images/carousel7.jpeg";
import photo8 from "../assets/images/carousel8.jpeg";
// className="relative w-full">

function View() {
  return (
    <>
      <div className="md:mt-[150px]  my-[75px] justify-center font-black text-[50px] md:text-[90px] text-center font-notoserif text-white flex items-center flex-col">
        View
      </div>
      <div className="flex justify-center items-center mb-[100px] md:mb-[150px]">
        <div className="w-3/4 sm:w-2/3 lg:w-1/2"> {/* Set the width of the carousel */}
          <Carousel autoplay={true} 
          
        
           className="relative w-full">

            <img src={photo1} alt="slide 1" className="h-full w-full object-cover" />
            <img src={photo2} alt="slide 2" className="h-full w-full object-cover" />
            <img src={photo3} alt="slide 3" className="h-full w-full object-cover" />
            <img src={photo4} alt="slide 4" className="h-full w-full object-cover" />
            <img src={photo5} alt="slide 5" className="h-full w-full object-cover" />
            <img src={photo6} alt="slide 6" className="h-full w-full object-cover" />
            <img src={photo7} alt="slide 7" className="h-full w-full object-cover" />
            <img src={photo8} alt="slide 8" className="h-full w-full object-cover" />
          </Carousel>
          <style jsx>{`
            .swiper-button-prev, .swiper-button-next {
              display: none !important;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}

export default View;
