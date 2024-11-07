import React from "react";

const ColorChange = (Prospect) => {
  console.log(Prospect);
  const color = ["red", "pink", "violet", "orange"];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  console.log(randomColor);

  return (props) => {
    return (
      <div style={{ color: randomColor }}>
        <Prospect />
      </div>
    );
  };
};

export default ColorChange;
