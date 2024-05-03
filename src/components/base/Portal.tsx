import React, { MouseEventHandler, useRef } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import styles from "@/styles/components/Portal.module.scss";
import { animationTransition } from "@/lib/globals";

type PortalProps = {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

const Portal = (props: PortalProps) => {
  const { children, onClose, className } = props;
  const ref = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const portal = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={animationTransition}
      className={styles.portal}
      onClick={handleClick}
    >
      <motion.div className={styles.portalContent + " " + className} ref={ref}>
        {children}
      </motion.div>
    </motion.div>
  );

  return createPortal(
    portal,
    document.getElementById("portals") as HTMLElement,
  );
};

export default Portal;
