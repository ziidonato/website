import "./Tile.scss";
import { useState, useEffect } from "react";

interface TilePropTypes {
  title: string;
  description: string | JSX.Element;
  picture?: JSX.Element;
  style: React.CSSProperties;
  width: number;
}

const Tile = (props: TilePropTypes) => {
  const defaultProps = {
    color: "black",
    backgroundSize: "cover",
    width: props.width,
    height: props.width,
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  });

  const desktopVersion = () => (
    <div
      className="tile"
      style={{
        ...defaultProps,
        ...props.style,
      }}
    >
      <div className="content">
        <h3 className="display-5">{props.title}</h3>
        {typeof props.description === "string" ? (
          <p>{props.description}</p>
        ) : (
          props.description
        )}
      </div>
      {props.picture && <div className="picture">{props.picture}</div>}
    </div>
  );

  const mobileVersion = () => {
    return (
      <div
        className="tile"
        style={{
          ...defaultProps,
          ...props.style,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5>{props.title}</h5>
        {props.picture && <div className="w-50 h-50">{props.picture}</div>}
      </div>
    );
  };

  return isMobile ? mobileVersion() : desktopVersion();
};

export default Tile;
