import React from "react"
export const Squares = ({ value, clickSquare }) => {
  return (
    <button
      className={`square ${
        value === "X" ? "blue" : value === "O" ? "red" : ""
      }`}
      onClick={clickSquare}
    >
      {value}
    </button>
  )
}
