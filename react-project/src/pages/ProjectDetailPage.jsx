import React from 'react'
import {  useParams, Link } from 'react-router-dom'

export default function ProjectsPage() {
  const{id} = useParams();
  const projects = [

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
];

const project = projects.find(project => project.id === parseInt(id));

return (
  <div>
    <h1> {project.name} </h1>
    <p>{project.description}</p>
    <button> <a href={project.github_link}>GitHub Link</a></button>
    <button><Link to="/project">Back to Projects</Link></button>
    <ul></ul>    
    
    
    

    
  </div>
)
} 


  