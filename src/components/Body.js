import React from "react";
import Sidebar from "./Sidebar";
//import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div
      className={`grid  grid-flow-col ${
        theme ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
