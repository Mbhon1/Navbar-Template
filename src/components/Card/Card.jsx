import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import nail from "/nail4.jpg";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="py-10 flex items-center justify-center">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={handleClick}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.9)",
          width: "200px",
        }}
        className=""
      >
        <img src={nail} />
        <motion.h1 className="flex items-center justify-center">
          Product Name
        </motion.h1>
        {isOpen && (
          <div className="flex items-center justify-center flex-col px-4 py-4">
            <motion.p>R199.99</motion.p>
            <motion.p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              voluptatum, error ipsum iusto dicta impedit cum illo vero neque
              totam?
            </motion.p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Card;
