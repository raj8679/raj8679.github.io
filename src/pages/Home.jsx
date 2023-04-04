import React from 'react'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
    
  return (
    <div id="home">
    <Navbar />
    <div><About /></div>
    <div><Skills /> </div>
    <div><Projects /></div>
    <div><Contacts /></div>    
    </div>
  )
}

export default Home