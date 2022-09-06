import React from "react";
import pageStyles from "styles/components/Page.module.scss";
import Button from "../base/Button";
import CustomLink from "../base/CustomLink";

const Home = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={"h-full"} id={"home"}>
      <div className={"h-2/6"}>
        <h1 className={pageStyles.heading}>Hi!</h1>
        <h1 className={pageStyles.heading}>I write code.</h1>
      </div>
      <div className={"h-2/6"}>
        <CustomLink href={"projects"} sameSite={true} scroll={true}>
          <h1 className={"text-center text-3xl"}>
            Wanna see?{" "}
            <i className={"fas fa-arrow-right"} aria-hidden={"true"} />
          </h1>
        </CustomLink>
      </div>
      <Button
        onClick={() => scrollTo("skills")}
        className={"w-full text-center"}
      >
        <i aria-hidden className={"fas fa-arrow-down fa-2xl"} />
      </Button>
    </div>
  );
};

export default Home;
