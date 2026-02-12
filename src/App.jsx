import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Job from './Pages/Job'
import Services from './Pages/Services'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Client from './Pages/Client'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Welcome from './Pages/Welcome'

function App() {

  return (
    <div>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/job" element={<Job/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/client" element={<Client/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/welcome" element={<Welcome />} />

    </Routes>
    <Footer/>
   </div>
  )
}

export default App
