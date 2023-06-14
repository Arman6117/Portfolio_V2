import React, { useEffect } from "react";
import "./Card.scss";
import { typeWrite } from "./Typing.js";

//!IMAGES!\\

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="c_content">
          <img src={props.img} alt="taskee" />
          <div className="c_txt">{props.title}</div>
          <div className="c_desc">{props.desc}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
