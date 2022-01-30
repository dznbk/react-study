import React from "react";

export const ColorfulMessage = ({ color, children: message }) => {
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{message}</p>;
};
