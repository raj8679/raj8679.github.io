import React from "react";
import "../styles/About.css";
import RajImage from "../assets/RajImage.jpg";
import GithubData from "./GithubData";
import RajResume from "../assets/Raj-Resume.pdf";

const About = () => {
  // const handleResume = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1QUxGX347Q70kcN_7NB33Y0qU1e8gY97G/view?usp=sharing",
  //     "_blank"
  //   );
  // };
  const openLink = (url) => {
window.open(url)
  }
  return (
    <>
      <div id="about" class="about section">
        <div class="about-box">
          <h1>About me</h1>
          <h1 id="user-detail-name">Hi, I am Raj</h1>
          <h2 id="user-detail-intro" class="about-intro">
            An enthusiastic Full-Stack Web Deveploper. Have good command over
            frontend and backend tools like JavaScript, CSS, React.js, Node.js, Express.js, MongoDB. Eager
            to work for a Product-based company.
          </h2>
          {/* <button id="resume-button-2"  onClick={handleResume}>
            <a
              href={RajResume}
              download="Raj-Resume"
              id="resume-link-2"
              target="_blank"
              rel="noreferrer"            
            >
             Resume
            </a>
          </button> */}
          <a href="https://drive.google.com/uc?id=1QUxGX347Q70kcN_7NB33Y0qU1e8gY97G&export=download"
          id="resume-link-2">
            <div
            onClick={()=>openLink("https://drive.google.com/file/d/1QUxGX347Q70kcN_7NB33Y0qU1e8gY97G/view?usp=share_link")}
            id="resume-button-2"
            >
           Resume
            </div>
          </a>
        </div>
        <div class="about-imgBox">
          <img src={RajImage} alt="raj" class="home-img" />
        </div>
      </div>

      <GithubData />
    </>
  );
};

export default About;
