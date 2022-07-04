import "./Tile.scss";
import { ReactSVG } from "react-svg";

interface TilePropTypes {
  title: string;
  description: string | JSX.Element;
  picture?: JSX.Element;
  style: React.CSSProperties;
}

const Tile = (props: TilePropTypes) => {
  const defaultProps = {
    color: "black",
    backgroundSize: "cover",
  };

  return (
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
};

export default Tile;
