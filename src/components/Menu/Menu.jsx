import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return <div>Menu</div>;
};

export default Menu;
