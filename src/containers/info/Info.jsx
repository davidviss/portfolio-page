import React from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils'
import "./info.css"
import {About, Skills} from "../../components"
function Info() {
  return (
    <div className='prof__info'>
      <div className='prof__info-content section_margin'>
        <div className='prof__info-about' id="about">
          <About />
        </div>
        <div className='prof__info-skills' id="skills">
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Info