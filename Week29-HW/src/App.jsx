import { useState } from 'react'
import {BrowserRouter as Router,  Route, Link, BrowserRouter} from "react-router-dom";
import './App.css'
import FeedbackForm from './components/FeedbackForm'
import NewUser from './components/NewUser';
import Test from './components/Test';
import { LanguageProvider } from './components/LanguageProvider';

function App() {
  

  return (
   
    <>
   
     <h1>Validation</h1>
     <FeedbackForm/>
     <h1>HW-AXIOS</h1> 
    <NewUser/>

    <h1>Home Work useContext</h1>
    <LanguageProvider>
      <Test />
    </LanguageProvider>
<footer>Secret language selection app 2025 </footer>

    </>
  )
}

export default App
