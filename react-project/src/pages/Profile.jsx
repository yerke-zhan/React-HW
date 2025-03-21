import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Profile(){
    const navigate= useNavigate();
    

    return(
        <div >
          <h2> Mambar Yerkezhan</h2>   
           <p>yerkezhanm@gmail.com</p> 
           <h3>AMJILT CYBER ACADEMY</h3>
           

            <button onClick={()=>navigate('/project')}>Go to My Projects</button>

        </div>

        

        

    )
}
