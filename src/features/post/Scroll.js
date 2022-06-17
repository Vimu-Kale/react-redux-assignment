import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid white",
        borderRadius: "25px",
        // backgroundColor: "black",
        height: "35rem",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
