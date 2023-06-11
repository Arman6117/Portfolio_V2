import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './React.scss'
const ReactDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="React" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background:" #0DB4FB" }}></div>
        <span className="skill_title" style={{ display: "block" }}>
          { props.class}
        </span>
        <div className="knowledge" style={{ background:" #0DB4FB" }}>
        <div className="first"></div>
        <div className="second ReactAnimation" ></div>
      </div>
        <div className="experience" style={{ background:" #0DB4FB" }}>
        <div className="first"></div>
        <div className="second ReactAnimation" ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default ReactDiv