import React, {useState} from 'react'
import { ReactSVG } from "react-svg";

import './Node.scss'
const NodeDiv = (props) => {
    const [opacity,setOpacity] = useState(0);
    
    const updateOpacity = () =>{
       setOpacity(1)
    }
    const removeOpacity = () =>{
       setOpacity(0)
    }
  return (
    <>
      <div className="Node" onMouseEnter={updateOpacity} onMouseLeave={removeOpacity}>
        <ReactSVG className="svg-node" src={props.src} />
      </div>
      <div>
      <div
        className="skills-info-node"
        style={{opacity:opacity}}
      >
        <div className="ball"></div>
        <div className="ball"></div>
        
        <div  style={{ background:"#83CD29" }}></div>
        <span className="skill_title" style={{ display: "block" }}>
          { props.class}
        </span>
        <div className="knowledge" style={{ background:"#83CD29" }}>
        <div className="first"></div>
        <div className="second-node " ></div>
      </div>
        <div className="experience" style={{ background:"#83CD29" }}>
        <div className="first"></div>
        <div className="second-node " ></div>
      </div>
        <span className="skill-know">knowledge</span>

        <span className="skill-expe">Experience</span>
      </div>
      </div>
    </>
  )
}

export default NodeDiv