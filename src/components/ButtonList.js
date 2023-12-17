import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={` w-screen flex  shadow-lg -mt-10 py-6 fixed flex-nowrap text-sm overflow-x-scroll scrollbar-thin  ${
        theme ? " text-white" : " text-black"
      }`}
    >
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
      <Button name="New to you" />
      <Button name="Game Shows" />
      <Button name="Filmi" />
      <Button name="Recently Uploaded" />
    </div>
  );
};

export default ButtonList;
