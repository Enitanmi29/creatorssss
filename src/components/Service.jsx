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
          <h1 className='font-Nexa Bold font-bold text-[32px] md:text-[48px] flex justify-center text-center pt-6'>
            Our Current Programs
          </h1>

          <div className='opacity-1 ml-[300px] md:ml-[1200px]'>
              <img 
                src='/fluent_target-arrow-20-filled.png'
                alt=' arrow image'
                className='w-[60px] h-[60px] '
              /> 
            </div>

            <div className='opacity-1 ml-40 md:ml-[800px]'>
              <img 
                src='/path1538.png'
                alt='circle image'
                className='w-[42px] h-[41px] '
              /> 
            </div>

            <div className='opacity-1 ml-12 md:ml-20 pb-6'>
              <img 
                src='/Group 60.png'
                alt='image'
                className='w-[42px] h-[41px] '
              /> 
            </div>

            <div className='ml-12 md:ml-20 mb-8'> 
                    <img 
                      src='/Frame 37.png'
                      alt='frame image'
                      className='w-[1516px] h-auto md:h-[239.86px]'
                    />
            </div>
            <div className='mr-[49px] md:mr-[90px] mb-8'>  
                  <img 
                      src='/Frame 38.png'
                      alt='frame image'
                      className='w-[1516px] h-auto md:h-[239.86px] '
                    />
            </div>
        </div>

{/* WE CAN HELP YOUR CHILD SECTION */}
          <div className='flex flex-col md:flex-row mt-10'>
            <div className='w-auto md:w-[50%] px-6 md:px-20 pt-20 md:pt-40'>
              <h1 className='font-bold text-xl md:text-3xl text-[#333333] mb-6'>
                We can help your child become
                a world-class innovator
              </h1>
              <p className='font-normal text-[12px] md:text-[18px] text-[#000000] mb-6'>
                Lorem Ipsum stuff and stuff and all those text that is relevant to explaining what YCreators is about and what folks stand to benefit from being a part of YCreators rather than other people. This copy will be provided by the YCreators team.
              </p>
              <Link to="/Form1">
                <button className='bg-[#009499] py-2 px-6 text-white flex text-center border rounded-xl'>
                  Register your child
                </button> 
              </Link>
            </div>

            <div className='md:w-[50%] relative mt-10 md:mt-0 mb-[150PX] md:mb-0 mx-6'>
              <div className='ml-2 mt-20 absolute'>
                <img 
                src='/Mask Group (14).png'
                alt='img'
                className='w-[222px] h-auto md:h-[222px]'
                />
              </div>
              <div className='ml-64 mt-6 absolute'>
                <img 
                src='/Mask Group (14).png'
                alt='img'
                className='w-[222px] h-auto md:h-[222px]'
                />
              </div>
              <div className='ml-[450px] absolute'>
                <img 
                src='/ion_planet-outline.png'
                alt='img'
                className='w-[60px] h-auto md:h-[60px]'
                />
              </div>

              <div className='ml-56 mt-80 absolute'>
                <img 
                src='/Mask Group (14).png'
                alt='img'
                className='w-[222px] h-auto md:h-[222px]'
                />
              </div>
              <div className='absolute mt-20 ml-10'>
                <img 
                  src='/Ellipse 11.png'
                  className='w-[577.16px] h-auto md:h-[577.16px]'
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
                <p className='text-black text-[10px] md:text-sm font-normal text-center pt-2'>
                  Lorem Ipsum stuff and stuff and all those text that is relevant
                </p>

                <div className='pt-10'>
                  <div className='flex flex-wrap space-x-4 justify-center'>
                    {[...program, ...program].map((program, index) => (
                      <div key={index} className='w-[333px] h-[312px] bg-white rounded-lg shadow-md mb-6 mx-4 md:mx-0'>
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
                <div className='flex flex-col md:flex-row my-20'>
                    <div className='w-auto :md:w-[50%] relative px-6 md:px-20'>
                      <div className='ml-2 mt-20 absolute'>
                        <img 
                        src='/Mask Group (14).png'
                        alt='img'
                        className='w-[222px] h-auto md:h-[222px]'
                        />
                      </div>
                      <div className='ml-64 mt-6 absolute'>
                        <img 
                        src='/Mask Group (14).png'
                        alt='img'
                        className='w-[222px] h-auto md:h-[222px]'
                        />
                      </div>
                      <div className='ml-56 mt-80 absolute'>
                        <img 
                        src='/Mask Group (14).png'
                        alt='img'
                        className='w-[222px] h-auto md:h-[222px]'
                        />
                      </div>
                    </div>

                    <div className='w-auto md:w-[50%] mt-10 md:mt-40'>
                      <h1 className='font-bold text-xl md:text-3xl pr-4 md:pr-40 text-[#333333]'>
                        Check out our team of expert facilitators
                      </h1>
                      <p className='font-normal text-[12px] md:text-[16px] pr-4 md:pr-40 text-[#000000] pt-6'>
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
                    

  {/* FREQUENTLY ASKED SECTION */}
                <div className='mb-40 md:mb-60'>
                    <h1 className='flex justify-center font-sans font-bold text-[24px] md:text-[40px] mx-2 md:mx-0'>
                        Frequently Asked Questions
                    </h1>

                    <div className='relative w-full'>
                       <div className='absolute ml-2 md:ml-[800px]'>
                         <img src='/path1538 (2).png' className='w-[654px] h-[554px]'/>
                       </div>    
                        <div className='mb-4 mx-2 md:mx-40 pt-20'>
                                {Questions.map ((Questions, index) =>(
                                <p key={index} className=' bg-white border-2 border-[#C9C9C9] rounded-lg text-[16px] text-[#737373] font-sans font-normal ml-0 md:ml-10 py-4 pl-2 md:pl-10 mb-3'>
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