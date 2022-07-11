import React from 'react'
import "./projects.css"
import {Project} from "../../components"
function Projects() {
  return (
    <div className='prof__projects' id="projects">
      <h1 className='gradient__text'>My Projects</h1>
      <div className='prof__projects-container'>
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default Projects