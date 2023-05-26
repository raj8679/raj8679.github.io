import React from "react";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandVscode,
} from "react-icons/tb";
import { SiChakraui, SiExpress, SiMongodb, SiNetlify } from "react-icons/si";

const Skills = () => {
  return (
    <div class="skills-parent-box">
      <div id="skills" class="skills-container">
        <h1 class="title">Skills</h1>
        <h1>Frontend</h1>
        {/* frontend tools list */}
        <div class="frontend">
          <div class="skills-card">
            <FaHtml5 color="#ff6600" size={80} />
            <p class="skills-card-name">HTML</p>
          </div>
          <div class="skills-card">
            <FaCss3Alt color="#0099ff" size={80} />
            <p class="skills-card-name">CSS</p>
          </div>
          <div class="skills-card">
            <TbBrandJavascript color="#ffad33" size={80} />
            <p class="skills-card-name">JavaScript</p>
          </div>
          <div class="skills-card">
            <FaReact color="#33ccff" size={80} />
            <p class="skills-card-name">React</p>
          </div>
          <div class="skills-card">
            <TbBrandNextjs size={80} />
            <p class="skills-card-name">Next Js</p>
          </div>
          <div class="skills-card">
            <TbBrandRedux color="#aa00ff" size={80} />
            <p class="skills-card-name">Redux</p>
          </div>
          <div class="skills-card">
            <SiChakraui color="#33cccc" size={80} />
            <p class="skills-card-name">Chakra-ui</p>
          </div>
        </div>
        <h1>Backend</h1>
        {/* backend tools list  */}
        <div class="backend">
          <div class="skills-card">
            <FaNodeJs size={80} />
            <p class="skills-card-name">Node Js</p>
          </div>
          <div class="skills-card">
            <SiExpress size={80} />
            <p class="skills-card-name">Express Js</p>
          </div>
          <div class="skills-card">
            <SiMongodb color="green" size={80} />
            <p class="skills-card-name">MongoDB</p>
          </div>
        </div>
        <h1>Tools</h1>
        {/* Tools list */}
        <div class="Tools">
          <div class="skills-card">
            <TbBrandVscode size={80} color="#33ccff" />
            <p class="skills-card-name">VS Code</p>
          </div>
          <div class="skills-card">
            <FaGitAlt size={80} color="#ff6600" />
            <p class="skills-card-name">Git</p>
          </div>
          <div class="skills-card">
            <FaGithub size={80} />
            <p class="skills-card-name">Github</p>
          </div>
          <div class="skills-card">
            <SiNetlify size={80} color="#33ccff" />
            <p class="skills-card-name">Netlify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
