import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={`w-screen p-3 overflow-hidden ${
        theme ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <div
        className={`flex ml-60 fixed w-full z-20 top-20  p-4  overflow-x-auto ${
          theme ? "bg-gray-900 text-white" : ""
        }`}
        id="scrollbar-hide"
      >
        <ButtonList />
      </div>
      <div className="overflow-hidden relative p-2 flex top-24 z-10 ml-60 h-full">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
