import React, { useState, useEffect } from 'react';

import infoimg from '../assets/images/info_img.png';
import infoimg2 from '../assets/images/infoimg2.jpg';

export default function Info() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [infoimg, infoimg2];
  const texts = [
    "Dii9 Mansion is more than just a venue; it's a testament to Pune's vibrant culture and cosmopolitan spirit. Our visionary director, Eshvarr Budhwntt and Swapnil Pawar, conceived Dii9 Mansion as a platform to showcase the best of the city's culinary and artistic talent, while providing guests with an unparalleled dining and entertainment experience. Step into a world of luxury and indulgence at Dii9 Mansion, where every detail is crafted to perfection.",
    "Join us at Dii9 Mansiion and experience the height of luxury, sophistication, and hospitality in Pune. Whether you're celebrating a special occasion, hosting a corporate event, or simply looking for a memorable night out, we invite you to step into a world of indulgence and enchantment at Dii9 Mansiion. Welcome to a new era of dining and entertainment in Pune. Welcome to Dii9 Mansiion."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className="md:mt-[150px] mt-[100px] justify-center font-black text-[50px] md:text-[90px] text-center font-notoserif text-white flex items-center flex-col">
        Dii9 <br /> Mansion
        <div className="text-sm font-normal">BAR + CLUB</div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center px-[10px] gap-20 items-center mt-20">
        <div className="mx-4">
          <img 
            src={images[currentImageIndex]} 
            style={{
              height: '400px',
              transition: 'transform 0.5s ease-in-out'
            }}
            className={`slide-${currentImageIndex === 0 ? 'left' : 'right'} w-full`}
          />
        </div>
        <div className="font-petrona font-semibold text-xl tracking-tighter w-full md:w-[500px] leading-loose text-white text-justify">
          {texts[currentImageIndex]}
        </div>
      </div>
    </div>
  );
}
