import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/main">Home</Link>
        <Link to="/project"> My Projects </Link>
        <Link to="/about">About Me</Link>
        <Link to='/'>Login</Link>
      </nav>
    </div>
  )
}

