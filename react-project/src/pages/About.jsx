import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function About() {
  const navigate= useNavigate();
  return (
    <div>
      <h1>About Me</h1>
      <h3>Welcome to my website! </h3>
      <p>My name is Yerkezhan. I'm learning React.</p>
      
       <div>
         <button onClick={()=>navigate('/profile')}>Go to My Profile</button>
 
 
        </div>
    </div>
  )
}

