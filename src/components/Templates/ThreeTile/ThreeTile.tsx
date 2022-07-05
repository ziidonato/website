import { FunctionComponent, useEffect, useState } from "react";
import { DeviceType, useDeviceType } from "../../../hooks/useDeviceType";
import "./ThreeTile.scss";
import Tile from "../Tile/Tile";

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

  const deviceType = useDeviceType()

  useEffect(function handleResize() {
    const newWidth = deviceType === DeviceType.DESKTOP
      ? window.innerWidth / 3 - (window.innerWidth / 3) * 0.1
      : window.innerWidth / props.details.length - (props.details.length - 1) * 10
    setTileWidth(newWidth)
  }, [deviceType]);

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
