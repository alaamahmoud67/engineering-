// Cell.jsx
import React from "react";

const Cell = ({ content }) => {
  return (
    <div className="size-full rounded-lg centertext-xl">
      {content}
    </div>
  );
};

export default Cell;
