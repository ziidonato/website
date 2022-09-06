import React, { useEffect } from "react";
import styles from "styles/components/Nav.module.scss";
import CustomLink from "components/base/CustomLink";
import { useNavContext } from "./Nav";

const Desktop = () => {
  const navContext = useNavContext();
  const navLinks = navContext.links.map((link, index) => {
    return (
      <CustomLink
        href={link}
        key={index}
        sameSite={true}
        classname={
          styles.navItem +
          " " +
          (navContext.currentPath === `/${link}` ? styles.active : "")
        }
        scroll={true}
      >
        {link}
      </CustomLink>
    );
  });

  return (
      <div className={styles.nav + " mr-2"}>{navLinks}</div>
  );
};

export default Desktop;
