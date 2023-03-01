import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-2 py-1 m-2 bg-zinc-700 rounded-md  hover:bg-gray-300 hover:text-black">
      {name}
    </button>
  );
};

export default Button;
