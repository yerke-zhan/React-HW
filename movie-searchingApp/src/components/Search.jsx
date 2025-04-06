import React, { useState } from 'react'
import axios from 'axios'

export default function Search({onSearch}) {
    const[filmInput, setFilmInput]=useState('')
    const[isLoading, setIsLoading]=useState(false)

    const handleSubmit =async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    try{
        let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${filmInput}`)
        console.log(response.data)

        if(response.data.Response === 'True'){
            onSearch(response.data.Search)
            setFilmInput('')
            setIsLoading(false)
        }else{
            onSearch([])
            setFilmInput('')
            setIsLoading(false)
            console.log('No movies found')
        }
    }catch(error){
        console.log(error.message)
    }
    
    }


  return (
    <div className='app'>
      <h1>Movie Search App</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input className='search-input'
            type="text" 
            value={filmInput}
            placeholder='Enter movie name...'
            onChange={(e)=>setFilmInput(e.target.value)}
            />
<button  className='search-btn' type="submit" disabled={isLoading}>  
    {isLoading ? 'Searching...' : 'Search'}

    </button>
</form>
</div>
    
  )
}
