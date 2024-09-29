import React from 'react';
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';

function Home() {
  const cvLink = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"; // Replace with your actual file ID

  return (
    <div name="Home" className="container max-w-screen-2xl mx-auto min-h-full px-4 md:px-20  mb-44">
      
      <div className='flex flex-col-reverse md:flex-row mt-24 mb-10 md:mb-40'>
        <div className='md:w-1/2 mt-12 md:mt-24'>
          <span className='text-xl'>Welcome In My Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped className='text-red-600'
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <p className='mt-5 text-sm md:text-md text-justify'>
            "As a passionate web developer, I specialize in creating dynamic and responsive websites using modern technologies like React, JavaScript, HTML, CSS, and the MERN stack..."
          </p>

          <div className='flex mt-5 justify-between'>
            <div>
              <h2>Available on</h2>
              <div className="flex space-x-3 my-3">
                
                <FaSquareFacebook className='text-xl md:text-3xl hover:scale-110 text-blue-800'/>
               <a href="https://www.linkedin.com/in/himanshu-sharma-h07/">
                <IoLogoLinkedin className='text-xl md:text-3xl hover:scale-110 text-blue-700'/>
                </a>
                <IoLogoYoutube className='text-xl md:text-3xl hover:scale-110 text-red-700'/>
                <FaTelegram className='text-xl md:text-3xl hover:scale-110 text-blue-600'/>
              </div>
            </div>
            <div>
              <h2>Currently Working on</h2>
              <div className="flex space-x-3 my-3 justify-center">
                <SiMongodb className='text-xl md:text-3xl hover:scale-110 text-green-800'/>
                <SiExpress className='text-xl md:text-3xl hover:scale-110 text-green-900'/>
                <FaReact className='text-xl md:text-3xl hover:scale-110 text-blue-800'/>
                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 text-green-600'/>
              </div>
            </div>
          </div>

          {/* Add the download CV button here */}
          <div className='mt-5'>
            
            <a 
              href="https://drive.google.com/file/d/1cqiILxk2CFKCQ_QBk7ajyy1JL9UU7DVj/view?usp=drive_link"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
          </div>

        </div>

        {/* Image section */}
        <div className='md:w-1/2 flex justify-center items-center md:mb-0'>
          <img 
            src="https://avatars.githubusercontent.com/u/143833074?v=4" 
            alt="Profile" 
            className='h-56 w-56 md:h-96 md:w-96 rounded-full'  
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
