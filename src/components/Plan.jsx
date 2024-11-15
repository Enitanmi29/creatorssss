import React, { useState } from 'react'
import Navbar from './Navbar'
import { packages } from '../constants';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Plan = () => {
    const [selectedOption, setSelectedOption] = useState("")
     const navigate=useNavigate();

    const handleSelectChange = (e) => {
        const selectedValue= e.target.value
        setSelectedOption(selectedValue);
         
        if (selectedOption === 'standard') {
            navigate ('/Plan1')
        } else if (selectedOption === 'premium') {
            navigate ('/Plan2')
        }
    };
  return (
    <div>
        <div className='bg-[#e1ecff] pb-10'>
            <Navbar />
            <h1 className='text-[#000000] text-3xl md:text-5xl font-bold mt-10 mb-5 flex justify-center'> 
                Our Plans 
            </h1>
            <p className='text-[#333333] text-[12px] md:text-xl font-normal flex justify-center '>
                Choose any of the following monthly plans which allow kids have 
            </p>
            <p className='text-[#333333] text-[12px] md:text-xl font-normal flex justify-center '>
                 access to the cafe at huge discounts.
            </p>
        </div>

    {/* PACKAGES SECTION */}
        <div className='bg-[#e4e3e3] mt-20 mx-10'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex pt-10 pl-6 md:pl-40 font-bold'>
                    <p> Showing </p>
                    <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className='text-blue-400 block mb-20 bg-[#e4e3e3] px-2'
                    >
                        <option className='' value=""> Corporate</option>
                        <option className='text-white' value="standard"> Individual </option>
                        <option className='text-white'  value="premium"> Schools</option>
                    </select>
                    <p>packages</p>
                </div>

                 <img
                    src='/path2828.png'
                    alt='img'
                    className='w-[102.83px] h-auto md:h-[102.73px] ml-auto md:ml-[500px]'
                />
            </div>
            
            <div className='flex justify-center'> 
               <ul className=' rounded-lg px-4 grid grid-cols-2'>
                {packages.map ((packages, index) =>(
                    <div key={index} className='bg-white rounded-2xl border-4 ml-0 md:ml-10 pl-4 md:pl-8 pr-20 py-2 md:py-4 mb-8'>
                        <h1 className='font-bold text-black text-sm md:text-lg mb-2'>
                            {packages.title}
                        </h1>
                        <p className='font-normal text-gray-800 text-[12px] md:text-sm mb-2'>
                            {packages.text}
                        </p>
                        <p className='font-normal text-green-400 text-[12px] md:text-sm mb-2'>
                            {packages.age}
                        </p>
                        <p className='font-normal text-gray-800 text-[12px] md:text-sm mb-2'>
                            {packages.text2}
                        </p>
                        <p className='font-normal text-gray-800 text-sm mb-2'>
                            {packages.text3}
                        </p>
                        <h2 className='font-bold text-black text-xl md:text-3xl mb-2'>
                            {packages.price}
                        </h2>
                         <div className='rounded-xl border border-blue-800 text-blue-500 mb-2 px-6 md:px-10 py-4 mr-0 md:mr-40'>
                            {packages.link}
                         </div>                   
                    </div>
                ))}
                </ul> 
            </div>

            <div className='ml-[-30px]'>
                <img
                 src='/path1836.png'
                 alt='img'
                 className='w-[126px] h-[121px]'/>
            </div>
        </div>
    {/* FOOTER SECTION */}
         <div className='mt-40 w-full]'>
            <Footer className="ml-[-10]" />
         </div>
    </div>
  )
}

export default Plan