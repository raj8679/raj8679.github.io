import React, { useState } from "react";
import "../styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross2} from "react-icons/rx"
import RajResume from "../assets/Raj-Resume.pdf";
import * as Scroll from 'react-scroll';

const Navbar = () => {
 const scroller = Scroll.scroller;
const [modal, setModal] = useState(false);

const handleScroll = (position) => {
  scroller.scrollTo(position, {
    duration: 1000,
    delay: 100,
    smooth: true,    
  })
  setModal(false)
}
  const handleHomeScroll = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
     });
     setModal(false)
  }
  
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1QUxGX347Q70kcN_7NB33Y0qU1e8gY97G/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <div id="nav-menu" class="container">
        <div class="nav-left-menu">
          <h3>Raj</h3>
        </div>
        <div class="nav-right-menu">
          <h3 class="nav-link home"  onClick={handleHomeScroll}>Home</h3>
          <h3 class="nav-link about" onClick={() => handleScroll('scrollToAboutSection')}>About Me</h3>
          <h3 class="nav-link skills" onClick={()=> handleScroll('scrollToSkillsSection')}>Skills</h3>
         <h3 class="nav-link projects" onClick={()=> handleScroll('scrollToProjectsSection')}>Projects</h3>         
          <h3 class="nav-link contact" onClick={()=> handleScroll('scrollToContactSection')}>Contact</h3>
          {/* <button class="nav-resume" onClick={handleResume}> */}
          <a
            href={RajResume}
            download={true}
            target="_blank"
            rel="noreferrer"         
            class="nav-link resume"
            id="resume-button-1"
             onClick={handleResume}
          >
            <h3>Resume</h3>
          </a>
          {/* </button> */}
          
        </div>
        <div className="hamburger_menu">
          {!modal ? 
          <GiHamburgerMenu size={25} onClick={() => setModal(!modal)}/>
          :
          <RxCross2 size={25} onClick={() => setModal(!modal)}/>
}
        </div>
      </div>
      {modal ? 
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%", height:"100vh", position:"fixed", backgroundColor:"black",opacity:".9",paddingTop:"100px"}}>
      <div style={{color:"white"}}><h1 onClick={handleHomeScroll}>Home</h1></div>
      <div style={{color:"white"}}><h1 onClick={() => handleScroll('scrollToAboutSection')}>About Me</h1></div>
      <div style={{color:"white"}}><h1 onClick={()=> handleScroll('scrollToSkillsSection')}>Skills</h1></div>
      <div style={{color:"white"}}><h1 onClick={()=> handleScroll('scrollToProjectsSection')}>Projects</h1></div>
      <div style={{color:"white"}}><h1 onClick={()=> handleScroll('scrollToContactSection')}>Contact</h1></div>
      </div>
      :
      null
}
    </>
  );
};

export default Navbar;
