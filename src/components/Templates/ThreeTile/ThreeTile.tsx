import { FunctionComponent, useEffect, useState } from "react";
import "./ThreeTile.scss";
import Tile from "./Tile/Tile";

interface TilesPropTypes {
  details: DetailsPropTypes[];
}

interface DetailsPropTypes {
  title: string;
  description: string | JSX.Element;
  picture?: JSX.Element;
  style?: React.CSSProperties;
}

const ThreeTile = (props: TilesPropTypes) => {
  const [tileWidth, setTileWidth] = useState(
    window.innerWidth / 3 - (window.innerWidth / 3) * 0.1,
  );
  useEffect(function handleResize() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setTileWidth(window.innerWidth / 3 - (window.innerWidth / 3) * 0.1);
      } else {
        setTileWidth(
          window.innerWidth / props.details.length -
            (props.details.length - 1) * 10,
        );
      }
    });
  }, []);

  return (
    <div className="three-tile">
      {props.details.map((detail, index) => {
        return (
          <Tile
            key={index}
            style={detail.style ? detail.style : {}}
            width={tileWidth}
            {...detail}
          />
        );
      })}
    </div>
  );
};

export default ThreeTile;
