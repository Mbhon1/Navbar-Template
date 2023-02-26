import React from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  return (
    <>
      {/* Pop animation */}
      <motion.div
        className="bg-orange-500 w-48 h-48 mt-10 ml-7"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
      ></motion.div>
    </>
  );
};

export default Box1;
