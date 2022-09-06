import React, {PropsWithChildren} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const PageOverlay = ({children}: PropsWithChildren) => {
  const currentPath = useRouter().pathname;
  return (
    <AnimatePresence>
      <motion.div key={currentPath}>
          {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageOverlay;
