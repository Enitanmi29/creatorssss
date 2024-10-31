import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='justify-between'>
            <div className='flex justify-between pb-10'>
                <div className='border rounded-l-2xl bg-[#CC4BAD] w-[30%] pt-20 pl-12'>
                    <img
                        src='/Group 41 (1).png'
                        alt='logo'
                        className='pb-10'
                    />
                    <p className='font-sans font-normal text-[18px] text-white pb-4'>
                        1, Hughes Avenue, Yaba, Lagos. 
                        Add any other address as well
                    </p>
                    <img 
                    src='/Frame 47.png'
                    alt='img'
                    className=''
                    />
                    
                    <h6 className='font-normal text-[14px] text-black pt-[150px]'>
                         (c) Copyright YCreators. A Harbor-Inc. organization
                    </h6>
                
                </div>

                <div className='flex border rounded-r-2xl bg-[#202323] w-[70%] pb-60'>
                   <ul className='space-y-2 mt-20 ml-60 font-normal font-sans text-white text-[16px]'>
                        <li className='font-bold mb-6'> Quick Links </li>
                        <Link to="/"><li> Home </li> </Link>
                        <Link to='/Plan'> <li> plans </li> </Link>
                        <Link to="/Gallery"> <li> Gallery </li> </Link>
                        <Link to="/Courses"> <li> Get in touch </li> </Link>       
                   </ul> 
                   <ul className='space-y-2 mt-20 ml-20 font-normal font-sans text-white text-[16px]'>
                        <li className='font-bold mb-6'> Programs </li>
                        <Link to="/Service"> <li> Boothcamps </li> </Link>
                        <Link to="/Service"> <li> Robotics </li> </Link>
                        <Link to="/Service"> <li> Physics </li> </Link>
                        <Link to="/Service"> <li> Virtual Tech Camps </li> </Link>       
                   </ul> 
                   <ul className='space-y-2 mt-20 ml-20 font-normal font-sans text-white text-[16px]'>
                        <li className='font-bold mb-6'> Social </li>
                        <Link to="/Service"> <li> Instagram</li> </Link>
                        <Link to="/Service"> <li> Facebook </li> </Link>
                        <Link to="/Service"> <li> Twitter </li> </Link>
                        <Link to="/Service"> <li> LinkedIN </li> </Link>
                   </ul> 
                </div>
            </div>
     </div>
  )
}

export default Footer