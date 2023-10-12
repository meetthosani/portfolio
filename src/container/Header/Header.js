import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

function Header() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const skills = [
    images.python,
    images.javascript,
    images.node,
    images.react,
    images.git,
  ];
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header__info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🤘🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Meet Thosani</h1>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Software Engineering</p>
              <p className="p-text">Machine Learning</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {skills.map((skill, index) => (
          <div className="circle-cmp app__flex" key={`circle-${skill}`}>
            <img src={skill} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Header;
