import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-2 py-1 m-3 bg-neutral-800 rounded-full text-white hover:bg-zinc-700 hover:text-black">
      {name}
    </button>
  );
};

export default Button;
