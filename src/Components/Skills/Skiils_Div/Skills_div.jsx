import React from "react";
import { ReactSVG } from "react-svg";
import "./Skills_div.scss";

const SkillsDiv = (props) => {
  return (
    <div className={props.class}>
      <ReactSVG className="svg" src={props.src} />
    </div>
  );
};

export default SkillsDiv;
