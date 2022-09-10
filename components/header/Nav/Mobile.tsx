import Button from "components/base/Button";
import Portal from "../../base/Portal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "styles/components/Nav.module.scss";
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
            <MobileNav />
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileNav = () => {
  const navContext = useNavContext();
  const navLinks = navContext.links.map((link, index) => {
    return (
      <CustomLink
        href={link}
        key={index}
        sameSite={true}
        classname={styles.navItem}
      >
        {link}
      </CustomLink>
    );
  });

  return <div className={styles.nav}>{navLinks}</div>;
};

export default NavButton;
