
import React  from 'react';
import './App.css'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/About';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
// import Profile from './pages/Profile';
import NotFound from './pages/NotFound';









function App() {
  
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
{/* <Route path='/profile' element={<Profile/>}/> */}
<Route path='/project' element={<ProjectsPage/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/projects/:id' element={<ProjectDetailPage/>}/>
<Route path="*" element={<NotFound />} /> 
    </Routes>
    
   
      
    </BrowserRouter>
    
  )
}

export default App
