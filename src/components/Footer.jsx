import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between p-4 md:p-10 bg-[#202323] rounded-xl'>
      {/* Left Section */}
      <div className='w-full md:w-[30%] p-6 md:pt-20 md:pl-12 rounded-t-2xl md:rounded-l-2xl bg-[#CC4BAD]'>
        <img
          src='/Group 41 (1).png'
          alt='logo'
          className='pb-4 md:pb-10'
        />
        <p className='font-sans font-normal text-[14px] md:text-[18px] text-white pb-4'>
          1, Hughes Avenue, Yaba, Lagos. 
          Add any other address as well
        </p>
        <img 
          src='/Frame 47.png'
          alt='img'
          className='pb-10'
        />
        <h6 className='font-normal text-[12px] md:text-[14px] text-black pt-10 md:pt-[150px]'>
          © Copyright YCreators. A Harbor-Inc. organization
        </h6>
      </div>

      {/* Right Section */}
      <div className='flex flex-wrap w-full md:w-[70%] p-6 md:p-0 bg-[#202323] rounded-b-2xl md:rounded-r-2xl'>
        {/* Quick Links */}
        <ul className='w-full md:w-auto space-y-2 mt-6 md:mt-20 md:ml-10 font-normal font-sans text-white text-[14px] md:text-[16px]'>
          <li className='font-bold mb-4 md:mb-6'>Quick Links</li>
          <Link to="/"><li>Home</li></Link>
          <Link to='/Plan'><li>Plans</li></Link>
          <Link to="/Gallery"><li>Gallery</li></Link>
          <Link to="/Courses"><li>Get in touch</li></Link>
        </ul>

        {/* Programs */}
        <ul className='w-full md:w-auto space-y-2 mt-6 md:mt-20 md:ml-10 font-normal font-sans text-white text-[14px] md:text-[16px]'>
          <li className='font-bold mb-4 md:mb-6'>Programs</li>
          <Link to="/Service"><li>Bootcamps</li></Link>
          <Link to="/Service"><li>Robotics</li></Link>
          <Link to="/Service"><li>Physics</li></Link>
          <Link to="/Service"><li>Virtual Tech Camps</li></Link>
        </ul>

        {/* Social */}
        <ul className='w-full md:w-auto space-y-2 mt-6 md:mt-20 md:ml-10 font-normal font-sans text-white text-[14px] md:text-[16px]'>
          <li className='font-bold mb-4 md:mb-6'>Social</li>
          <Link to="/Service"><li>Instagram</li></Link>
          <Link to="/Service"><li>Facebook</li></Link>
          <Link to="/Service"><li>Twitter</li></Link>
          <Link to="/Service"><li>LinkedIn</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer
