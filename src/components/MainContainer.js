import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10 mt-20 pt-2 ml-20 pl-20">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
