import React from "react";
import { motion } from "framer-motion";
const Box4 = () => {
  return (
    <>
      {/* Drag animation */}
      <motion.div
        className="bg-orange-500 w-48 h-48 mt-10 ml-7 mb-28"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      ></motion.div>
    </>
  );
};

export default Box4;
