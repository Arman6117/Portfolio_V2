import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './Html.scss'
const HtmlDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="HTML" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-h" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-h"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background:"#FF6C19" }}></div>
        <span className="skill_title" style={{ display: "block" }}>
          { props.class}
        </span>
        <div className="knowledge" style={{ background:"#FF6C19" }}>
        <div className="first"></div>
        <div className="second-h " ></div>
      </div>
        <div className="experience" style={{ background:"#FF6C19" }}>
        <div className="first"></div>
        <div className="second-h " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default HtmlDiv