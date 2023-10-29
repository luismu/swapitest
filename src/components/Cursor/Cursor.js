import React, { useContext } from "react";
import "./Cursor.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

const Cursor = () => {
  const {
    cursorType,
    isClicked,
  } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className={`dot ${cursorType} ${isClicked ? "clicked" : ""}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
