import React, {useEffect} from "react";
import styles from "styles/Header.module.scss";
import Links from "./Links";
import Nav from "./Nav/Nav";

const Header = () => {

    //log what the mouse is hovering over
    useEffect(() => {
        const handleMouseOver = (event: MouseEvent) => {
            console.log(event.target);
        };
        document.addEventListener("mouseover", handleMouseOver);
        return () => {
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);
  return (
    <div className={styles.header}>
      <Links />
      <div className={styles.headerItem}>
        <h1 className={styles.title}>My name lol</h1>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
