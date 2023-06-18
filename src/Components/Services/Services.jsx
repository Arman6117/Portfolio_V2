import React from "react";
import "./Services.scss";
import Page from "../PageTxt/Page";
import SwiperCore, { Navigation } from "swiper";
import { register } from "swiper/element/bundle";
import SCard from "./S_Card/S_Card";
import { S_CardData } from "./S_Card/S_CardData";
import { Link } from "react-scroll/modules";
SwiperCore.use([Navigation]);
const Services = () => {
  register();
  return (
    <>
      <div className="services" id="Services">
        <div className="s-txt">
          <Page
            title="Services"
            desc1="Web-Dev Services /"
            desc2="Web-Design Services"
          />
             <Link
          spy={true}
          to="Contact"
          smooth={true}
          activeClass="activeClass"
          style={{ cursor: "pointer" }}
        >
          <button className="hire_btn">Hire Me</button>
        </Link>
          <div className="s-card">
            <swiper-container
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              className="mySwiper"
              pagination="true"
              effect="coverflow"
              grab-cursor="true"
              centered-slides="true"
              slides-per-view="auto"
              coverflow-effect-rotate="50"
              coverflow-effect-stretch="0"
              coverflow-effect-depth="100"
              coverflow-effect-modifier="1"
              coverflow-effect-slide-shadows="true"
            >
            {S_CardData.map((data,index)=>
             <swiper-slide key={index}>
              <SCard {...data} />
             </swiper-slide>
            )}
           
            </swiper-container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
