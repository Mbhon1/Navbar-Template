import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <>
      {/* Keyframes- using a set of arrays to define values */}
      <motion.div
        className="bg-orange-500 w-48 h-48 mt-10 ml-7"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 3.0 }}
      ></motion.div>
    </>
  );
};

export default Box2;
