import React, { useState } from "react";
import "./Testimonials.css";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import { testimonialsData as t } from "./../../data/testimonialsData";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const { review, name, status, image } = t[selected];
  const transition = { type: "spring", duration: 3 };
  return (
    <div className='Testimonials' id="testimonials">
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <motion.span key={selected}
        initial={{ opacity:0,x:-100 }}
        animate={{ opacity:1,x:0 }}
        exit={{ opacity:0,x:100 }}
        transition={transition}>
          {review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>{name}</span> -{" "}
          <span>{status}</span>
        </span>
      </div>
      <div className='arrows'>
        <img
          onClick={() => {
            selected === 0
              ? setSelected(t.length - 1)
              : setSelected((s) => (s -= 1));
          }}
          src={LeftArrow}
          alt=''
        />
        <img
          onClick={() => {
            selected === t.length - 1
              ? setSelected(0)
              : setSelected((s) => ++s);
          }}
          src={RightArrow}
          alt=''
        />
      </div>
      <div className='right-t'>
        <motion.div
        initial={{ opacity:0,x:-100 }}
        whileInView={{ opacity:1,x:0 }}
        transition={{ ...transition,duration: 2 }}
        ></motion.div>
        <motion.div
        initial={{ opacity:0,x:100 }}
        whileInView={{ opacity:1,x:0}}
        transition={{ ...transition,duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity:0, x:100 }}
          animate={{ opacity:1, x:0 }}
          exit={{ opacity:0, x:-100 }}
          transition={transition}
          src={image}
          alt=''
        />
      </div>
    </div>
  );
};

export default Testimonials;
