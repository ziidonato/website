import React from "react";
import pageStyles from "styles/Page.module.scss";
import DisplayCard from "components/base/DisplayCard";
import tileStyles from "styles/components/Tile.module.scss";
import List from "components/base/List";
import CashLogo from "assets/svgs/CashLogo";
import WeatherLogo from "assets/svgs/WeatherLogo";
import GithubLogo from "../../assets/svgs/GithubLogo";
import CapitalOneLogo from "../../assets/svgs/CapitalOneLogo";
import useIsMobile from "../../hooks/useIsMobile";

const Projects = () => {
  const isMobile = useIsMobile();
  return (
    <div className={"w-full"} id={"projects"}>
      <h1 className={pageStyles.heading}>Projects</h1>
      <div className={pageStyles.pageContent}>
        {isMobile ? <MobileProjects /> : <DesktopProjects />}
      </div>
    </div>
  );
};

const MobileProjects = () => (
  <div className={pageStyles.grid}>
    <DisplayCard
      title={"BudgetWise - A budgeting app"}
      classname={tileStyles.tile}
      icon={<CashLogo />}
    >
      <div className={"w-full h-full overflow-scroll"}>
        <List
          title={"Technologies used:"}
          listItems={[
            "Django",
            "Next.js",
            "React",
            "Typescript",
            "Node.js",
            "TailwindCSS",
          ]}
          dropdown={true}
        />
        <List
          title={"Features:"}
          listItems={[
            "Budgeting",
            "Expense tracking",
            "Token Authentication",
            "Animations",
          ]}
          dropdown={true}
        />
        <div className={"pt-4"}>
          {`My first fullstack application, BudgetWise is a budgeting app that
              allows users to create budgets and track their expenses. It was
              built using Django for the backend, and Next.js for the frontend.
              It uses a PostgreSQL database, and is hosted on Heroku. `}
        </div>
      </div>
    </DisplayCard>
    <DisplayCard
      title={"Weather App"}
      classname={tileStyles.tile}
      icon={<WeatherLogo />}
    >
      <div className={"w-full h-full overflow-scroll"}>
        <List
          title={"Technologies used:"}
          listItems={["React", "Typescript", "TailwindCSS"]}
          dropdown={true}
        />
        <List
          title={"Features:"}
          listItems={[
            "Time-based display",
            "Conversion between multiple units",
            "Saved locations",
            "Indexed locations",
          ]}
          dropdown={true}
        />
      </div>
    </DisplayCard>
    <DisplayCard
      title={"Github Commits Frontend"}
      classname={tileStyles.tile}
      icon={<GithubLogo />}
    >
      <div className={"w-full h-full overflow-auto"}>github commits</div>
    </DisplayCard>
    <DisplayCard
      title={"Simulation Game Backend (ARCHIVED)"}
      classname={tileStyles.tile}
      icon={<CapitalOneLogo />}
    >
      <div className={"w-full h-full"}>simulation game</div>
    </DisplayCard>
  </div>
);

const DesktopProjects = () => (
  <>
    <DisplayCard
      title={"BudgetWise - A budgeting app"}
      classname={tileStyles.tile}
      icon={<CashLogo />}
    >
      <div className={"w-full h-full overflow-scroll"}>
        <List
          title={"Technologies used:"}
          listItems={[
            "Django",
            "Next.js",
            "React",
            "Typescript",
            "Node.js",
            "TailwindCSS",
          ]}
          dropdown={true}
        />
        <List
          title={"Features:"}
          listItems={[
            "Budgeting",
            "Expense tracking",
            "Token Authentication",
            "Animations",
          ]}
          dropdown={true}
        />
        <div className={"pt-4"}>
          {`My first fullstack application, BudgetWise is a budgeting app that
              allows users to create budgets and track their expenses. It was
              built using Django for the backend, and Next.js for the frontend.
              It uses a SQLite database, and is hosted on Heroku and Vercel.`}
        </div>
      </div>
    </DisplayCard>
    <DisplayCard
      title={"Weather App"}
      classname={tileStyles.tile}
      icon={<WeatherLogo />}
    >
      <div className={"w-full h-full overflow-scroll"}>
        <List
          title={"Technologies used:"}
          listItems={["React", "Typescript", "TailwindCSS"]}
          dropdown={true}
        />
        <List
          title={"Features:"}
          listItems={[
            "Time-based display",
            "Conversion between multiple units",
            "Saved locations",
            "Indexed locations",
          ]}
          dropdown={true}
        />
        <div className={"pt-4"}>
          {` A weather app that allows users to view the weather in their current
          location, or any other location they choose. It uses the Teleport API
          to get location data, and the OpenMeteo API to fetch weather data. It
          was built using React, Typescript, and TailwindCSS. It features heavy
          usage of context hooks, and is hosted on Vercel. `}
        </div>
      </div>
    </DisplayCard>
    <DisplayCard
      title={"Github Commits Frontend"}
      classname={tileStyles.tile}
      icon={<GithubLogo />}
    >
      <div className={"w-full h-full overflow-auto"}>
        <List title={"Technologies used:"} listItems={["Vue", "Typescript"]} />
        <List
          title={"Features:"}
          listItems={["View commits", "View all user repos", "Search users"]}
        />
        <div className={"pt-4"}>
          {` A frontend for the Github Commits API. It allows users to view commits
          made by a user, and view all of the user's repos. It was built using
          Vue and Typescript, and is hosted on Vercel.`}
        </div>
      </div>
    </DisplayCard>
    <DisplayCard
      title={"Simulation Game Backend (ARCHIVED)"}
      classname={tileStyles.tile}
      icon={<CapitalOneLogo />}
    >
      <div className={"w-full h-full"}>
        <List title={"Technologies used:"} listItems={["Django"]} />
        <List
          title={"Features:"}
          listItems={["REST API", "Emergent Behavior"]}
        />
        <div className={"pt-4"}>
          {`A backend for a simulation game. It's my first web application, built
          using Django. I built it as part of a Capital One Software Engineering
          Summit project, which won 3rd place. I worked on it with 3 other people,
          and handled delegation of tasks according to each person's comparative advantage.`}
        </div>
      </div>
    </DisplayCard>
  </>
);
export default Projects;
