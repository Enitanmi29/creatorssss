import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-white">
      <div className=' bg-cover bg-center opacity-100'
           style={{ backgroundImage: `url("/Mask Group (17).png")` }}>
        <div >
          <Navbar />
        </div >
        <h1 className="text-white text-4xl text-center font-bold flex justify-center mt-60 pt-20">
            The big ideas of tomorrow are in the problems of today
        </h1>
        <p className='flex justify-center mt-4 text-white text-sm text-center font-normal pt-4'>
          Lorem Ipsum stuff and stuff and all those text that is relevant
        </p>
         
        <div className='pb-60 pt-10'>
          <Link to='/Form1'>
          
            <button className='border border-red-500 rounded-lg bg-[#EE3726] text-white font-sans font-bold
              text-sm w-[194px] h-[52px] flex justify-center items-center mx-auto mt-12'>
                Get in touch
            </button> 
          </Link>
        </div>
          
        
      </div>

      <div className='mt-20 md:mt-60'>
        <div className='flex flex-col md:flex-row bg-[#FEF7E8] rounded-lg mx-6'>
          <div className='w-full md:w-[50%]'>
            <img 
              src='/Group 73.png'
              alt=''
              className='relative mx-2 md:pl-10'
            />
          </div>

          <div className='w-full md:w-[50%] mx-2 md:pl-10 mt-6 md:mt-40'>
            <h1 className='font-sans font-bold text-black text-lg md:text-xl'>
              Building things is a bit magical, we have the recipes
            </h1>
            <p className='font-sans font-normal text-black text-[12px] md:text-sm pt-2 md:pt-4'>
              Lorem Ipsum stuff and stuff and all those text that is relevant
            </p>
          </div>
        </div>
        <div>
          <img 
              src='/Group 62.png'
              alt='image'
              className='pl-20'
            />
        </div>
      </div>

{/* About Ycreators section */}
        <div className='pt-6 md:pt-4'>
            <div className='flex justify-center text-center'>
              <h1 className='font-sans font-bold text-[32px] md:text-[48px] text-[#333333]'>
                About YCreators
              </h1>
              <img 
              src='/ion_planet-outline.png'
              alt='image'
              className='w-[60px] h-[60px]'
            />
            </div>

            <p className='font-normal text-sm md:text-lg flex justify-center text-center mx-6 md:mx-40 pt-4'>
              Lorem Ipsum stuff and stuff and all those text that is relevant to explaining what YCreators is about and what folks stand to benefit from being a part of YCreators rather than other people.
               This copy will be provided by the YCreators team. 
               thaoijaljsjkjbjwuwe khiqwu[q[auw ohwe[;;sdj kdhsieuwiwbb hbsahaaiw 
            </p>

            <div className='opacity-10 ml-10 pb-10 pt-10'>
              <img 
                src='/path1538.png'
                alt='image'
                className='w-[156px] h-[156px] '
              /> 
            </div>

            <div className='ml-12 md:ml-20 mb-8'> 
                    <img 
                      src='/Frame 37.png'
                      alt='image'
                      className='w-full md:w-[1516px] h-[239.86px]'
                    />
            </div>
            <div className='mr-[50px] md:mr-[90px] mb-8'>  
                  <img 
                      src='/Frame 38.png'
                      alt='image'
                      className='w-full md:w-[1516px] h-[239.86px] '
                    />
            </div>
            
            <p className='pt-20 font-normal text-black text-sm md:text-lg mx-6 md:mx-60 pb-20 flex justify-center text-center'>
            Lorem Ipsum stuff and stuff and all those text that is relevant to explaining what YCreators is about and what folks stand to benefit from being a part of YCreators rather than other people.
             This copy will be provided by the YCreators team. thaoijaljsjkjbjwuwe khiqwu[q[auw ohwe[;;sdj kdhsieuwiwbb hbsahaaiw 
            </p>
        </div>

{/* CONTACT SECTION */}
              <div className='flex pb-20 pt-20'
              style={{backgroundImage: `url('/Rectangle 30.png')`}}>
                <div className='w-[50%] text-start'>
                  <h1 className='font-bold text-2xl text-black pl-20 pb-4 '>
                    Contact Address
                  </h1>
                  <p className='font-normal text-sm text-black pl-20'>
                     1, Hughes Avenue, Yaba, Lagos. Add any other address as well
                  </p>
                </div>
                <div className='w-[50%] '>
                  <h1 className='font-bold text-2xl text-black pl-20 pb-4'>
                    Open Hours
                  </h1>
                  <p className='font-normal text-sm text-black pl-20 pb-3'>
                  8am - 5pm daily on weekdays
                  </p>
                  <p className='font-normal text-sm text-black pl-20'>
                    9am - 4pm on weekends
                  </p>
                </div>
              </div>
 {/* NEWS LETTER SECTION */}
              <div className='bg-[#009499] rounded-lg mx-6 md:mx-20 my-20'>
                <h1 className='text-white text-lg md:text-2xl font-bold pl-8 md:pl-20 pt-10 pb-4'>
                  Newsletter Subscription
                </h1>
                <div className='flex flex-col md:flex-row items-center py-8 pl-8 md:pl-20'> 
                  <input 
                  className='pl-4 w-[300px] md:w-[553px] border-2 border-[#4d7475] rounded-xl bg-[#009499] 
                  font-sans font-normal text-[14px] py-4 mb-10 text-[#FFFFFF]'
                  type='email'
                  id=''
                  placeholder='Enter email address'
                  />
                  <button className='bg-white font-bold border border-blue-200 rounded-xl ml-0 md:ml-8 px-6 md:px-4 py-4 mb-10'>
                      Subscribe           
                  </button>
                </div>    
              </div>
  {/* FOOTER SECTION */}
            <div>
                <Footer />
            </div>

    </div>
  )
}

export default About