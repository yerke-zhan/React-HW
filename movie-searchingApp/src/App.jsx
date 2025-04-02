import { useState } from 'react'
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import Search from './components/Search'

function App() {
  const [movies, setMovies] = useState([])
  console.log('Movies', movies)

  
 

  return (
    <BrowserRouter>

   <Search onSearch ={setMovies}/>
    <Routes>
      <Route path='/' element={<MovieList filmder={movies}/>}/>

      <Route path='/movie/:id' element= {<MovieDetail />}/>
    </Routes>

    </BrowserRouter>
     
       
    
  )
}

export default App
