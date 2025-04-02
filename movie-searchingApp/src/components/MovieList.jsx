import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function MovieList({filmder}) {
    
  return (

    <div className='movie-list'>
      { 
      filmder.length >0?
      
        filmder.map((film) => {
            return (
            <Link to ={`/movie/${film.id}`}>
                <div className='movie-card'> 
                    <img src={film.Poster? film.Poster : 'https://via.placeholder.com/300x450'} alt={film.Title} />
                    <div>
                        <p>{film.Year}</p>
                        {/* <span>*</span> */}
                        <p>{film.Type === 'Movie'? 'Movie' : 'Cartoon'}</p>
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
