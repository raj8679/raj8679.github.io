import React from 'react'
import "../styles/Contacts.css"
import {BsLinkedin, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs"

const Contacts = () => {
const handleLinkedin = () =>{
  window.open("https://www.linkedin.com/in/dev-raj-9b83a323b/", "_blank")
}

const handleGithub = () =>{
  window.open("https://github.com/raj8679", "_blank")
}

const handleInsta = () =>{
  window.open("https://www.instagram.com/devraj3935/?igshid=ZDdkNTZiNTM%3D", "_blank")
}

const handleTwitter = () =>{
  window.open("https://twitter.com/Raj06558019?t=_iPFjYl-IUiuyMijsK49rQ&s=09", "_blank")
}
  return (
    <div id="contact">
      <div class="contact-child">
      <div class="contact-content-one">
        <h1>Contact Me</h1>
         </div>

      <div class="contact-content-two">
        <h3>Name : Raj</h3>
        <h3 id="contact-email">Email : devraj8679@gmail.com</h3>
        <h3 id="contact-phone">Mobile : 8986730767</h3>
        <h3>Location: Ranchi, Jharkhand</h3>
      </div>

      <div class="contact-content-three">
            <BsLinkedin  id="contact-linkedin" size={25} onClick={handleLinkedin}/>
            <BsGithub id="contact-github" size={25} onClick={handleGithub}/>
            <BsInstagram size={25} onClick={handleInsta}/>
            <BsTwitter size={25} onClick={handleTwitter}/>
      </div>
      </div>
      
    </div>
  )
}

export default Contacts