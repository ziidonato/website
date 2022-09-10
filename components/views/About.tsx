import React from "react";
import pageStyles from "styles/Page.module.scss";
import DisplayCard from "../base/DisplayCard";
import List from "../base/List";
import useIsMobile from "../../hooks/useIsMobile";
import MagnifyingGlassLogo from "assets/svgs/MagnifyingGlassLogo";

const About = () => {
    const isMobile = useIsMobile();

  return (
    <div className={"h-full"} id={"about"}>
      <h1 className={pageStyles.heading}>About Me</h1>
      <div className={pageStyles.pageContent + ` flex-col`}>
        <DisplayCard title={"Who am I?"} icon={<MagnifyingGlassLogo />}>
          <div className={"text-center"}>
            {` I'm a software developer based in the New York
          Metropolitan Area. I'm currently a student at the University of
          Connecticut, studying Computer Engineering.`}
          </div>
        </DisplayCard>
        <DisplayCard title={"What sets me apart?"}>
          {` I'm actually passionate about writing code. I put time, effort, and
          practice into improving my code every day. A lot of people try to
          transition into software development because of the benefits of
          working in the industry, or they pick CS in college because it's the
          "cool major", but I've always been passionate about computers. Ever
          since I got ( and promptly broke, and had to troubleshoot before my
          parents found out ) my first computer at 9 years old, I've had an
          interest for computers that has never wavered. The more rabbit holes I
          go down, the more I discover. This curiosity is the fuel that has
          driven me this far, and I believe it will take me much further. `}
        </DisplayCard>
          { isMobile? <MobileAbout /> : <DesktopAbout /> }
      </div>
    </div>
  );
};

const DesktopAbout = () => (
    <div className={"flex gap-2 w-1/2"}>
        <DisplayCard title={"What makes my code good?"} classname={"w-1/2"}>
            {` My usage of design patterns, my ability to abstract complex problems
            into simple solutions, and my ability to write clean, readable code
            are all things that I pride myself on. I'm also a big fan of reading
            books like "The Little Schemer" and "Structure and Interpretation of
            Computer Programs" to improve my understanding of programming
            languages and paradigms. `}
        </DisplayCard>
        <DisplayCard title={"What else do I do?"} classname={"grow"}>
            <div className={"w-full flex justify-evenly"}>
                <div className={"text-center"}>
                    <List
                        title="Hobbies:"
                        listItems={["Speed cubing", "Chess", "3D Printing"]}
                    />
                </div>
                <div className="text-center">
                    <List
                        title="Interests:"
                        listItems={[
                            "Cars",
                            "Electricity",
                            "Poker",
                        ]}
                    />
                </div>
            </div>
        </DisplayCard>
    </div>
);

const MobileAbout = () => (
    <>
        <DisplayCard title={"What makes my code good?"}>
            {` My usage of design patterns, my ability to abstract complex problems
            into simple solutions, and my ability to write clean, readable code
            are all things that I pride myself on. I'm also a big fan of reading
            books like "The Little Schemer" and "Structure and Interpretation of
            Computer Programs" to improve my understanding of programming
            languages and paradigms. `}
        </DisplayCard>
        <DisplayCard title={"What else do I do?"}>
            <div className={"w-full flex justify-evenly"}>
                <div className={"text-center"}>
                    <List
                        title="Hobbies:"
                        listItems={["Speed cubing", "Chess", "3D Printing"]}
                    />
                </div>
                <div className="text-center">
                    <List
                        title="Interests:"
                        listItems={[
                            "Cars",
                            "Electricity",
                            "Poker",
                        ]}
                    />
                </div>
            </div>
        </DisplayCard>
    </>
);

export default About;
