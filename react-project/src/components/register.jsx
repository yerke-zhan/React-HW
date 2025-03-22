import React from 'react'
import { Link, useNavigate } from'react-router-dom'

export default function Register() {
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log(name, email, password);
  
    navigate('/main');
  }
    
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        
    <div>
     
      <input placeholder='Enter email' type="email" id="email" name="email" />
    </div>
    <div>
     
      <input placeholder='Enter password' type="password" id="password" name="password" />
    </div>
    <div>
      <button type="submit">Register</button> 
    </div>    
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  )
}
