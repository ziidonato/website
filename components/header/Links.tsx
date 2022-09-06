import React from "react";
import styles from "styles/Header.module.scss";
import Button from "components/base/Button";

const Links = () => {
  return (
    <div className={styles.headerItem}>
      <div className="flex justify-start ml-2">
        <Button>
          <a
            href="https://1drv.ms/b/s!AtHSlb9sXG2S503COKUm9jWt4DF_?e=vtkr8M"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-solid fa-file fa-lg" />
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/gatlace"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-github fa-lg" />
          </a>
        </Button>
        <Button>
          <a
            href="https://www.linkedin.com/in/zii-donato/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-linkedin-in fa-lg" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Links;
