import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "./../../data/plansData";

const Plans = () => {
  return (
    <div className='plans-container'>
      <div className='blur plans-blur-1 '></div>
      <div className='blur plans-blur-2 '></div>
      <div className='programs-header'>
        <span className='stroke-text'>ready to start</span>
        <span>you journey</span>
        <span className='stroke-text'>now with us</span>
      </div>
      <div className='plans'>
        {plansData.map(({ name, icon, price, features }, i) => (
          <div className='plan' key={i}>
            {icon}
            <span>{name}</span>
            <span>$ {price}</span>
            <div className='features'>
              {features.map((feature, i) => (
                <div key={i} className='feature'>
                  <img src={whiteTick} alt='' />
                  <span >{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -&gt; </span>
            </div>
            <button className='btn'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
