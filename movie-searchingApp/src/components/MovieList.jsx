import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function MovieList({filmder}) {
    
  return (

    <div className='movie-list'>
      { 
      filmder.length >0?
      
        filmder.map((film) => {
            return (
            <Link to ={`/movie/${film.imdbID}`} key={film.imdbID}>
                <div className='movie-card'> 
                    <img src={film.Poster =="N/A"?  'https://img.freepik.com/free-vector/cinema-elements-set_74855-15362.jpg?semt=ais_hybrid'
                    :
                    film.Poster }
                     alt={film.Title} />
                    <h3>{film.Title}</h3>
                    <div>
                        <p>{film.Year}</p>
                        {/* <span>*</span> */}
                        <p>{film.Type === 'Movie'? 'Movie' : 'TV Show'}</p>
                    </div>
                </div>
            </Link>

            )
          })
          :
          (
<p>Movie not found. Please try again.</p>
          )
   
      }

    </div>
  )
}
