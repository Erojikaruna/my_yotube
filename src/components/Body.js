import React from "react";
import Sidebar from "./Sidebar";
//import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={` flex flex-nowrap min-h-screen ${
        theme ? "bg-[#0f0f0f] text-white" : "bg-white"
      }`}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
