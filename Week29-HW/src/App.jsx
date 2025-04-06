import { useState } from 'react'
import {BrowserRouter as Router,  Route, Link, BrowserRouter} from "react-router-dom";
import './App.css'
import FeedbackForm from './components/FeedbackForm'
import NewUser from './components/NewUser';

function App() {
  

  return (
   
    <>
    <FeedbackForm/>
    <NewUser/>



    </>
  )
}

export default App
