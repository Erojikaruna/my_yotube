import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div>
      <div
        className=" slick-slide  scroll-m-1 flex flex-row whitespace-nowrap px-4 justify-center 
     h-13 related "
      >
        <Button name="All" />
        <Button name="Music" />
        <Button name="Gaming" />
        <Button name="Live" />
        <Button name="Comedy" />
        <Button name="News" />
        <Button name="Cricket" />
        <Button name="Recently Uploaded" />
        <Button name="New to you" />
        <Button name="Practice" />
        <Button name="Thoughts" />
      </div>
    </div>
  );
};

export default ButtonList;

// flex justify-center text-white
