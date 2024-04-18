import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../styles/screen.css';
import Info from '../components/Info';
import threadimg from '../assets/images/thread.png';
import Galleria from '../components/Galleria';
import View from '../components/View';
import ContactF from '../components/Contact';
import Footer from '../components/Footer';

export default function Screen() {
  return (
    <div className="screen relative">
      <Header />
      <Hero />
      <Info />
      <Galleria />
      <div className="absolute  -mt-10 -z-10">
        <img src={threadimg} className="w-full" alt="Background" />
      </div>
      <View />
      <ContactF />
      <Footer />
    </div>
  );
}
