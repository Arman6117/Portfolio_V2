import React from "react";
import "./Skills.scss";
// import { ReactSVG } from "react-svg";

//!COMPONENTS
import ReactDiv from "./Skiils_Div/React/React";
import PageTxt from "../PageTxt/Page";
import HtmlDiv from "./Skiils_Div/Html/Html";
import CSSDiv from "./Skiils_Div/Css/CSS";
import JSDiv from "./Skiils_Div/JS/JS";
import NodeDiv from "./Skiils_Div/Node/Node";
import ExDiv from "./Skiils_Div/Ex/Ex";
import JavaDiv from "./Skiils_Div/Java/Java";
import SassDiv from "./Skiils_Div/scss/Scss";
import GitDiv from "./Skiils_Div/Git/Git";
import NpmDiv from "./Skiils_Div/NPM/Npm";
//!IMAGES
import React_SVG from "../../images/reactSk.svg";
import Html_SVG from '../../images/html.svg';
import CSS_SVG from "../../images/css3.svg";
import JS_SVG from "../../images/javascript.svg";
import Git_SVG from "../../images/git.svg";
import NPM_SVG from "../../images/npm.svg";
import Node_SVG from "../../images/node.svg";
import Ex_SVG from "../../images/express.svg";
import Java_SVG from "../../images/java.svg";
import SASS_SVG from "../../images/sass.svg";
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
            <ReactDiv class="React" src={React_SVG} />
            <HtmlDiv class="HTML" src={Html_SVG}  />
            <CSSDiv class="CSS" src={CSS_SVG}  />
            <JSDiv class="JS" src={JS_SVG}  />
            <NodeDiv class="Node" src={Node_SVG}  />
            <ExDiv class="Ex" src={Ex_SVG}  />
            <JavaDiv class="Java" src={Java_SVG}  />
            <SassDiv class="SASS" src={SASS_SVG}  />
            <GitDiv class="Git" src={Git_SVG}  />
            <NpmDiv class="Npm" src={NPM_SVG}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
