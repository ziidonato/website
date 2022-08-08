import React from 'react'
import NavButton from './Nav/Nav';
import styles from "styles/Header.module.scss";
import Title from './Title';
import Links from './Links';


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerItem}>
            <Links />
        </div>
        <div className={styles.headerItem}>
          <Title />
        </div>
        <div className={styles.headerItem}>
          <NavButton />
        </div>

    </div>
  )
}

export default Header