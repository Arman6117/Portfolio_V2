import React from 'react'
import './Home.scss'
const Home = () => {
  return (
    <>
      <div className="home">
      <div className='gradient'></div>
        <div className="home_text">
      
          <span className='txt greet'>Hello</span>
          <span className='txt name'><span className='txt'>I'm  <span className='txt name'> Arman</span></span></span>
          <span className='txt title'>Web Developer</span>
        </div>
        <button className='hire_btn'>Hire Me</button>
      </div>
    </>
  )
}

export default Home


