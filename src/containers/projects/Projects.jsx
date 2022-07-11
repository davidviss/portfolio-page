import React from 'react'
import "./projects.css"
import {projects} from '../../constants';
function Projects() {
  return (
    <div className='prof__projects' id="projects">
      <h1 className='gradient__text'>My Projects</h1>
        <div className='prof__project'>
          {projects.map((proj) => {
            return (
              <div className='prof__project-content'>
                <div className='prof__project-image'>
                  <a href={proj.source}><img src={proj.image} alt="project" /></a>
                </div>
                <h2 className='gradient__orange'>{proj.title}</h2>
                <p>{proj.description}</p>
              </div>
              );
            })}
        </div>
      
    </div>
  )
}

export default Projects