import type { NextPage } from "next";
import { HomeView, ExperienceView, ProjectsView, AboutView } from "components/Views";

const Home: NextPage = () => {
  return (
    <div className={"w-full h-full items-center overflow-scroll"}>
      <HomeView />
        <ExperienceView />
        <ProjectsView />
        <AboutView />
    </div>
  );
};

export default Home;
