import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const container = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemIds = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

const Navigation = () => {
  return (
    <motion.ul variants={container}>
      {itemIds.map((i) => {
        return <MenuItem key={i} i={i} />;
      })}
    </motion.ul>
  );
};

export default Navigation;
