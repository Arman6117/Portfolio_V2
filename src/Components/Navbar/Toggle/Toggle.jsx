import React from 'react'
import "./Toggle.scss"
const Toggle = (props) => {
  const  handleClick = () => {
   
    
    if (props.opacity === 0) {
     props.element.style.opacity = "1"
    } else {
     props.element.style.opacity = "0"
    }
  }
  return (
    <>
    <div onClick={handleClick}>
   
    </div>
    </>
  )
}

export default Toggle