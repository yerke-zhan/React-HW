import React from 'react'
import {Link,  useNavigate , Outlet} from 'react-router-dom'

export default function Login({setAuth}) {
    let navigate = useNavigate()
    const handleClick=()=>{
        setAuth(true)
        navigate('/main')
    }
    
     


  return (
    <div>
     
      <button onClick={handleClick}>Login</button>
      <Link to={`/register`} >Register</Link>
    
      <Outlet />
      
    </div>
    

    
  )
}
