import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './Git.scss'
const GitDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="Git" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-Git" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-Git"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background: "#F34F29"}}></div>
        <span className="skill_title" style={{ display: "block" }}>
         {props.class}
        </span>
        <div className="knowledge" style={{ background: "#F34F29"}}>
        <div className="first"></div>
        <div className="second-Git " ></div>
      </div>
        <div className="experience" style={{ background: "#F34F29"}}>
        <div className="first"></div>
        <div className="second-Git " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default GitDiv