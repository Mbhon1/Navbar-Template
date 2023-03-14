import React from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-scroll";

const links = [
  { name: "Home", to: "hero", id: 1 },
  { name: "About", to: "about", id: 2 },
  { name: "Services", to: "services", id: 3 },
  { name: "Contact", to: "contact", id: 4 },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const Sidebar = (props) => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main className="flex">
      {open && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          className={`w-[18.75rem] h-[100vh] ${
            props.darkMode ? "dark" : "bg-red-600"
          }`}
        >
          <motion.div
            initial="closed"
            animate="open"
            variants={sideVariants}
            className="my-[4.5rem] mx-[1.4rem]"
          >
            {links.map(({ name, to, id }, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  key={id}
                  to={to}
                  className="text-white text-2xl font-extrabold block m-[20px]"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center text-[0.65rem] font-extrabold toggler">
              <p className="toggler--light text-[#2b283a] dark:text-[#918e9b]">
                Light
              </p>
              <div
                className="toggler--slider w-[25px] h-[13px] bg-[#2b283a] rounded-[2rem] cursor-pointer flex justify-start dark:justify-end items-center border-black border-solid border box-content dak:border-white dark:bg-[#f5f5f5]"
                onClick={props.toggleDarkMode}
              >
                <div className="toggler--slider--circle h-[13px] w-[13px] bg-white rounded-[50%] dark:bg-black"></div>
              </div>
              <p className="text-[0.65rem] text-[#d5d4d8] dark:text-[#ffffff] font-extrabold">
                Dark
              </p>
            </div>
          </div>
        </motion.aside>
      )}
      <div className="fixed">
        <button
          onClick={cycleOpen}
          className="cursor-pointer m-[1.25rem] border-none py-[0.5rem] px-[1rem] bg-white"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
