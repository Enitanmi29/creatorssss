import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Advantage, course, Questions, YCreators } from '../constants'
import Footer from './Footer'
import Reviews from './Reviews'


const Home = () => {
    const [selectedOption, setSelectedOption] = useState("")
     const navigate = useNavigate();
    
    const handleSelectChange = (e) => {
        const selectedValue=e.target.value
        setSelectedOption (selectedValue);
    
    };

  return (
    <>

    <div className='bg-[#fffaef] pt-20 pb-40'>
        <div className='flex justify-end pr-8'>
            <img src='/fluent_target-arrow-20-filled.png'
            alt='arrow image'/>
        </div>

        <div className='mt-1 flex justify-between items-center px-8 md:px-20'>
                <img src='/Group 60.png' alt='circle image' className='w-[10%] md:w-auto'/>
                <img src='/path1538.png' alt='star image' className='w-[10%] mr-10 md:mr-40 md:w-auto'/>
        </div>


        <div className='block font-bold text-center md:text-left text-[36px] md:text-[48px] font-Nexa mt-8 px-8 md:ml-20'>
            Big Bold Text that works 
            <span className='block' >as a <span className='text-red-500'>headline copy</span></span>
           <p className='font-Open Sans font-normal text-[16px] md:text-[20px] mt-4'>
           Lorem Ipsum stuff and stuff and all those text that is relevant
           </p> 
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start mt-10 px-8 md:ml-20'>
          <Link to="/Form1"> 
             <button className='bg-[#009499] text-white w-full md:w-[191px] h-[52px] rounded-[10px] mr-0 md:mr-6 mb-4 md:mb-0'>
                Become a Creator
            </button>

            <button className='bg-[#FEF9EC] text-[#009499] font-bold w-full md:w-[210px] h-[52px] rounded-[10px] border border-blue-400 border-1'>
                Book a Consultation
            </button>
         </Link>
        </div>
    </div>

{/* BECOME A CREATOR SECTION */}
    <div className='bg-white ml-20 pt-20 pb-40'>
        <div className='flex flex-col md:flex-row items-start justify-between mb-10 md:mb-60'>
            <div className='relative w-full md:w-[50%] mb-40 md:mb-0'>
                <img 
                    src='/Rectangle 6.png' 
                    alt='image' 
                    className='top-10 w-full md:w-[529px] h-auto rounded-[20px] z-0 opacity-[80%]'
                />

                <img 
                     src='/Mask Group (14).png' 
                     alt='image' 
                     className='absolute top-20 left-10 w-full md:w-[529px] h-auto rounded-[20px] z-10'
                    />

                <img 
                     src='/ion_planet-outline.png' 
                     alt='image' 
                     className='absolute top-4 left-[520px] w-full md:w-[60px] h-auto z-10'
                />
                
            </div>

            <div className='w-full md:w-[50%] md:ml-60'>
                <div className='text-[#EE3726] font-Work Sans font-bold text-[16px] md:text-[32px]'>
                    How YCreators Works
                </div>
                <div>
                    <ul className='ml-12'>
                        {YCreators.map((YCreators, index) =>(
                            <li key={index}>
                                <a>
                                <h1 className='pt-10 pb-1 text-[14px] md:text-[20px]'> {YCreators.header}</h1>
                                <p className='text-[6px] md:text-[10px]'>{YCreators.paragraph}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className='mt-40 mb-8 flex justify-center'>
        <Link to="/Form1">
            <button className='items-center text-white bg-[#009499] w-[239px] h-[52px] rounded-[10px]'>
                    Become a Creator
            </button>
        </Link>
        </div>
    </div>

    {/* PERFECT COURSE SECTION */}
    <div className='mx-6 bg-[#f0efef] rounded-md pb-10'>
        <div>
            <div className='w-[102.83px] ml-[1150px]'> <img src='/path2828.png'/> </div>
            <h1 className='ml-8 font-Work Sans font-bold text-[32px] text-[#438CFD]'>
            Find your perfect course
            </h1>
            <p className=' ml-8 font-Open Sans font-normal text-[16px]'>
            Lorem Ipsum stuff and stuff and all those text that is relevant
            </p>

            <div className='ml-8 mt-10'>
                <p className='text-blue-300'> filter by category:
                    <select 
                     value={selectedOption}
                     onChange={handleSelectChange}
                     className='bg-[#f0efef]  ml-2 rounded-xl'>
                        <option className='' value=""> </option>
                        <option className='' value=""> Standard </option>
                        <option className='' value="premium">Premium </option>
                    </select>
                </p>
                <p className='text-green-300'> filter by range:
                <select 
                     value={selectedOption}
                     onChange={handleSelectChange}
                     className='bg-[#f0efef]  ml-2 rounded-xl'>
                        <option className='' value="">  </option>
                        <option className='' value=""> 0-10 </option>
                        <option className='' value="premium">11-20</option>
                    </select>
                </p>
            </div>

            <div className='mx-4'>
                <div className='flex justify-between '>
                    <div className='flex w-[50%]'>
                            <ul className=' bg-white rounded-xl border ml-4 mt-2'>
                                {course.map((course,index) => (
                                    <li key={index} className='rounded-xl border mb-4 '>
                                        <img 
                                            src={course.image}
                                            alt='image'
                                            className='w-[25%]' 
                                        />
                                        <div className='mt-4 ml-4'>
                                            <h1 className='w-[75%] font-bold text-[15px]'>{course.title} </h1>      
                                            <p> {course.text}</p>
                                            <Link to="/Courses" className='text-[10px] underline text-blue-300'> 
                                                    {course.link} 
                                            </Link>
                                        </div>             
                                    </li>
                                ))}
                            </ul>      
                            </div>
                        <div className='flex w-[50%]'>
                           <ul className=' bg-white rounded-xl border ml-4 mt-2'>
                              {course.map((course,index) => (
                                <li key={index} className='rounded-xl border mb-4'>
                                    <img 
                                        src={course.image}
                                        alt='image'
                                        className='w-[25%]' 
                                    />
                                    <div className='mt-4 ml-4'>
                                        <h1 className='w-[75%] font-bold text-[15px]'>{course.title} </h1>      
                                        <p> {course.text}</p>
                                        <Link to="/Courses" className='text-[10px] underline text-blue-300'> 
                                                {course.link} 
                                        </Link>
                                    </div>             
                                </li>
                             ))}
                           </ul>      
                        </div>
                </div>
            </div>

            <div className=' flex items-center justify-center mt-10 '>
                <Link to="/Courses">
                    <button className='w-[181px] h-[52px] border bg-[#438CFD] text-white rounded-md mb-10'>
                            View more
                    </button>   
                </Link>
            </div>
        </div>
    </div>

{/* BOOK A CONSULTATION SECTION */}
    <div className='bg-[#009499] pl-60 mt-40 pt-20'>
        <h1 className='font-Work Sans font-bold text-[32px] text-white'>
            Not feeling any of the jargon we just said?
        </h1>
        <p className='font-Work Sans font-medium text-[14px] text-white pt-2 w-[700px] h-[46px]'>
            Book a consultation session with one of our experts and we will help you make the best decision
            for your child
        </p>
        <Link to="/Service">
            <button className='w-[218px] h-[62px] mt-10 border bg-white text-black rounded-2xl mb-10'>
                Book a Consultation
            </button>
        </Link>
    </div>

{/* THE YCREATORS SECTION */}
    <div className='bg-[#e2f3f3] pb-20'>
        <div className=' flex justify-center pt-40 pb-20 font-bold text-[32px]'>
          The YCreators Advantage
        </div>

        <div className='flex justify-between pb-20 mx-40'>
                <div className='flex flex-row gap-x-4'>
                    {Advantage.map((advantage, index) => (
                        <div key={index} className='border rounded-xl bg-white w-[365px] p-4'>
                            <h1 className='flex justify-center mt-12 mb-4 font-Montserrat font-bold text-[20px] text-[#009499]'>
                                {advantage.header}
                            </h1>
                            <p className='mx-2 mb-8 font-Open Sans font-normal text-[14px] text-[#333333]'>
                                {advantage.paragraph}
                            </p>
                        </div>
                    ))}
                </div>                
       </div>


        <div className=' flex border bg-[#FFD67B] ml-28 my-20 rounded-xl mx-20 w-[1100px]'> 
            <div className='w-[50%] flex'>
               <div className='relative ml-[80px]'>
                    <img 
                    src='/Ellipse 14.png'
                    alt='image'
                    className='w-[436px] h-[436px]'
                    />
               </div>
               <div className=' absolute mt-[120px] ml-[210px]'>
               <img 
                    src='/Mask Group (18).png'
                    alt='image centre'
                    className='w-[136px] h-[186px]'
                    />
               </div>
               <div className=' absolute mt-[0px] ml-[100px]'>
               <img 
                    src='/Mask Group (18).png'
                    alt='image 1'
                    className='w-[100px] h-[100px]'
                    />
               </div>
               <div className=' absolute mt-[40px] ml-[390px]'>
               <img 
                    src='/Mask Group (19).png'
                    alt='image 2'
                    className='w-[100px] h-[100px]'
                    />
               </div>
               <div className=' absolute mt-[280px] ml-[380px]'>
               <img 
                    src='/Mask Group (19).png'
                    alt='image 3'
                    className='w-[100px] h-[100px]'
                    />
               </div>
               <div className=' absolute mt-[400px] ml-[230px]'>
               <img 
                    src='/Mask Group (18).png'
                    alt='image 4'
                    className='w-[100px] h-[100px]'
                    />
               </div>
               <div className=' absolute mt-[300px] ml-[60px]'>
               <img 
                    src='/Mask Group (20).png'
                    alt='image 5'
                    className='w-[100px] h-[100px]'
                    />
               </div>
            </div>

            <div className='w-[50%] mt-40 ml-40'>
                <h1 className='w-[334px] text-[#333333] text-[20px] font-sans font-bold'> 
                    Join the Community on ClassDojo
                </h1>
                <p className='w-[399px] text-[#333333] text-[14px] mt-4 font-sans font-normal'>
                    Lorem Ipsum stuff and stuff and all those text that is relevant
                </p>
                <Link to="/Form1">
                    <button className='w-[189px] border bg-white rounded-xl mt-8 p-4 text-[#333333] font-sans font-bold'>
                        Join Community
                    </button>  
                </Link>
            </div>
        </div>
    </div>

{/* SEND A REQUEST SECTION */}
        <div className='font-sans font-bold text-[32px] flex justify-center mt-20 mb-20'>
        Send a Course Request   
        </div>

        <div className='bg-white flex ml-20 mb-40'>
            <div className='w-[50%]'>
                <div className='border-[#009499] border-2 bg-[#1A2960] rounded-xl w-[645px] h-[626px]'>
                    <div className=''>              
                        <input
                            className=' pl-4 mb-8 ml-10 w-[553px] h-[83px] border-2 rounded-xl bg-[#FFFFFF1F] font-sans font-normal text-[14px] text-[#FFFFFF] mt-6'
                            type='text'
                            id='name'
                            placeholder='Name'
                        />
                    </div>
                    <div className=''>          
                            <input
                                className=' pl-4 mb-8 ml-10 w-[553px] h-[83px] border-2 rounded-xl bg-[#FFFFFF1F] font-sans font-normal text-[14px] text-[#FFFFFF] mt-6'
                                type='tel'
                                id='number'
                                placeholder='Phone number'
                            />
                    </div>
                    <div className=''>
                            <input
                                className=' pl-4 mb-8 ml-10 w-[553px] h-[83px] border-2 rounded-xl bg-[#FFFFFF1F] font-sans font-normal text-[14px] text-[#FFFFFF] mt-6'
                                type='email'
                                id='email'
                                placeholder='Email address'
                            />
                    </div>
                    <div className=' flex justify-center items-center bg-white text-blue-800 border rounded-xl w-[553px] h-[82px] ml-10 font-bold'>
                        <button>
                            Send a Course Request
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-[50%] ml-20 mt-20'>
                <h1 className='text-[#009499] text-[20px] font-sans font-bold'>
                    We will get Back to you in Less
                    Than a day.
                </h1>
                <div className='mt-8'>
                    <div>
                       <img src='/Group 3117.png' alt='text' className='w-[369px] h-[66px]'/> 
                    </div>
                    <div className='mt-8'>
                       <img src='/Group 3117.png' alt='text' className='w-[369px] h-[66px]'/> 
                    </div>
                    <div className='mt-8'>
                       <img src='/Group 3117.png' alt='text' className='w-[369px] h-[66px]'/> 
                    </div>
                </div>
            </div>
        </div>

{/* Here is why our People Love us section */}
            <div className='bg-white '>
                <div className='text-[#333333] text-[32px] flex justify-center font-sans font-bold bg-white mb-20'>
                    Here is why our People Love us
                </div>
                <div className='mx-40 mb-20'>
                    <img
                        src='/Group 83.png'
                        alt='vid'
                        className=''
                    />
                </div>
                <div className='rounded-lg mb-40 mt-10 pt-20'>
                    <Reviews className='font-bold ml-20 text-[32px] font-sans text-[#333333]' />        
                </div>
            </div>

{/* Frequently Asked Questions */}
                <div className='mb-60'>
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

{/* Footer */}
            <div className='mb-40'>
                <Footer />
            </div>
    </>
  )
}

export default Home