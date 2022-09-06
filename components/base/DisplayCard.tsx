import React from "react";
import styles from "styles/components/DisplayCard.module.scss";
import useIsMobile from "../../hooks/useIsMobile";
import Mobile from "../header/Nav/Mobile";
import Button from "./Button";
import Portal from "./Portal";
import {AnimatePresence} from "framer-motion";

type Props = {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  classname?: string;
  icon?: React.ReactNode;
};

const DisplayCard = (props: Props) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileDisplayCard {...props} />;
  } else {
    return <DesktopDisplayCard {...props} />;
  }
};

const MobileDisplayCard = (props: Props) => {
  const { children, title, classname, icon } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <div className={styles.card}>
          <h1 className={styles.title}>{props.title}</h1>
          {icon}
        </div>
      </Button>
      <AnimatePresence>
      {isOpen && (
            <Portal
                onClose={() => setIsOpen(false)}
                className={styles.card}
            >
              <h1 className={styles.title}>{props.title}</h1>
              {icon}
              {children}
            </Portal>
      )}
      </AnimatePresence>
    </>
  );
};

const DesktopDisplayCard = (props: Props) => {
  const { children, title, classname } = props;
  return (
    <div className={classname ? classname : styles.card}>
      <>
        {title && <h1 className={styles.title}>{title}</h1>}
        {classname ? (
          { children }
        ) : (
          <div className={styles.content}>{children}</div>
        )}
      </>
    </div>
  );
};

export default DisplayCard;
