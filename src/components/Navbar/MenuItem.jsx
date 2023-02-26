import { motion } from "framer-motion";
import React from "react";

const container = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100,
      },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }) => {
  const styles = { border: `2px solid ${colors[i]}` };

  return (
    <motion.li
      variants={container}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={styles}></div>
      <div className="text-placeholder" style={styles}></div>
    </motion.li>
  );
};

export default MenuItem;
