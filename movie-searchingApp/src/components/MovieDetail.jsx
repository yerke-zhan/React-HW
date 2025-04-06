import React, { useEffect, useState } from 'react'
 import { useParams , Link} from 'react-router-dom'
 import axios from 'axios'


export default function MovieDetail() {
  let {id} =useParams()
  const [movie, setMovie] = useState({})
  const[isLoading, setIsLoading] = useState(true)
  const[error, setError]= useState(null)
  useEffect(()=>{
    async function fetchData(){
try{
  let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`)
// console.log(response);
if(response.data.Response === "True"){
  setMovie(response.data)
  setIsLoading(false)
  // console.log(response.data);

}

}catch(err){
  console.error(err.message)
  setError(err.message)
  setIsLoading(false)


}
    }
    fetchData()

  },[id])
  if(isLoading)return <h3>Loading...</h3>
  if(error)return <h3 style={{color:'red'}}>Error: {error}</h3>
  return (
    <div className='main'>
      <div className='image-box'>
      <img className='poster' src={movie.Poster =='N/A '? 'https://via.placeholder.com/300x450'
      :
        movie.Poster

      } alt='movie.img' />
      </div>

      <div className='detailed-info'>
        <h1>  {movie.Title} <span>({movie.Year})</span></h1>
        <ul>
          <li>{movie.imdbRating}</li>
          <li>{movie.Runtime}</li>
          <li>{movie.Rated}</li>
        </ul>
        <p> {movie.Plot}</p>
     
      <div className='main2'> 
      
      <div >
      <h3>Director</h3>
      <p>{movie.Director}</p> 
      </div>

      <div>
        <h3>Actors</h3>
        <p>{movie.Actors}</p>
      </div>

      <div>
        <h3>Genre</h3>
        <p>{movie.Genre}</p>
      </div>
      </div>
      <div>
      <Link to={'/'}>
       <button className='btn'>Go back</button> 
        </Link>
      </div>
      </div>
      
      
    </div>
  )
}

