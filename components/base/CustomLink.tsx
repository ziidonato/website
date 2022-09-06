import React from "react";
import pageStyles from "styles/components/Page.module.scss";
import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  sameSite: boolean;
  classname?: string;
  scroll?: boolean;
};

const LinkComponent = (props: Props) => {
  const { href, children, sameSite, classname, scroll } = props;

  if (sameSite) {
    if (scroll) {
      const scrollFunction = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      return (
        <div
          className={classname ? classname : pageStyles.link}
          onClick={() => scrollFunction((href as string).toLowerCase())}
        >
          {children}
        </div>
      );
    } else {
      const new_href = href === "home" ? "" : href;
      return (
        <Link href={`/${new_href}`}>
          <a className={classname ? classname : pageStyles.link}>{children}</a>
        </Link>
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
