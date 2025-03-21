import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  const [projects] = useState([


  {
    id: 1,
    name: 'Weather App',
    description: 'Weather App- қосымшасы ауа райын көруге арналған.Кез келген қаланың атын енгізіңіз.',  
    github_link: 'https://yerke-zhan.github.io/WeatherAppFinal/'
  },
  {
    id: 2,
    name: 'RecipeApp',  
    description: 'Recipe App- қосымшасы арқылы менюге қатысты барлық ақпаратты аласыз. Жаңа ресепт жазуға болады.',
    github_link: 'https://yerke-zhan.github.io/Recipe2/'
  },

  {
    id: 3,
    name: 'New Year Page',  
    description: 'New Year Page- сайты жаңа жылға құттықтаулар және жаңа жылдың басталуына қанша уақыт қалғанын көрсетеді.',
    github_link: 'https://yerke-zhan.github.io/NewYearProjesi/'
  }
]);


return (
  <div>
    <h1> My Projects</h1>
    <ul>
      {projects.map(project => { 
         return <li key={project.id}>
          <h3>{project.name}</h3>
         <button><Link to={`/projects/${project.id}`}>View Details</Link></button>
         
        </li> 
      })}
    </ul>


  </div>
)
} 


  