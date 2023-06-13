import React from "react";
import "./Projects.scss";
import Page from "../PageTxt/Page";
import Card from "./Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselCustomStyles = {
    // Adjust the margin and padding as per your preference
    padding: "0 10px",
  };

  return (
    <>
      <div className="projects">
        <div className="projects_txt">
          <Page
            title="Projects"
            desc1="Practice Projects/"
            desc2="Commercial Projects"
          />
        </div>

        <Carousel
          responsive={responsive}
         
          containerClass="carousel-container"
          customStyles={carouselCustomStyles}
        >
          <div className="card-item">
            <Card />
          </div>
          <div className="card-item">
            <Card />
          </div>
          <div className="card-item">
            <Card />
          </div>
          <div className="card-item">
            <Card />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Projects;
