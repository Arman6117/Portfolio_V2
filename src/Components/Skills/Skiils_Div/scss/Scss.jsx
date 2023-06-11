import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './Scss.scss'
const SassDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="Sass" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-Sass" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-Sass"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background: "#FF007A"}}></div>
        <span className="skill_title" style={{ display: "block" }}>
         {props.class}
        </span>
        <div className="knowledge" style={{ background: "#FF007A"}}>
        <div className="first"></div>
        <div className="second-Sass " ></div>
      </div>
        <div className="experience" style={{ background: "#FF007A"}}>
        <div className="first"></div>
        <div className="second-Sass " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default SassDiv