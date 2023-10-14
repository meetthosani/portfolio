import { motion } from "framer-motion";
import { useState } from "react";
import "./About.scss";
import { images } from "../../constants";

function About() {
  const abouts = [
    { title: "Software Development", description: "", imgURL: images.sde },
    { title: "Machine Learning", description: "", imgURL: images.ml },
  ];
  return (
    <>
      <h2 className="head-text" style={{ marginTop: 2 + "rem" }}>
        <span>Software Engineer</span> <br />
        who loves to solve real world problems using data-driven approaches
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`${about.title}-${index}`}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
export default About;
