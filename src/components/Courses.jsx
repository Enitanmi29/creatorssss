import React, { useState } from 'react';
import Navbar from './Navbar';
import {courses} from '../constants'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Courses = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <div className='bg-[#e2f3f3] pb-10'>
        <Navbar />
        <h1 className='font-Nexa Bold font-bold text-[28px]  md:text-[48px] flex justify-center text-center pt-6'>
          Our Courses
        </h1>

        <div className='opacity-1 ml-[310px] md:ml-[1200px]'>
          <img 
            src='/fluent_target-arrow-20-filled.png'
            alt='arrow image'
            className='w-[60px] h-[60px]'
          /> 
        </div>

        <div className='opacity-1 ml-[150px] md:ml-[800px]'>
          <img 
            src='/path1538.png'
            alt='circle image'
            className='w-[42px] h-[41px]'
          /> 
        </div>

        <div className='opacity-1 ml-10 md:ml-20 pb-6'>
          <img 
            src='/Group 60.png'
            alt='image'
            className='w-[42px] h-[41px]'
          /> 
        </div>

        <div className='ml-20 mb-8'> 
          <img 
            src='/Frame 37.png'
            alt='image'
            className='w-[1516px] h-auto md:h-[239.86px]'
          />
        </div>
        <div className='mr-[90px] mb-8'>  
          <img 
            src='/Frame 38.png'
            alt='image'
            className='w-[1516px] h-auto md:h-[239.86px]'
          />
        </div>
      </div>

      {/* FIND YOUR PERFECT COURSE */}
      <div className='pl-4 md:pl-10 mt-20 mx-4 md:mx-20'>
        <h1 className='font-bold text-xl md:text-3xl text-[#438CFD]'>
          Find your perfect course
        </h1>
        <p className='font-normal text-sm pt-4'>
          Lorem Ipsum stuff and stuff and all those text that is relevant
        </p>

  {/* Dropdown Box */}
          <div className='flex flex-col md:flex-row pt-10 pb-4'>
            <div className='mt-4 font-bold'>
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className='block w-64 px-4 py-2 bg-white border border-gray-100 rounded-md shadow-2xl focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300'
              >
                <option value="">Select a Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
          </div>
          <div className='mt-4 ml-4 font-bold'>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className='block w-64 px-4 py-2 bg-white border border-gray-100 rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300'
            >
              <option value="">Category</option>
              <option value="Beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className='mt-4 ml-4 font-bold'>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className='block w-64 px-4 py-2 bg-white border border-gray-100 rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300'
            >
              <option value="">Age group</option>
              <option value="kids">Kids</option>
              <option value="youth">Youth</option>
              <option value="adult">Adult</option>
            </select>
          </div>
        </div>

        <ul className='block'>
          {courses.map((courses,index) =>(
            <div key={index} className='flex mb-2 mt-4 border-2 rounded-3xl'>
                <img 
                  src={courses.image}
                  alt='image'
                />
                <div className='pl-4 pt-4'>
                  <h1 className='font-bold pb-2'>{courses.title} </h1>
                  <p className='text-sm pb-2'>{courses.text}</p>
                  <p className='text-sm pb-2 text-green-400'>{courses.Age}</p>
                  <Link to="/Service" className='font-sm pb-2 text-blue-400'>
                    {courses.link}
                  </Link>
                  <p className='text-sm pb-2'>{courses.text1}</p>         
               </div>            
            </div>
          ))}
        </ul>  
      </div>

      <div className='pt-20'>
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
