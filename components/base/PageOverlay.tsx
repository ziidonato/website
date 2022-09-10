import React, { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { animationTransition } from "../../lib/globals";
import pageStyles from "styles/Page.module.scss";

const PageOverlay = ({ children }: PropsWithChildren) => {
  const currentPath = useRouter().pathname;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={animationTransition}
        className={pageStyles.pageOverlay}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageOverlay;
