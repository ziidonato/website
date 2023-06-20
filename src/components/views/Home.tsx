import pageStyles from "@/styles/Page.module.scss";
import CustomLink from "../base/CustomLink";

const Home = () => {
  return (
    <div className={"h-full"} id={"home"}>
      <div className={"h-2/6"}>
        <h1 className={pageStyles.heading}>Hi!</h1>
        <h1 className={pageStyles.heading}>I write code.</h1>
      </div>
      <div className={"h-2/6"}>
        <div className={"w-full text-center"}>
          <CustomLink href={"projects"} sameSite={true}>
            <h1 className={"text-center text-3xl"}>
              Wanna see?{" "}
              <i className={"fas fa-arrow-right"} aria-hidden={"true"} />
            </h1>
          </CustomLink>
        </div>
      </div>
      <div className={"h-w-full text-center"}>
        <CustomLink sameSite={true} href={"experience"}>
          <i aria-hidden className={"fas fa-arrow-down fa-2xl"} />
        </CustomLink>
      </div>
    </div>
  );
};

export default Home;
