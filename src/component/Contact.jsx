import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xgp0xc6', 
        'template_eabxrye', 
        form.current, 
        'F2682Ki8cDjF2sh_t' // Directly pass the public key string here
      )
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div name="Contact" className='container max-w-screen-2xl mx-auto px-4 md:px-20 my-16 mt-10'>
        <h1 className='text-2xl font-semibold'>contact-me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
          <form ref={form} onSubmit={sendEmail} className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-5'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
              <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>FullName</label>
              <input type="text" className='shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:shadow-outline rounded-lg' id='name' placeholder='Enter Your Name' name='user_name' />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
              <input type="email" className='shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:shadow-outline rounded-lg' id='email' placeholder='Enter Your Email Address' name='user_email' />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
              <textarea className='shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:shadow-outline rounded-lg' id='message' placeholder='Drop your message' name='message' />
            </div>
            <div className='flex flex-col mb-4'>
              <input type="submit" value="Send" className='bg-black text-white rounded-xl px-3 py-2 cursor-pointer' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
