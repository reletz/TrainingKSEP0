import React from "react";

export default function Button({
  color,
  children,
  onClick,
  isDisabled
}) {
  const btnColor = {
    green: {
      bg: "bg-green-500",
      hover: "hover:bg-green-700",
    },

    red: {
      bg: "bg-red-500",
      hover: "hover:bg-red-700",
    }
  };

  return (
    <button className={`text-white font-bold py-2 px-4 rounded m-4 disabled:bg-grey-100 ${btnColor[color].bg} ${btnColor[color].hover}`} onClick = {onClick} disabled = {isDisabled}>
      <p>{children}</p>
    </button>
  );
}