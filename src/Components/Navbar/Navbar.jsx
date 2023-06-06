import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='nav-cnt'>
        <div className='nav-txt'>
            Arman Patel
        </div>
     <div className='nav-link'>
     
        <ul>
            <li>
               <a href='#'>Home</a> 
            </li>
            <li>
            <a href='#'>Skills</a> 
            </li>
            <li>
            <a href='#'>Projects</a> 
            </li>
            <li>
            <a href='#'>Services</a> 
            </li>
        </ul>
        <button className='c-btn'>Contact</button>
     </div>
      </div>
        <span className='n-line'></span>
    </div>
    </>
  )
}

export default Navbar