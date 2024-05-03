import React from "react";
import styles from "@/styles/components/DisplayCard.module.scss";
import tileStyles from "@/styles/components/Tile.module.scss";
import useIsMobile from "@/hooks/useIsMobile";
import Button from "./Button";
import Portal from "./Portal";
import { AnimatePresence } from "framer-motion";

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
  const { children, classname, icon } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <div className={`${classname} ` + styles.card}>
          <h1 className={styles.titleWithoutSize}>{props.title}</h1>
          <div
            className={
              "flex flex-col w-full h-full justify-center items-center"
            }
          >
            <span
              style={{ width: "75%" }}
              className={tileStyles.svg + " flex justify-center items-center"}
            >
              {icon}
            </span>
          </div>
        </div>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <Portal
            onClose={() => setIsOpen(false)}
            className={styles.card + ` ${styles.portal}`}
          >
            <div className={"flex justify-center"}>
              <h1 className={styles.title}>{props.title}</h1>
            </div>
            <div className={"flex flex-col grow overflow-auto"}>
              <div className={"flex flex-col grow"}>{children}</div>
              <div
                style={{ height: "75%" }}
                className={tileStyles.svg + " flex justify-center"}
              >
                {icon}
              </div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopDisplayCard = (props: Props) => {
  const { children, title, classname, icon } = props;
  return (
    <div className={styles.card + ` ${classname}`}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {classname ? children : <div className={styles.content}>{children}</div>}
      <div className={"w-full flex justify-end"}>
        <div className={tileStyles.svg}>{icon}</div>
      </div>
    </div>
  );
};

export default DisplayCard;
