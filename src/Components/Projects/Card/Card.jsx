import React, { useEffect } from "react";
import "./Card.scss";
import { typeWrite } from "./Typing.js";

//!IMAGES!\\
import Taskee from "../../../images/Projects/Taskee.png";
const Card = () => {
  useEffect(() => {
    const speed = 40;
    const elementId = "desc";
    const text =
      " Pariatur adipisicing amet cupidatat qui ex veniam veniam enim. Enim enim occaecat nostrud nostrud ut consequat eu consectetur veniam do irure. Qui elit esse occaecat . ";

    typeWrite(elementId, text, speed);
  }, []);
  return (
    <>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <strong>Taskee</strong>
              <span className="t-desc">Task Manager App</span>
              <div className="project-img">
                <img src={Taskee} alt="Taskee" />
              </div>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <div className="description">
                <div className="title-c">
                  <p className="title-c" id="desc">
                    {" "}
                    Pariatur adipisicing amet cupidatat qui ex veniam veniam
                    enim. Enim enim occaecat nostrud nostrud ut consequat eu
                    consectetur veniam do irure. Qui elit esse occaecat .{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="p-btn">Visit</button>
      </div>
    </>
  );
};

export default Card;
