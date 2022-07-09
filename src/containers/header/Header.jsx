import React from 'react'
import "./header.css"
import profile from "../../assets/profile.svg"
function Header() {
  return (
    <div className='prof__header section__padding' id='home'>
      <div className='prof__header-content'>
        <p1>Welcome to my portfolio page</p1>
        <h1 className='gradient__text'>
        Hi! I’m David
        <br/>
        CS Student  
        </h1>
        <p2>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. 
        Velit dictum nec mi sed <br/> velit fusce congue suscipit aliquet. </p2>
        <button type='button'>Contact me!</button>
      </div>
      <div className='prof__header-image'>
        <img src={profile} alt="profile" />
      </div>
    </div>
      
  )
}

export default Header