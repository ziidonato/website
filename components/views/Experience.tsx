import React from "react";
import pageStyles from "styles/Page.module.scss";
import fontStyles from "styles/FontStyles.module.scss";
import tileStyles from "styles/components/Tile.module.scss";
import DisplayCard from "../base/DisplayCard";
import JSLogo from "assets/svgs/JSLogo";
import PythonLogo from "assets/svgs/PythonLogo";
import BashLogo from "assets/svgs/BashLogo";
import List from "../base/List";

const Experience = () => {
  return (
    <div
      className={"flex flex-col h-max w-full items-center"}
      id={"experience"}
    >
      <div className={"w-full h-max"}>
        <h1 className={pageStyles.heading}>Skills</h1>
        <div className={pageStyles.pageContent}>
          <DisplayCard
            title={"JavaScript"}
            icon={<JSLogo />}
            classname={tileStyles.tile}
          >
            <h2 className={fontStyles.h2}>For everything web dev</h2>
            <div className={"w-full h-full overflow-scroll"}>
              <List
                title={"Technologies:"}
                listItems={["React", "Node", "Next", "TypeScript"]}
              />
              <div className={"pt-4"}>
                {` JavaScript is the industry standard language for web
                development, and thus my most-used language. I learned
                Javascript in May 2022 and in the time since have become
                proficient in it, using it to build both front-end and back-end
                applications. `}
              </div>
            </div>
          </DisplayCard>
          <DisplayCard
            title={"Python"}
            icon={<PythonLogo />}
            classname={tileStyles.tile}
          >
            <h2 className={fontStyles.h2}>For everything else</h2>
            <div className={"w-full h-full overflow-scroll"}>
              <List
                title={"Technologies:"}
                listItems={["Django", "Pandas", "NumPy", "Poetry"]}
              />
              <div className={"pt-4"}>
                {`Python is the first language I've learned, back in version 2.7.
                I use it for the more logic-heavy tasks, which is why it's my
                backend language of choice. I learn data structures and
                algorithms in Python before implementing them in other
                languages, because I find it easier to coerce the computer to do
                what I want in Python. `}
              </div>
            </div>
          </DisplayCard>
          <DisplayCard
            title={"Other"}
            icon={<BashLogo />}
            classname={tileStyles.tile}
          >
            <h2 className={fontStyles.h2 + ` text-center`}>
              {`Other skills I've picked up along the way`}
            </h2>
            <div className={"w-full h-full overflow-scroll"}>
              <List
                listItems={[
                  "Git",
                  "AWS",
                  "Linux/BASH",
                  <List
                    key={"other"}
                    title={"Other Languages"}
                    listItems={["C", "C++", "Rust"]}
                    dropdown={true}
                  />,
                ]}
              />
              <div className={"pt-4"}>
                {` Developing software is more than just a career path; it's a
                genuine hobby of mine. Therefore, I've picked up a plethora of
                other skills along the way, including Git, AWS, and Linux/BASH.
                Note the presence of low-level languages like C and Rust; I've
                taken an interest in embedded systems and high-performance
                software(namely HFT), and I believe the mindset applied when
                using these languages can be very useful in all areas of
                software development. `}
              </div>
            </div>
          </DisplayCard>
        </div>
      </div>
    </div>
  );
};

export default Experience;
