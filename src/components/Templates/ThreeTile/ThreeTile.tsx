import FunctionComponent from "react";
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
  return (
    <div className="three-tile">
      {props.details.map((detail, index) => {
        return (
          <Tile
            key={index}
            title={detail.title}
            description={detail.description}
            picture={detail.picture}
            style={detail.style ? detail.style : {}}
          />
        );
      })}
    </div>
  );
};

export default ThreeTile;
