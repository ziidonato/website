import React, {useEffect} from "react";
import styles from "styles/Header.module.scss";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import useIsMobile from "hooks/useIsMobile";

const Nav = () => {
    const isMobile = useIsMobile();
  return (
    <div className={styles.headerItem}>
        {isMobile? <Mobile /> : <Desktop />}
    </div>
  );
};

export default Nav;
