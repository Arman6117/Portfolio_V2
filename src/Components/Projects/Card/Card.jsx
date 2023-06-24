import React, { useEffect } from "react";
import Taskee from '../../../images/Projects/Taskee.png'
import "./Card.scss";


//!IMAGES!\\

const Card = (props) => {
  console.log(props.img);
  return (
    <>
      <div className="card">
        <div className="c_content">
          <img src={props.img} alt={props.title} />
          <div className="c_txt">{props.title}</div>
          <div className="c_desc">{props.desc}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
