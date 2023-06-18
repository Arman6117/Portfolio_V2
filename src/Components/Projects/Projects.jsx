import React, { useRef, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import "./Projects.scss";
import Page from "../PageTxt/Page";
import Card from "./Card/Card";
import { register } from "swiper/element/bundle";
import { ProjectData } from "./ProjectData";

SwiperCore.use([Navigation]);

const Projects = () => {
  register();

  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", handleChange);
    }
  }, []);

  const handleChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current?.swiper.activeIndex;
      const slides = document.querySelectorAll("swiper-slide");

      slides.forEach((slides, index) => {
        if (index === activeIndex) {
          slides.classList.add("active");
        } else {
          slides.classList.remove("active");
        }
      });
    }
  };

  return (
    <>
      <div className="projects" id="Projects">
        <div className="projects_txt">
          <Page
            title="Projects"
            desc1="Practice Projects/"
            desc2="Client Projects"
          />
        </div>
        <swiper-container
          class="mySwiper"
          effect="cards"
          grab-cursor="true"
          onSLideChange={handleChange}
          ref={swiperRef}
        >
          {ProjectData.map((project, index) => (
            <swiper-slide key={index}>
              <Card {...project} />
            </swiper-slide>
          ))}
        </swiper-container>
        <div>
          <a href="https://github.com/Arman6117" target="_blank" >
            <button className="p_btn">View On GitHub</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
