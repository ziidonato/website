import React, { useEffect } from "react";
import styles from "styles/components/Header.module.scss";
import Links from "./Links";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <div className={styles.header} id={"header"}>
      <Links />
      <div className={styles.headerItem}>
        <h1 className={styles.title}>My name lol</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
