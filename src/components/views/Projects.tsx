import pageStyles from "@/styles/Page.module.scss";
import DisplayCard from "@/components/base/DisplayCard";
import tileStyles from "@/styles/components/Tile.module.scss";
import List from "@/components/base/List";
import CashLogo from "@/assets/svgs/CashLogo";
import CapitalOneLogo from "../../assets/svgs/CapitalOneLogo";
import useIsMobile from "../../hooks/useIsMobile";
import CustomLink from "../base/CustomLink";

const Projects = () => {
  const isMobile = useIsMobile();
  return (
    <div className={"w-full"} id={"projects"}>
      <h1 className={pageStyles.heading}>Projects</h1>
      {isMobile ? <MobileProjects /> : <DesktopProjects />}
    </div>
  );
};

const MobileProjects = () => (
  <div className={"w-full flex justify-center"}>
    <div className={pageStyles.grid}>
      <DisplayCards />
    </div>
  </div>
);

const DesktopProjects = () => (
  <div className={pageStyles.pageContent}>
    <DisplayCards />
  </div>
);

const DisplayCards = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <DisplayCard
        title={
          <>
            <CustomLink
              sameSite={false}
              href={
                "https://docs.rs/tracing-systemd/0.1.0/tracing_systemd/index.html"
              }
            >
              tracing_systemd
            </CustomLink>
            {!isMobile && (
              <>
                {" | "}
                <CustomLink
                  sameSite={false}
                  href={"https://github.com/ziidonato/commits-frontend/"}
                >
                  {"</>"}
                </CustomLink>
              </>
            )}
          </>
        }
        classname={tileStyles.tile}
        icon={<img src="/rust.png" />}
      >
        <div className={"w-full h-full overflow-y-auto"}>
          <List
            title={"Features:"}
            listItems={[
              "Colored Output",
              "Highly Configurable",
              "Integrated seamlessly with the tracing crate",
            ]}
          />
          <div className={"pt-4"}>
            {` A tracing_subscriber layer for the tracing crate that outputs logs in the systemd journal.
            It was built using Rust and is available on crates.io. The output is highly configurable with
            optional colored output. It implements the required interfaces to integrate seamlessly with the tracing crate.`}
          </div>
        </div>
      </DisplayCard>
      <DisplayCard
        title={
          <>
            ESP32 Paper Trader
            {!isMobile && (
              <>
                {" | "}
                <CustomLink
                  sameSite={false}
                  href={"https://github.com/ziidonato/Paper-Trader"}
                >
                  {"</>"}
                </CustomLink>
              </>
            )}
          </>
        }
        classname={tileStyles.tile}
        icon={<img src="/candlestick.png" />}
      >
        <div className={"w-full h-full overflow-y-auto"}>
          <List
            title={"Technologies used:"}
            listItems={["C/C++", "Arduino Library", "ESP32"]}
            dropdown={true}
          />
          <List
            title={"Features:"}
            listItems={[
              "Plug and Play setup",
              "Expandable framework (using TA-lib)",
              "Stateless architecture",
            ]}
            dropdown={true}
          />
          <div className={"pt-4"}>
            {` A paper-trading application that runs on an ESP32, built using the Arduino library. 
            It's designed to be plug-and-play and expandable, so there's no configuration other than WiFi passwords and API keys.
            It also uses a stateless architecture which allows for multiple instances to run with minimal interference. 
            The TA-lib library is used for technical analysis, and because of its ubiquity, the application is easily expandable to include more indicators.`}
          </div>
        </div>
      </DisplayCard>
      <DisplayCard
        title={
          <>
            <CustomLink
              sameSite={false}
              href={"https://budget-app.ziidonato.com"}
            >
              BudgetWise
            </CustomLink>
            {!isMobile && (
              <>
                {" | "}
                <CustomLink
                  sameSite={false}
                  href={"https://github.com/ziidonato/budget_app"}
                >
                  {"</>"}
                </CustomLink>
              </>
            )}
          </>
        }
        classname={tileStyles.tile}
        icon={<CashLogo />}
      >
        <div className={"w-full h-full overflow-y-auto"}>
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
        title={"Simulation Game Backend (ARCHIVED)"}
        classname={tileStyles.tile}
        icon={<CapitalOneLogo />}
      >
        <div className={"w-full h-full overflow-y-auto"}>
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
};

export default Projects;
