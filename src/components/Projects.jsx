import React from 'react'
import "../styles/Projects.css"

import BigBasket_img from "../assets/BigBasket_img.png"
import CoSchedule_img from "../assets/CoSchedule_img.png"
import Health_Prime_img from "../assets/Health_Prime_img.png"
import kfc_img from "../assets/kfc_img.png"

import html_logo from "../assets/html_logo.svg"
import css_logo from "../assets/css_logo.svg"
import javascript_logo from "../assets/javascript_logo.svg"
import chakra_logo from "../assets/chakra_logo.png"
import nextjs_logo from "../assets/nextjs_logo.png"
import react_logo from "../assets/react_logo.svg"
import redux_logo from "../assets/redux_logo.svg"

const Projects = () => {
  return (
    <div id="projects" class="Project-container">
      <div><h1>Projects</h1></div>
      <div class="Project-ContainerChild">
      <div class="project-card">
        <div class="Project-image"><img src={BigBasket_img} alt="" width="100%" height="100%"/></div>
        <div><h3 class="project-title">BigBasket - Clone</h3></div>
        <div><h3 class="project-description">A website for online grocery shopping</h3></div>
        <div class="project-tech-stack">
          <img src={html_logo} alt="" />
          <img src={css_logo} alt="" />
          <img src={javascript_logo} alt="" />
          <img src={chakra_logo} alt="" />
          <img src={nextjs_logo} alt="" />
          <img src={redux_logo} alt="" />
        </div>
        <div>
          <a href="https://github.com/alih6051/DigiBasket" target="_blank" rel="noreferrer"><button class="project-github-link">Code Base</button></a>
          <a href="https://digibasket.vercel.app/" target="_blank" rel="noreferrer"><button class="project-deployed-link">Deployed Link</button></a>
          
        </div>
      </div>
      <div class="project-card">
        <div class="Project-image"><img src={kfc_img} alt="" width="100%" height="100%"/></div>
        <div><h3 class="project-title">KFC - Clone</h3></div>
        <div><h3 class="project-description">An online Food ordering app, especializes in fried Chicken</h3></div>
        <div class="project-tech-stack">
          <img src={html_logo} alt="" />
          <img src={css_logo} alt="" />
          <img src={javascript_logo} alt="" />
          <img src={react_logo} alt="" />
        </div>
        <div >
          <a href="https://github.com/raj8679/KFC-Clone" target="_blank" rel="noreferrer"><button class="project-github-link">Code Base</button></a>
          <a href="https://63c0230127c5672308d75987--fantastic-beignet-7f319c.netlify.app/" target="_blank" rel="noreferrer"><button class="project-deployed-link">Deployed Link</button></a>
          
        </div>
      </div>
      <div class="project-card">
        <div class="Project-image"><img src={Health_Prime_img} alt="" width="100%" height="100%"/></div>
        <div><h3 class="project-title">Tata-1mg - Clone</h3></div>
        <div><h3 class="project-description">A platform to buy medicines online and get them delivered at your doorstep. </h3></div>
        <div class="project-tech-stack">
          <img src={html_logo} alt="" />
          <img src={css_logo} alt="" />
          <img src={javascript_logo} alt="" />
        </div>
        <div >
          <a href="https://github.com/Varun8177/Tata-1mg-clone" target="_blank" rel="noreferrer"> <button class="project-github-link">Code Base</button></a>
         <a href="https://roasted-geese-6392-xh5g.vercel.app/" target="_blank" rel="noreferrer"><button class="project-deployed-link">Deployed Link</button></a>
          
        </div>
      </div>
      <div class="project-card">
        <div class="Project-image"><img src={CoSchedule_img} alt="" width="100%" height="100%"/></div>
        <div><h3 class="project-title">CoSchedule - Clone</h3></div>
        <div><h3 class="project-description">An online platform to organise marketing strategies</h3></div>
        <div class="project-tech-stack">
          <img src={html_logo} alt="" />
          <img src={css_logo} alt="" />
          <img src={javascript_logo} alt="" />
        </div>
        <div >
          <a href="https://github.com/raj8679/CoSchedule-Clone" target="_blank" rel="noreferrer"><button class="project-github-link">Code Base</button></a>
          <a href="https://coschedule-app-clone.netlify.app/" target="_blank" rel="noreferrer"><button class="project-deployed-link">Deployed Link</button></a>
          
          
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Projects