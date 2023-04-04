import React from "react";
import  "../styles/Skills.css";

import html_logo from "../assets/html_logo.svg";
import css_logo from "../assets/css_logo.svg";
import javascript_logo from "../assets/javascript_logo.svg";
import react_logo from "../assets/react_logo.svg";
import nextjs_logo from "../assets/nextjs_logo.png";
import redux_logo from "../assets/redux_logo.svg";
import chakra_logo from "../assets/chakra_logo.png";
import nodejs_logo from "../assets/nodejs_logo.svg";
import expressjs_logo from "../assets/expressjs_logo.png";
import mongodb_logo from "../assets/mongodb_logo.svg";

const Skills = () => {
  return (
    <div class="skills-parent-box">
    <div id="skills" class="skills-container">
      <h1 class="title">Skills</h1>
      <h1>Frontend</h1>
      {/* frontend tools list */}
      <div class="frontend">
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={html_logo}
            alt="html"
          />
          <p class="skills-card-name">HTML</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={css_logo}
            alt="css"
          />
          <p class="skills-card-name">CSS</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={javascript_logo}
            alt="javascript"
          />
          <p class="skills-card-name">JavaScript</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={react_logo}
            alt="react"
          />
          <p class="skills-card-name">React</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={nextjs_logo}
            alt="nextjs"
          />
          <p class="skills-card-name">Next Js</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={redux_logo}
            alt="redux"
          />
          <p class="skills-card-name">Redux</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={chakra_logo}
            alt="chakra"
          />
          <p class="skills-card-name">Chakra-ui</p>
        </div>
      </div>
      <h1>Backend</h1>
      {/* backend tools list  */}
      <div class="backend">
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={nodejs_logo}
            alt="nodejs"
          />
          <p class="skills-card-name">Node Js</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={expressjs_logo}
            alt="expressjs"
          />
          <p class="skills-card-name">Express Js</p>
        </div>
        <div class="skills-card">
          <img
          class="skills-card-img"
            // style={{ width: "90%", height: "60%" }}
            src={mongodb_logo}
            alt="mongodb"
          />
          <p class="skills-card-name">MongoDB</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
