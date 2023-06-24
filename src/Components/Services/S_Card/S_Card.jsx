import React from 'react'
import "./S_Card.scss"
import Ui from '../../../images/Services/Ui_ux.png'
const SCard = (props) => {
  return (
    <>
    <div className='s_card'>
        <div className='s-content'>
            <img src={props.img}  />
            <h3>{props.title}</h3>
            <p> {props.detail}</p>
        </div>
    </div>
    </>
  )
}

export default SCard