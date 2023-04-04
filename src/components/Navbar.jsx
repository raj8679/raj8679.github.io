import React from "react";
import "../styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import RajResume from "../assets/Raj-Resume.pdf";

const Navbar = () => {

  const handleHomeScroll = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
     })
  }

  const handleAboutScroll = () => {
    window.scrollTo({
      top:50,
      behavior:"smooth"
     })
  }
  const handleSkillsScroll = () => {
    window.scrollTo({
      top:1100,
      behavior:"smooth"
     })
  }
  const handleProjectsScroll = () => {
    window.scrollTo({
      top:1800,
      behavior:"smooth"
     })
  }
  const handleContactScroll = () =>{
   window.scrollTo({
    top:3200,
    behavior:"smooth"
   })
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
          <h3 class="nav-link about" onClick={handleAboutScroll}>About Me</h3>
          <h3 class="nav-link skills" onClick={handleSkillsScroll}>Skills</h3>
          <h3 class="nav-link projects" onClick={handleProjectsScroll}>Projects</h3>
          <h3 class="nav-link contact" onClick={handleContactScroll}>Contact</h3>
          <button class="nav-resume" onClick={handleResume}>
          <a
            href={RajResume}
            download={true}
            target="_blank"
            rel="noreferrer"         
            class="nav-link resume"
            id="resume-button-1"
          >
            <h3>Resume</h3>
          </a>
          </button>
          
        </div>
        <div className="hamburger_menu">
          <GiHamburgerMenu size={25} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
