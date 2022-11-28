import React from "react";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import Header from "../Header/Header.jsx";
import {motion} from 'framer-motion'
//var motion = require("framer-motion");
import "./Hero.css";
//import "./Hero2.css";
const Hero = () => {
   const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;


  return (
    <div className='hero' id="home">
      <div className='hero-blur blur'></div>
      <div className='left-h'>
        <Header />
        {/* the-best-ad */}
        <div className='the-best-ad'>
          <motion.div
          initial={{ left: mobile ? "165px" : "200px" }}
          whileInView={{ left: "8px" }}
          transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero-text */}
        <div className='hero-text'>
          
          <div>
            <span className='stroke-text'>shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              in her we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <motion.div
          className='heart-rate'
          initial={{ x:50 }}
          whileInView={{ x:0 }}
          transition={transition}
        >
          <img src={heart} alt='' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt='' className='hero-image' />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=''
          className='hero-image-back'
        />
        <motion.div
          className='calories'
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={calories} alt='' />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
