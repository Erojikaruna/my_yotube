import React from "react";

import { Link } from "react-router-dom";
import { AiFillHome, AiOutlinePlayCircle } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";

const SidebarItems = () => {
  //Early return pattern

  return (
    <div className="absolute md:relative top-12 h-full  py-2 items-center z-30 translate-x-[-200px] md:translate-x-0 transition-all">
      <div className="pl-7 pt-7">
        <ul>
          <AiFillHome size={25} />
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </div>
      <div className="pl-7 pt-7">
        <ul>
          <AiOutlinePlayCircle size={25} />
          <li>Shorts</li>
        </ul>
      </div>
      <div className="pl-7 pt-7">
        <ul>
          <MdSubscriptions size={25} />
          <li>Subscription</li>
        </ul>
      </div>
      <div className="pt-7 pl-7">
        <ul>
          <MdWatchLater size={25} />
          <li>WatchLater</li>
        </ul>
      </div>
      <div className="pl-7 pt-7">
        <ul>
          <ImNewspaper size={25} />
          <li>News</li>
        </ul>
      </div>
      <div className="pt-7 pl-7">
        <ul>
          <MdVideoLibrary size={25} />
          <li>Library</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarItems;
