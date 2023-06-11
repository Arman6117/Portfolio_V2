import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './Ex.scss'
const ExDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="Ex" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-Ex" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-Ex"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background:"black"}}></div>
        <span className="skill_title" style={{ display: "block" }}>
          Express
        </span>
        <div className="knowledge" style={{ background:"black"}}>
        <div className="first"></div>
        <div className="second-Ex " ></div>
      </div>
        <div className="experience" style={{ background:"black"}}>
        <div className="first"></div>
        <div className="second-Ex " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default ExDiv