import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './CSS.scss'
const CSSDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="CSS" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-c" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-c"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background:"#1572B6" }}></div>
        <span className="skill_title" style={{ display: "block" }}>
          { props.class}
        </span>
        <div className="knowledge" style={{ background:"#1572B6" }}>
        <div className="first"></div>
        <div className="second-h " ></div>
      </div>
        <div className="experience" style={{ background:"#1572B6" }}>
        <div className="first"></div>
        <div className="second-c " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default CSSDiv