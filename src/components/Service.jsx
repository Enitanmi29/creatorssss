import React from 'react'
import Navbar from './Navbar'
import { program, Questions } from '../constants'
import Reviews from './Reviews'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className=''>
        <div className='bg-[#e2f3f3]'>
          <Navbar />
          <h1 className='font-Nexa Bold font-bold text-[48px] flex justify-center text-center pt-6'>
            Our Current Programs
          </h1>

          <div className='opacity-1 ml-[1200px]'>
              <img 
                src='/fluent_target-arrow-20-filled.png'
                alt='image'
                className='w-[60px] h-[60px] '
              /> 
            </div>

            <div className='opacity-1 ml-[800px]'>
              <img 
                src='/path1538.png'
                alt='image'
                className='w-[42px] h-[41px] '
              /> 
            </div>

            <div className='opacity-1 ml-20 pb-6'>
              <img 
                src='/Group 60.png'
                alt='image'
                className='w-[42px] h-[41px] '
              /> 
            </div>

            <div className='ml-20 mb-8'> 
                    <img 
                      src='/Frame 37.png'
                      alt='image'
                      className='w-[1516px] h-[239.86px]'
                    />
            </div>
            <div className='mr-[90px] mb-8'>  
                  <img 
                      src='/Frame 38.png'
                      alt='image'
                      className='w-[1516px] h-[239.86px] '
                    />
            </div>
        </div>

{/* WE CAN HELP YOUR CHILD SECTION */}
          <div className='flex mt-20'>
            <div className='w-[50%] px-20 pt-40'>
              <h1 className='font-bold text-3xl text-[#333333] mb-6'>
                We can help your child become
                a world-class innovator
              </h1>
              <p className='font-normal text-[18px] text-[#000000] mb-6'>
                Lorem Ipsum stuff and stuff and all those text that is relevant to explaining what YCreators is about and what folks stand to benefit from being a part of YCreators rather than other people. This copy will be provided by the YCreators team.
              </p>
              <Link to="/Form1">
                <button className='bg-[#009499] py-2 px-6 text-white flex text-center border rounded-xl'>
                  Register your child
                </button> 
              </Link>
            </div>

            <div className='w-[50%] relative'>
              <div className='ml-2 mt-20 absolute'>
                <img 
                src='/Mask Group (14).png'
                alt='img'
                className='w-[222px] h-[222px]'
                />
              </div>
              <div className='ml-64 mt-6 absolute'>
                <img 
                src='/Mask Group (14).png'
                alt='img'
                className='w-[222px] h-[222px]'
                />
              </div>
              <div className='ml-[450px] absolute'>
                <img 
                src='/ion_planet-outline.png'
                alt='img'
                className='w-[60px] h-[60px]'
                />
              </div>

              <div className='ml-56 mt-80 absolute'>
                <img 
                src='/Mask Group (14).png'
                alt='img'
                className='w-[222px] h-[222px]'
                />
              </div>
              <div className='absolute mt-20 ml-10'>
                <img 
                  src='/Ellipse 11.png'
                  className='w-[577.16px] h-[577.16px]'
                />
              </div>
            </div>
          </div>

{/* PROGRAM SECTION     */}
            <div className='mt-[400px] mx-6 bg-[#C4C4C4] rounded-lg relative'>
               <div className='ml-[1100px] absolute'>
                <img 
                    src='/path2828.png'
                    className='w-[102.83px] h-[102.83px]'
                  />
                </div>
                <h1 className='text-[#009499] text-3xl font-bold text-center pt-10'>
                  What’s in this program
                </h1>
                <p className='text-black text-sm font-normal text-center pt-2'>
                  Lorem Ipsum stuff and stuff and all those text that is relevant
                </p>

                <div className='pt-10'>
                  <div className='flex flex-wrap space-x-4 justify-center'>
                    {[...program, ...program].map((program, index) => (
                      <div key={index} className='w-[333px] h-[312px] bg-white rounded-lg shadow-md mb-6'>
                        <img 
                          src={program.image}
                          alt={program.header} 
                          className='h-[141px] w-[342.83px] object-cover rounded-md'
                        />
                        <h1 className='text-lg font-bold px-12 mt-4'>
                          {program.header}
                        </h1>
                        <p className='text-gray-600 px-12 mt-2'>
                          {program.paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='pb-20'>
                  <Link to='/Form1'>
                    <button className='bg-[#009499] py-2 px-6 text-white flex text-center justify-center mx-auto mt-10 border rounded-xl'>
                      Register your child
                    </button> 
                  </Link>
                </div>

                <div className='ml-[-30px] mt-[-130px] absolute'>
                  <img 
                    src='/path1836.png'
                    alt=''
                    className='w-[156px] h-[149.32px]'
                  />
                </div>
              </div>

{/* Team of expert section */}
                <div className='flex my-20'>
                    <div className='w-[50%] relative px-20'>
                      <div className='ml-2 mt-20 absolute'>
                        <img 
                        src='/Mask Group (14).png'
                        alt='img'
                        className='w-[222px] h-[222px]'
                        />
                      </div>
                      <div className='ml-64 mt-6 absolute'>
                        <img 
                        src='/Mask Group (14).png'
                        alt='img'
                        className='w-[222px] h-[222px]'
                        />
                      </div>
                      <div className='ml-56 mt-80 absolute'>
                        <img 
                        src='/Mask Group (14).png'
                        alt='img'
                        className='w-[222px] h-[222px]'
                        />
                      </div>
                    </div>

                    <div className='w-[50%] mt-40'>
                      <h1 className='font-bold text-3xl pr-40 text-[#333333]'>
                        Check out our team of expert facilitators
                      </h1>
                      <p className='font-normal text-[16px] pr-40 text-[#000000] pt-6'>
                        Lorem Ipsum stuff and stuff and all those text that is relevant to explaining what YCreators is about and what folks stand to benefit from being a part of YCreators rather than other people. This copy will be provided by the YCreators team.
                      </p>
                      <Link to="/Form1" className=''>
                        <button className='bg-[#009499] py-2 px-6 text-white flex text-center mt-10 border rounded-xl'>
                            Register your child
                        </button>
                      </Link>
                    </div>
                </div>

  {/* REVIEWS SECTION */}
                    <div className='pt-20'>
                        <Reviews />
                    </div>

  {/* FREQUENTLY ASKED SECTION */}
                <div className='mb-60 mt-20'>
                    <h1 className='flex justify-center font-sans font-bold text-[40px]'>
                        Frequently Asked Questions
                    </h1>

                    <div className='relative'>
                       <div className='absolute ml-[800px]'>
                         <img src='/path1538 (2).png' className='w-[654px] h-[554px]'/>
                       </div>    
                        <div className='mb-4 mx-40 pt-20'>
                                {Questions.map ((Questions, index) =>(
                                <p key={index} className=' bg-white border-2 border-[#C9C9C9] rounded-lg text-[16px] text-[#737373] font-sans font-normal ml-10 py-4 pl-10 mb-3'>
                                    {Questions.paragraph}
                                </p>
                            ))}
                       </div> 
                    </div>
                </div>

  {/* FOOTER SECTION */}
                  <div>
                    <Footer />
                  </div>

    </div>
  )
}

export default Service