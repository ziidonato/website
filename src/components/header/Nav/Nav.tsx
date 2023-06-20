import React, { useContext, } from "react";
import styles from "@/styles/components/Header.module.scss";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import useIsMobile from "@/hooks/useIsMobile";

type NavContextType = {
  currentPath: string;
  links: string[];
};

const NavContext = React.createContext({} as NavContextType);

const Nav = () => {
  const isMobile = useIsMobile();
  const currentPath = window.location.pathname;
  const links = ["home", "experience", "about"];

  return (
    <NavContext.Provider value={{ currentPath: currentPath, links: links }}>
      <div className={styles.headerItem}>
        {isMobile ? <Mobile /> : <Desktop />}
      </div>
    </NavContext.Provider>
  );
};

export default Nav;

export const useNavContext = () => useContext(NavContext);
