import React,{useState,useEffect}from "react";
import "./Skills_info.scss";
import { Position } from "./Position";
import { Animation } from "./Animation";
const SkillsInfo = (props) => {
  const value = props.hover;
  const opacity = value ? 1 : 0;
  const skill = props.ele;
  const know = props.knowledge;
  console.log("value of know "+know);
  const ex = props.experience;
  const { top, left, color, scale } = Position(skill);
 
 
  const [values,setValues] = useState({
    k:0,
    e:0
  })

  useEffect(()=>{
    const {kValue,eValue}=Animation(know, ex);
    setValues(prevState =>({
      ...prevState,
      k: kValue,
      e: eValue
    }));
  },[know,ex])

  console.log(values.e);
  console.log(values.k);
  
  return (
    <>
    <style>
    {`
    @keyframes expe {
  0% {
    transform: translateY(${values.e}%) rotate(400deg) scale(1.6);
  }
  100% {
    transform: translateY(${values.e}%) rotate(600deg) scale(1.6);
  }
}
@keyframes knowledge {
  0% {
    transform: translateY(${values.k}%) rotate(400deg) scale(1.6);
  }
  100% {
    transform: translateY(${values.k}%) rotate(600deg) scale(1.6);
  }
}
    `}
    </style>
      <div
        className="skills-info"
        style={{
          opacity: opacity,
          top: top + "rem",
          left: left + "rem",
          transform: `scale(${scale})`,
        }}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="knowledge" style={{ background: color }}></div>
        <div className="expe" style={{ background: color }}></div>
        <span className="skill_title" style={{ display: "block" }}>
          {props.skill}
        </span>

        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
    </>
  );
};

export default SkillsInfo;
