import React from "react";
import "./Programs.css";
import RightArrow from "../../assets/rightArrow.png";
import { programsData } from "./../../data/programsData";
export const Programs = () => {
  return (
    <div className='programs' id='programs'>
      <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className='program-categories'>
        {programsData.map(({ image, heading, details }, i) => {
          return (
            <div key={i} className='category'>
              {image}
              <span>{heading}</span>
              <span>{details}</span>
              <div className='join-now'>
                <span>Join Now</span>
                <img src={RightArrow} alt='' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
