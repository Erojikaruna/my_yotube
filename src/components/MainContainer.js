import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={`col-span-10 mt-20 pt-2 ml-20 pl-20 ${
        theme ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
