import Button from "@/components/base/Button";
import Portal from "../../base/Portal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "@/styles/components/Nav.module.scss";
import CustomLink from "../../base/CustomLink";
import { useNavContext } from "./Nav";

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex w-full justify-end mr-4">
        <Button onClick={() => setIsOpen(true)}>
          <i className={`fa-solid fa-bars fa-lg`} />
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Portal onClose={() => setIsOpen(false)} className={"top-20 right-4"}>
            <MobileNav onClose={() => setIsOpen(false)} />
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileNav = (props: { onClose: () => void }) => {
  const navContext = useNavContext();
  const navLinks = navContext.links.map((link, index) => {
    return (
      <Button onClick={props.onClose} key={index} className={styles.navItem}>
        <CustomLink href={link} sameSite={true}>
          {link}
        </CustomLink>
      </Button>
    );
  });

  return <div className={styles.nav}>{navLinks}</div>;
};

export default NavButton;
