import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={`flex shadow-lg w-full ${
        theme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
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
