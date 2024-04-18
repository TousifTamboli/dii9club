import React, { useState, useEffect } from 'react';


const Loading = () => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);
  const fullText = 'Dii9 Mansiion';
  const additionalText = 'Bar + Club';
  const typingSpeed = 200; 
  const delayBetweenTyping = 3000; 
  const fadeDelay = 400; 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Show additional text after typing animation completes
        setTimeout(() => {
          setShowText(true);
        }, fadeDelay);
      }
    }, typingSpeed);

    // Clear interval after the full text is typed
    setTimeout(() => {
      clearInterval(interval);
    }, typingSpeed * fullText.length + delayBetweenTyping);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container flex flex-col justify-center items-center min-h-screen">
  <div className="typewriter font-notoserif text-5xl md:text-[102px] text-center font-bold text-white">
    {text.split(' ').map((word, index) => (
      <span key={index}>
        {word}
        {index < text.split(' ').length - 1 && <br />} {/* Hide line break on medium screens */}
        {index < text.split(' ').length - 1 && <span className="hidden md:inline">&nbsp;</span>} {/* Add space on medium screens */}
      </span>
    ))}
  </div>

  {showText && (
    <div className="additional-text font-notoserif pt-4 text-xl md:text-2xl text-white animate-fade-in">
      {additionalText}
    </div>
  )}
</div>

  );
};

export default Loading;
