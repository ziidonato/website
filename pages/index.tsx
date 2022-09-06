import type { NextPage } from "next";
import pageStyles from "styles/components/Page.module.scss";
import CustomLink from "../components/base/CustomLink";
import Button from "../components/base/Button";
import { useRouter } from "next/router";
import DisplayCard from "../components/base/DisplayCard";
import { HomeView, AboutView } from "components/Views";

const Home: NextPage = () => {
  return (
    <div className={"w-full h-full items-center overflow-scroll"}>
        <HomeView />
        <AboutView />
      <div
        className={"flex flex-col h-full w-full items-center"}
        id={"projects"}
      >
        <h1 className={pageStyles.heading}>Projects</h1>
      </div>
    </div>
  );
};

export default Home;
