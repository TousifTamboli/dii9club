import React from 'react';
import di9vid from '../assets/videos/dii9.mp4';
import bgcircle from '../assets/images/img_circle.png';
import BarSpoon from './Barspoon';

export default function Hero() {
  return (
    <div style={{ position: 'relative' }}>

      <img
        src={bgcircle}
        alt="bg"
        style={{
          position: 'absolute',
          top: '40%', // Adjust positioning as needed
          left: '40%', // Adjust positioning as needed
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }}
        className="md:h-full md:w-full h-96 w-96"
      />
   
      <div className="flex flex-col justify-center items-center">
        <video
          className="w-full md:max-w-screen-lg h-auto mx-30 md:p-5" // Set max width to screen width
          src={di9vid}
         muted={true} 
          loop={true} 
         controls={true}
          autoPlay={true} 
        />
     <button className="bg-transparent hover:bg-white hover:text-black text-white text-l font-black font-notoserif md:px-10 md:py-3 py-3 px-10 border mt-10 border-white">
   EXPLORE
     </button>
      </div>
     <BarSpoon
          barSpoonBarSpoon="/barspoon.svg"
          barSpoonIconOverflow="unset"
          barSpoonIconHeight="122px"
          barSpoonIconPosition="absolute"
          barSpoonIconTop="677px"
          barSpoonIconLeft="calc(50% - 4.5px)"
        />
    </div>
  );
}
