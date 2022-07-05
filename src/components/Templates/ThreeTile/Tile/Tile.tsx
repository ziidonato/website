import "./Tile.scss";
import { useState, useEffect, MouseEventHandler } from "react";
import * as ReactDOM from "react-dom";
import Modal from "react-modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [test, setTest] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
  });

  // this is the most jank solution possible, but it works.
  // the X button wouldn't directly set isModalOpen
  const openModal = () => {
    setTest(test + 1);
  };

  const closeModal = () => {
    setTest(test + 1);
  };

  useEffect(() => {
    if (test % 2 === 0) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }, [test]);
  //end jank solution

  const tileStyle = {
    ...defaultProps,
    ...props.style,
  };

  const propStyle = {
    ...props.style,
  };

  const DesktopVersion = () => {
    return (
      <div className={"tile"} style={tileStyle}>
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

  const MobileVersion = () => {
    Modal.setAppElement("#root");

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
        onClick={openModal}
      >
        <Modal
          isOpen={isModalOpen}
          contentLabel="details"
          style={{ content: { padding: "0" } }}
          shouldCloseOnOverlayClick={false}
        >
          <div
            className="popup-content"
            style={{ ...propStyle, height: "100%", padding: "5%" }}
          >
            <h3 className="display-5 popup-header">
              <span>{props.title}</span>
            </h3>
            {typeof props.description === "string" ? (
              <p>{props.description}</p>
            ) : (
              props.description
            )}
            <div className="picture">
              {props.picture && (
                <div className="w-50 h-50">{props.picture}</div>
              )}
            </div>
          </div>
        </Modal>
        <h5>{props.title}</h5>
        {props.picture && <div className="w-50 h-50">{props.picture}</div>}
      </div>
    );
  };

  return isMobile ? <MobileVersion /> : DesktopVersion();
};

export default Tile;
