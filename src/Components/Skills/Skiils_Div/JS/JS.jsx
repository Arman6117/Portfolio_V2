import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './JS.scss'
const JSDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="JS" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-j" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-j"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background:"#F7DF1E" }}></div>
        <span className="skill_title" style={{ display: "block" }}>
          { props.class}
        </span>
        <div className="knowledge" style={{ background:"#F7DF1E" }}>
        <div className="first"></div>
        <div className="second-j " ></div>
      </div>
        <div className="experience" style={{ background:"#F7DF1E" }}>
        <div className="first"></div>
        <div className="second-j " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default JSDiv