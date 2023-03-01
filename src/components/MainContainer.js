import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" grow  h-full   overflow-y-auto bg-white text-black   w-[calc(100%-240px)]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
