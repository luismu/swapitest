import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
  isClicked: false,
  cursorClickHandler: () => {}
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  const audio = new Audio("lightsabersound.mp3");

  const cursorClickHandler = () => {
    setIsClicked(!isClicked);
    audio.play();
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
        cursorClickHandler: cursorClickHandler,
        isClicked: isClicked
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
