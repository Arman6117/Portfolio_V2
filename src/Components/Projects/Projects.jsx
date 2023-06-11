import React from 'react'
import './Projects.scss'
import Page from '../PageTxt/Page'
import Card from './Card/Card'
const Projects = () => {
  return (
  <>
    <div className='projects'>
        <div className='projects_txt'>
            <Page title="Projects" desc1="Practice Projects/" desc2="Commercial Projects" />
        </div>
        <div className='project_card'>
          <div className='card'>
           <Card />
          </div>
        </div>
    </div>
  </>
  )
}

export default Projects