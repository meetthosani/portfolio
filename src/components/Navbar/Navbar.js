import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const items = ["home", "about", "work", "skills", "contact"];
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const listOfItems = items.map((item) => (
    <li className="app__flex p-text" key={`link-${item}`}>
      <div />
      <a href={`${item}`}>{item}</a>
    </li>
  ));
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">{listOfItems}</ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
export { items };
