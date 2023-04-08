import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className=" flex shadow-lg bg-white w-full">
      <div>
        <Button name="All" />
        <Button name="Music" />
        <Button name="Gaming" />
        <Button name="Live" />
        <Button name="Comedy" />
        <Button name="News" />
        <Button name="Cricket" />
        <Button name="New to you" />
        <Button name="Game Shows" />
        <Button name="Filmi" />
        <Button name="Recently Uploaded" />
      </div>
    </div>
  );
};

export default ButtonList;

// flex justify-center text-white

// className=" fixed top-[75px]  flex flex-row whitespace-nowrap px-40
//      h-13 overflow-x-hidden w-11/12 "
