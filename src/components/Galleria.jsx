import React, { useEffect, useState } from 'react';
import photo1 from '../assets/images/photo_grid_1.png';
import photo2 from '../assets/images/photo2grid.png';
import photo3 from '../assets/images/photo3grid.png';
import photo4 from '../assets/images/photo4grid.png';

export default function Gallery() {
  const [animateIndex, setAnimateIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="md:mt-[150px]  my-[75px] justify-center font-black text-[50px] md:text-[90px] text-center font-notoserif text-white flex items-center flex-col">
        Gallería
      </div>
      <div className="md:flex md:flex-row md:justify-center  md:items-center px-3">
        <div className="grid grid-cols-2 justify-end  gap-8 px-3 pl-11 md:pl-50 md:mt-2">
          <img
            className={`w-40 md:w-80 h-auto ${
              animateIndex === 0 ? 'animate animated-image' : ''
            }`}
            src={photo1}
            alt=""
          />
          <img
            className={`w-40 md:w-80 h-auto ${
              animateIndex === 1 ? 'animate animated-image' : ''
            }`}
            src={photo2}
            alt=""
          />
          <img
            className={`w-40 md:w-80 h-auto ${
              animateIndex === 2 ? 'animate animated-image' : ''
            }`}
            src={photo3}
            alt=""
          />
          <img
            className={`w-40 md:w-80 h-auto ${
              animateIndex === 3 ? 'animate animated-image' : ''
            }`}
            src={photo4}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
