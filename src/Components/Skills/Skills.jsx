import React from "react";
import "./Skills.scss";
// import { ReactSVG } from "react-svg";

//!COMPONENTS
import PageTxt from "../PageTxt/Page";
import SkillsDiv from "./Skiils_Div/Skills_div";
//!IMAGES
import React_SVG from "../../images/reactSk.svg";
// import H_SVG from '../../images/icon.svg';
import CSS_SVG from '../../images/css3.svg';
import JS_SVG from '../../images/javascript.svg';
import Git_SVG from '../../images/git.svg';
import NPM_SVG from '../../images/npm.svg';
import Node_SVG from '../../images/node.svg';
import Ex_SVG from '../../images/express.svg';
import Java_SVG from '../../images/java.svg';
import SASS_SVG from '../../images/sass.svg';
const Skills = () => {
  return (
    <>
      <div className="skills">
        <div>
          <PageTxt
            title="Skills"
            desc1="Programming Languages/"
            desc2="Technical Expertise"
          />
          <div className="skills_div">
            <SkillsDiv class="React" src={React_SVG}/>
            <SkillsDiv class="HTML" src={CSS_SVG}/>
            <SkillsDiv class="CSS" src={CSS_SVG}/>
            <SkillsDiv class="JS" src={JS_SVG}/>
            <SkillsDiv class="Node" src={Node_SVG}/>
            <SkillsDiv class="Ex" src={Ex_SVG}/>
            <SkillsDiv class="SASS" src={SASS_SVG}/>
            <SkillsDiv class="Git" src={Git_SVG}/>
            <SkillsDiv class="Java" src={Java_SVG}/>
            <SkillsDiv class="NPM" src={NPM_SVG}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
