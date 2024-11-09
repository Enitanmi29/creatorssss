
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Plan from './components/Plan';
import Gallery from './components/Gallery';
import Courses from './components/Courses';
import Gallery2 from './components/Gallery2';
import Plan1 from './components/Plan1'
import Plan2 from './components/Plan2'
import Form1 from './components/Form1';

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Hide the navbar for routes other than Home
    if (location.pathname === '/') {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location]);

  return (
    <div className='bg-white mx-auto'>
      {showNavbar && (
        <div className='bg-[#fffaef]'>
          <Navbar />
        </div>
      )}
      
          <Routes>
            <Route path='/' element={<Home />} /> {/* Home component for root path */}
            <Route path='/About' element={<About />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/Plan' element={<Plan />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Courses' element={<Courses />} />
            <Route path='/Gallery2' element={<Gallery2 />} />
            <Route path='/Plan1' element={<Plan1 />} />
            <Route path='/Plan2' element={<Plan2 />} />
            <Route path='/Form1' element={<Form1 />} />
          </Routes>
      
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
