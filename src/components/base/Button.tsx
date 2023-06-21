import React from "react";
import { motion } from "framer-motion";
import { animationTransition } from "../../lib/globals";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { onClick, className, children } = props;
  const defaultStyle = "flex justify-center items-center";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={animationTransition}
      className={className ? className : defaultStyle}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
