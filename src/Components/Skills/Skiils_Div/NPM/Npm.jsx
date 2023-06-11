import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './Npm.scss'
const NpmDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="Npm" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-Npm" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-Npm"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background: "#C53735"}}></div>
        <span className="skill_title" style={{ display: "block" }}>
         {props.class}
        </span>
        <div className="knowledge" style={{ background: "#C53735"}}>
        <div className="first"></div>
        <div className="second-Npm " ></div>
      </div>
        <div className="experience" style={{ background: "#C53735"}}>
        <div className="first"></div>
        <div className="second-Npm " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default NpmDiv