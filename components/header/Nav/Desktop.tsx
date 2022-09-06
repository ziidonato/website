import React, {useEffect} from 'react';
import styles from "styles/components/Nav.module.scss";
import Link from "next/link";

const Desktop = () => {

    return (
        <div className={styles.nav}>
            <Link href="/">
                <a className={styles.navItem} key={"home"}>
                    Home
                </a>
            </Link>
            <Link href="/about">
                <a className={styles.navItem} key={"home"}>
                    About
                </a>
            </Link>
        </div>
    );
};

export default Desktop;