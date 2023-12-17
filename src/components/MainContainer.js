import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={`w-screen p-3 overflow-hidden ${
        theme ? "bg-[#0f0f0f] text-white" : "bg-white"
      }`}
    >
      <div
        className={`flex ml-14 fixed  w-screen h-12 z-20 mt-10  p-6  ${
          theme ? "bg-[#0f0f0f] text-white" : "bg-white"
        }`}
        id="scrollbar-hide"
      >
        <ButtonList />
      </div>
      <div className="  overflow-hidden relative p-4 flex top-24 z-10 ml-14 h-full ">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
