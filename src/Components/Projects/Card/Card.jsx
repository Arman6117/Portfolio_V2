import React from "react";
import "./Card.scss";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <strong>Taskee</strong>
            </div>
          </div>
          <div class="front">
            <div class="img">
              <div class="circle"></div>
              <div class="circle" id="right"></div>
              <div class="circle" id="bottom"></div>
            </div>

            <div class="front-content">
              
              <div class="description">
                <div class="title-c">
                  <p class="title-c">
                 Hello
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Card;
