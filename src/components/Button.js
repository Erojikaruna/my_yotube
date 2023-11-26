import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <button
      className={`px-2 py-1 m-3 bg-neutral-700 rounded-full text-white hover:bg-zinc-600 hover:text-black ${
        theme ? "bg-gray-900 border border-gray-600" : ""
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
