import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/project">Projects </Link>
        <Link to="/about">About Me</Link>
      </nav>
    </div>
  )
}
