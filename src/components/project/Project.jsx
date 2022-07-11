import React from 'react'
import "./project.css"
import project1 from "../../assets/project1.png"
function Project() {
  return (
    <div className='prof__project'>
      <div className='prof__project-image'>
        <a href='https://www.google.com'><img src={project1} alt="project1" /></a>
      </div>
      <h2 className='gradient__orange'>Project Name</h2>
      <p>Project Description</p>
    </div>
  )
}

export default Project