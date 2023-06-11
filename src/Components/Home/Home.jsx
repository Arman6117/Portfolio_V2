import React from "react";
import "./Home.scss";
import { ReactSVG } from "react-svg";
import React_SVG from "../../images/react.svg";
import Html_SVG from "../../images/html5.svg";
import Insta from "../../images/Instagram.svg";
import Git from "../../images/Github.svg";
import LinkedIn from "../../images/LinkedIn.svg";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="gradient"></div>
        <div className="home_text">
          <span className="txt greet">Hello</span>
          <span className="txt name">
            <span className="txt">
              I'm <span className="txt name"> Arman</span>
            </span>
          </span>
          <span className="txt title">Web <span className="txt subTxt">Developer</span></span>
        </div>
        <button className="hire_btn">Hire Me</button>
        <div className="home_compo">
          <ReactSVG className="react" src={React_SVG} />
        </div>
        <div className="home_compo2">
          <ReactSVG className="html" src={Html_SVG} />
        </div>
        <div className="social">
          <ReactSVG className="icon" src={Insta} />
          <ReactSVG className="icon" src={Git} />
          <ReactSVG className="icon" src={LinkedIn} />
        </div>
      </div>
    </>
  );
};

export default Home;
