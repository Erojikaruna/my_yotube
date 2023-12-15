import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={` flex w-[200px] shadow-lg -mt-9 fixed flex-nowrap text-sm  ${
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
