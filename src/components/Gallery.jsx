import React, {useState} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Gallery2 from './Gallery2'

const ToggleBar = ({activeTab,setActiveTab}) => (
  <div className="flex bg-gray-200 rounded-lg p-2 mx-6 md:mx-[565px] my-6 md:mb-8 md:mt-8">
    <button
     onClick={() => setActiveTab ('pictures')}
     className={`px-6 py-2 rounded-l-lg ${
        activeTab === 'pictures' ? 'bg-gray-200 text-black' : 'bg-white text-gray-700'
        }`}>
      Pictures
    </button>
    <button
     onClick={() => setActiveTab ('videos')}
     className={`px-6 py-2 rounded-r-lg ${
      activeTab === 'videos' ? 'bg-gray-200 text-black' : 'bg-white text-gray-700'
    }`}>
      Videos
    </button>
  </div>
)

  const Gallery = () => {
    const [activeTab, setActiveTab] = useState('pictures')
    if (activeTab === 'videos')  {
      return  <Gallery2 />;
      } else (activeTab === 'pictures')  
    return (
      <div>
          <div className='bg-[#f0ccc9] rounded-br-[50px] rounded-bl-[50px]' >
              <Navbar />

            <div className='pb-20'>
              <img
                src='/path1538.png'
                alt='circle image'
                className='w-[26px] h-[26px] ml-4 md:ml-[350px] mt-12 opacity-[80%]' 
              />

              <img
                src='/path1538.png'
                alt='circle image'
                className='w-[46.34px] h-[46.34px] ml-8 md:ml-[850px] opacity-[80%]' 
              />

              <h1 className=' flex font-bold justify-center text-5xl'>
                  Gallery
              </h1>

              <img
                src='/path3004.png'
                alt=''
                className='w-[20.08px] h-[20.08x] ml-6 md:ml-[250px] opacity-[80%]' 
              />

              <img
                src='/fluent_target-arrow-20-filled.png'
                alt='arrow image'
                className='w-[60px] h-[60px] ml-20 md:ml-[1000px] opacity-[80%]' 
              />

              <img
                src='/Group 60.png'
                alt=''
                className='w-[42px] h-[41px] ml-[70px] opacity-[80%]' 
              />
            </div>     
        </div>
{/* TOGGLEBAR COMPONENT */}
            <ToggleBar activeTab={activeTab} setActiveTab={setActiveTab} />

{/* ROBOTIC SECTION */}
            {activeTab === 'pictures' && (
          <div className='pl-4 md:pl-60'>
             <h1 className='font-bold text-lg text-[#333333] mt-20 pb-6 '>
                Robotics Sessions, VI
             </h1>

             <div className='flex'>
                <img 
                  src='/Mask Group (21).png'
                  alt='image'
                  className='w-[467px] h-auto md:h-[376px] ml-[7px] '
                />

                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[306px] ml-[20px]'
                />

                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[306px] ml-[20px]'
                />
             </div>

             <div className='flex'>
                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[152px] ml-[7px] mt-10 '
                />

                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[152px] ml-[20px] mt-10'
                />

                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[467px] h-auto md:h-[222px] ml-[20px] mt-[-30px]'
                />
            </div>

            <div className='flex mt-10'>
                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[222px] ml-[7px] '
                />

                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[222px] ml-[20px]'
                />

                <img 
                  src='/Mask Group (21).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[222px] ml-[20px]'
                />

                <img 
                  src='/Mask Group (14).png'
                  alt='image'
                  className='w-[222px] h-auto md:h-[222px] ml-[20px]'
                />
             </div>     
          </div>
          )}
  {/* BOOTCAMP SECTION */}
            {activeTab === 'pictures' && (
              <div className='pl-4 md:pl-60 pb-20'>
                <h1 className='font-bold text-lg text-[#333333] mt-20 pb-6 '>
                    YCreators Bootcamp, Yaba
                </h1>

                <div className='flex'>
                  <img 
                    src='/Mask Group (21).png'
                    alt='image'
                    className='w-[222px] h-auto md:h-[222px] ml-[7px] '
                  />

                  <img 
                    src='/Mask Group (21).png'
                    alt='image'
                    className='w-[222px] h-auto md:h-[376px] ml-[20px]'
                  />

                  <img 
                    src='/Mask Group (14).png'
                    alt='image'
                    className='w-[222px] h-auto md:h-[306px] ml-[20px]'
                  />

                  <img 
                    src='/Mask Group (14).png'
                    alt='image'
                    className='w-[222px] h-auto md:h-[306px] ml-[20px]'
                  />
                </div>  

                <div className='flex mt-10'>
                  <img 
                    src='/Mask Group (21).png'
                    alt='image'
                    className='w-[222px] h-auto md:h-[306px] ml-[7px] mt-[-154px]'
                  />

                  <img 
                    src='/Mask Group (14).png'
                    alt='image'
                    className='w-[222px] h-auto md:h-[152px] ml-[20px]'
                  />

                  <img 
                    src='/Mask Group (14).png'
                    alt='image'
                    className='w-[467px] h-auto md:h-[222px] ml-[20px] mt-[-70px]'
                  />
                </div> 
              </div>
              )}


  {/* GET STARTED WITH Y-CREATORS SECTION */}
            <div className='bg-[#009499] flex flex-col md:flex-row rounded-xl mx-4 md:mx-20 my-20 pl-4 md:pl-10 pb-10 py-10'>
              <div className='w-[50%]'>
                    <h1 className='text-white text-xl md:text-3xl font-bold pt-6 pb-4'>
                      Get  started with YCreators
                    </h1>
                    <p className='font-normal text-sm mr-40 text-white'>
                      Join about 250 people who are building the future with YCreators’
                      well-tailored courses and programs
                    </p>
              </div>
              <div className='w-[50%] flex items-center py-10 pt-10 pl-20 '> 
                  <button className='bg-white font-bold border border-blue-200 rounded-xl ml-8 px-20 py-4'>
                      Get YCreators           
                  </button>
              </div>    
          </div>


  {/* FOOTER SECTION */}
                <div>
                  <Footer />
                </div>
    </div>
  );
};

export default Gallery