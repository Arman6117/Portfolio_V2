import React from 'react'
import "./Toggle.scss"
const Toggle = () => {
  return (
    <>
          <label for="check">
      <input type="checkbox" id="check"/> 
      <span className='span'></span>
      <span className='span'></span>
      <span className='span'></span>
    </label>
    </>
  )
}

export default Toggle