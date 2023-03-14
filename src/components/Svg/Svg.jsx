import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

const transition = {
  repeat: Infinity,
  bounce: 0.75,
  type: "spring",
  duration: 2,
};

const progress = 50;

const Svg = () => {
  const pathRefForeground = useRef(null);

  const progressLength = useMotionValue(0);
  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);

  useEffect(() => {
    const pathElementForeground = pathRefForeground.current;
    const totalPathLength = pathElementForeground.getTotalLength();
    const initialProgress = progressLength.get();

    const initialCoords = pathElementForeground.getPointAtLength(
      initialProgress * totalPathLength
    );

    progressX.set(initialCoords.x);
    progressY.set(initialCoords.y);

    const unsubscribe = progressLength.onChange((latestPercent) => {
      const latestPathProgress = pathElementForeground.getPointAtLength(
        latestPercent * totalPathLength
      );

      progressX.set(latestPathProgress.x);
      progressY.set(latestPathProgress.y);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="min-h-[500] flex flex-col justify-center items-center border-green-600">
      <motion.svg width="500" height="50" viewBox="0 0 500 30">
        <motion.path
          stroke="red"
          strokeWidth="10"
          strokeLinecap="round"
          d="M15 15 H490"
        />
        <motion.path
          d="M15 15 H490"
          stroke="#1f88eb"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress / 100 }}
          transition={transition}
          ref={pathRefForeground}
          pathLength={progressLength}
        />
        <motion.circle cx={progressX} cy={progressY} r="15" fill="#1f88eb" />
        <motion.circle cx={progressX} cy={progressY} r="5" fill="white" />
      </motion.svg>
    </div>
  );
};

export default Svg;
