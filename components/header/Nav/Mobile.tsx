import Button from "components/base/Button";
import Portal from "../../base/Portal";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import styles from "styles/components/Nav.module.scss"
import Link from "next/link";

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-end mr-4">
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
    return (
        <div className={styles.nav}>
            <Link href="/">
                <a className={styles.navItem}>
                    Home
                </a>
            </Link>
            <Link href="/about">
                <a className={styles.navItem}>
                    About
                </a>
            </Link>
        </div>
    );
}

export default NavButton;
