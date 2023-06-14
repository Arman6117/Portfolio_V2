import React from "react";
import "./Projects.scss";
import Page from "../PageTxt/Page";
import Card from "./Card/Card";
import { register } from "swiper/element/bundle";
import Taskee from "../../images/Projects/Taskee.png"
const Projects = () => {
  register();

  return (
    <>
      <div className="projects">
        <div className="projects_txt">
          <Page
            title="Projects"
           desc1="Practice Projects/"
           desc2="Client Projects"
          />
        </div>
        <swiper-container class="mySwiper" effect="cards" grab-cursor="true">
    <swiper-slide><Card 
      
    /></swiper-slide>
    <swiper-slide><Card img={Taskee} title="Taskee" desc=" Effortlessly manage tasks, set priorities, and track progress. Stay focused, meet deadlines, and achieve your goals with ease. Simplify your life with Taskee."/></swiper-slide>
    <swiper-slide><Card title="Project 1" /></swiper-slide>
    <swiper-slide><Card  title="Project 2"/></swiper-slide>
   
  </swiper-container>
      </div>
    </>
  );
};

export default Projects;
