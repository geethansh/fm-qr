import React from 'react'
import Image from "next/image";
import "./globals.css"

const page = () => {
  return (
    <div className=' flex items-center justify-center h-screen bg'>
      <div className="flex flex-col items-center bg-card rounded-xl shadow-lg overflow-hidden w-[20rem] h-[31rem] mx-3 gap-3">
        <div className='flex flex-col items-center'>
         <Image src='/image-qr-code.png' alt='qr-code' width={300} height={300} className=' mt-3 rounded-xl'/>
        </div>
        <div className='text-center'>
         <p className=' font-bold text-20 pl-7 pr-7 pt-3 font-custom text-b-blue'>Improve your front-end skills by building projects</p> 
        </div>
        <div className='text-center'>
         <p className='text-15 pl-7 pr-7 font-custom text-g-gray'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p> 
        </div>
      </div>

    </div>
  )
}

export default page