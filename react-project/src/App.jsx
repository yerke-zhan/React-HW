
import React, { useState } from 'react';
import './App.css'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './components/register';
import ProtectedRoute from './components/ProtectedRoute';




function App() {
  const [isAuthenticated, setIsAuthenticated]=useState(false)
  
  
  return (
    <BrowserRouter>
   
    <Routes>
  
{/* <Route path='/main' element={<Main/>}/> */}
     
<Route path='/profile' element={<Profile/>}/>
{/* <Route path='/project' element={<ProjectsPage/>}/> */}
<Route path='/about' element={<About/>}/>
<Route path='/projects/:id' element={<ProjectDetailPage/>}/>

<Route path="*" element={<NotFound />} /> 



{/* // WEEK 28/HW-4 Protected Routes and Nested Routes */}

<Route path="/" element={<Login setAuth ={setIsAuthenticated}/>}>
  <Route path="register" element={<Register />} />
</Route>
        
<Route path='/main' element={
  <ProtectedRoute isAuth={isAuthenticated}>
    <Main/>
  </ProtectedRoute>}/>
                   
 <Route path='/project' element={
<ProtectedRoute isAuth={isAuthenticated}>
  <ProjectsPage/>
</ProtectedRoute>}/>

</Routes>
  
    </BrowserRouter>
    
  )
}

export default App
