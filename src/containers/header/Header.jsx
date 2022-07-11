import React from 'react'
import "./header.css"
import profile from "../../assets/profile.svg"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
function Header() {
  return (
    <div className='prof__header section__padding' id='home'>
      <div className='prof__header-content'>
        <div className="prof__header-content_welcome">
          <p1>Welcome to my portfolio page</p1>
          <h1 className='gradient__text'>
          Hi! I’m David
          <br/></h1>
          <h2 className='gradient__orange'>
          CS Student  
          </h2>
          <p2>Finding my way through the world of programming. Always looking for the next project. </p2>
        </div>
        <div className="prof__header-content_row">
          <a href="#contact"><button type='button'>Contact me!</button></a>
          <a href='https://github.com/davidviss'><img className="icon__github" src={github} alt="github" /></a>
          <a href='https://www.linkedin.com/'><img className="icon__linkedin" src={linkedin} alt="linkedin" /></a>
          
        </div>

      </div>
      <div className='prof__header-image'>
        <img src={profile} alt="profile" />
      </div>
    </div>
      
  )
}

export default Header