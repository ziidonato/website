import styles from "@/styles/components/Header.module.scss";
import Button from "@/components/base/Button";

const Links = () => {
  return (
    <div className={styles.headerItem}>
      <div className="flex justify-start ml-2">
        <Button>
          <a href="/resume.pdf" rel="noreferrer" className={styles.link}>
            <i className="fa-solid fa-file fa-lg" />
          </a>
        </Button>
        <Button>
          <a
            href="https://github.com/ziidonato"
            rel="noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-github fa-lg" />
          </a>
        </Button>
        <Button>
          <a
            href="https://www.linkedin.com/in/zii-donato/"
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
