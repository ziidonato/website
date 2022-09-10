import React from "react";
import pageStyles from "styles/Page.module.scss";
import Button from "components/base/Button";

type Props = {
  href?: string;
  children: React.ReactNode;
  sameSite: boolean;
  classname?: string;
  animate?: boolean;
};

const LinkComponent = (props: Props) => {
  const { href, children, sameSite, classname, animate } = props;

  if (sameSite) {
    const scrollFunction = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (animate) {
      return (
        <Button
          className={classname ? classname : pageStyles.link}
          onClick={() => scrollFunction((href as string).toLowerCase())}
        >
          {children}
        </Button>
      );
    } else {
      return (
        <button
          className={classname ? classname : pageStyles.link}
          onClick={() => scrollFunction((href as string).toLowerCase())}
        >
          {children}
        </button>
      );
    }
  } else {
    return (
      <a href={`/${href}`} className={classname ? classname : pageStyles.link}>
        {children}
      </a>
    );
  }
};

export default LinkComponent;
