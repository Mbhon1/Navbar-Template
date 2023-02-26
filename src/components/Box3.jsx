import React, { useState } from "react";
import { motion } from "framer-motion";

const myVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const Box3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <motion.div
        className="bg-orange-500 w-48 h-48 mt-10 ml-7"
        animate={isOpen ? "open" : "closed"}
        variants={myVariants}
        onClick={handleClick}
        initial={{}}
      ></motion.div>
    </>
  );
};

export default Box3;
