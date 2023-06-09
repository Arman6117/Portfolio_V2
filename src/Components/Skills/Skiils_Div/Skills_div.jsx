import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import "./Skills_div.scss";

import SkillsInfo from "./Skills_Info/Skills_info";
const SkillsDiv = (props) => {
  const [ MouseIn, setMouseIn ] = useState({
    mouseIn:false,
    element:""
  });
  const updateMouseIn = () => {
    setMouseIn({
      mouseIn:true,
      element:props.class
    });
    
  };
  const updateMouseOut = () => {
    setMouseIn({
      mouseIn:false,
      element:""
    });
  };
 
  return (
    <>
      <div className={props.class} onMouseEnter={updateMouseIn} onMouseLeave={updateMouseOut}>
        <ReactSVG className="svg" src={props.src} />
      </div>
      <div>
        <SkillsInfo hover={MouseIn.mouseIn} 
          skill = {props.class}
          ele = {MouseIn.element}
          knowledge={props.knowledge}
          experience={props.experience}
        />
      </div>
    </>
  );
};

export default SkillsDiv;
