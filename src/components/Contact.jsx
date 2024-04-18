import React from 'react'
import b_logo from '../assets/images/b_half.png'

export default function ContactF() {
  return (
    <>
    {/* <hr className="bg-blend-color-burn" /> */}
    {/* md:w-[70%] md:h-[80%] */}
      <div className="flex justify-start md:gap-72 mt-10 ">
        <div className="flex flex-col ">  <img src={b_logo} className=" md:w-full md:h-full h-[86%] w-[70%]"/>
        <p className="text-white md:pl-6 pl-2 md:text-xl text-sm font-montserrat mt-5"> made by <strong>scipedia</strong></p>
        </div>
        <div>
          <h1 className="text-white ml-3 md:text-17xl text-2xl font-notoserif md:mt-0 font-medium">Contact</h1>
          
        <form >
          
          <div className="p-4 md:text-2xl">
            <p className="text-white mb-0">Name</p>
            <input className="bg-transparent border-none" placeholder="Name" type="text" />
            <hr className="md:w-96"/> 
            <p className="text-white mb-0">Email</p>
            <input className="bg-transparent border-none" placeholder="Email" type="text" />
            <hr />
            <p className="text-white mb-0">Phone</p>
            <input className="bg-transparent border-none" placeholder="Phone" type="text" />
            <hr />
            <p className="text-white mb-0">Message</p>
            <input className="bg-transparent border-none" placeholder="Number of People" type="text" />
            <hr />
            <button className="  hover:bg-white hover:text-black border border-white bg-transparent px-8 py-2 text-white font-black font-notoserif p-2 mt-4">SUBMIT</button>
          </div>
        </form>
        <div className="md:pt-36 md:font-notoserif md:text-2xl hidden md:block md:text-white">
          <h2>Contact info</h2>
          <div><p className="font-semibold text-sm">
            Phone</p>
            <p> +91 XXXXX-XXXXX</p><p className="font-semibold text-sm">
           Email</p>
            <p>abc@gmail.com</p>
            
            
            </div>
        </div>
        </div>
      </div>
    </>
  )
}
