import React, {useState} from 'react'
import Navbar from './Navbar'
import { Form } from 'react-router-dom'



const Form1 = () => {
    // State to handle form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        about: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        // Reset form data
        setFormData({
            name: '',
            email: '',
            about: ''
        });
    };

  return (
    <>
    
            <div className='bg-blue-500' > 
              <Navbar /> 
            </div>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-4 bg-gray-100 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Bookings</h2>

            <label className="block mb-2 text-sm font-medium text-gray-700" 
              htmlFor="name">
                Name:
            </label>
            <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your name"
                required
                />

            <label className="block mb-2 text-sm font-medium text-gray-700" 
              htmlFor="email">
                Email:
            </label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your email"
                required
                />

            <label className="block mb-2 text-sm font-medium text-gray-700" 
              htmlFor="About">
                About:
            </label>
            <textarea
                name="about"
                id="about"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                placeholder="About you"
                required
                />

            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>

    
    </>
  )
}

export default Form1