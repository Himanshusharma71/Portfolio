import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram ,FaRegCopyright,FaHeart } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <hr />
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-11'>
          <div className='flex space-x-4 text-center justify-center'>
            <FaFacebook className='text-xl md:text-3xl hover:scale-110' />
            <FaLinkedin className='text-xl md:text-3xl hover:scale-110' />
            <FaInstagram className='text-xl md:text-3xl hover:scale-110' />
            <FaTelegram className='text-xl md:text-3xl hover:scale-110' />
          </div>
          <hr className='w-1/4 mx-auto my-6  border-2 border-black' />
          
          <div className='flex text-center justify-center'>
          <FaRegCopyright className='m-1' />
          <p>2024 Your Company. All rights reserved</p>
          </div>
          <div className='flex justify-center m-1 gap-2'>
          <p>Supportive Partner  </p>
          <span style={{color:"red"}} className='mt-1'><FaHeart /></span>
          <p>Himanshu Sharma</p>
          </div>
        </div>
      </footer>
    </>
  )
}
