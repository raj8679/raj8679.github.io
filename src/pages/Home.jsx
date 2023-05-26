import React from 'react'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import * as Scroll from 'react-scroll';

const Home = () => {
  var Element  = Scroll.Element;
  
  return (
    <div id="home">
    <Navbar />
   
    <Element name='scrollToAboutSection'> <About /></Element>
    <Element name="scrollToSkillsSection"><Skills /> </Element>
    
    <Element name="scrollToProjectsSection"><Projects /></Element>
    <Element name='scrollToContactSection'><Contacts /> </Element>
      
    </div>
  )
}

export default Home