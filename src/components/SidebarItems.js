import React from "react";

import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlinePlayCircle } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary, MdHistory } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { useSelector } from "react-redux";

const SidebarItems = () => {
  //Early return pattern
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const path = useLocation();
  return (
    <>
      {path.pathname === "/watch" ? (
        ""
      ) : (
        <div
          className={` hidden ${
            path.pathname === "/results" ? "xl:block" : "md:block"
          }    w-[4.5rem] h-full fixed z-20 left-0 bottom-0 top-14  ${
            theme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          } `}
        >
          <Link to="/">
            <div
              className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
                theme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }
          ${
            path.pathname === "/"
              ? theme
                ? "bg-[#272727]"
                : "bg-[#f2f2f2]"
              : ""
          }
          mt-2  cursor-pointer  flex items-center flex-col justify-center`}
            >
              <div className="icon">
                <AiFillHome
                  color={theme ? "#fff" : "#000"}
                  filled={path.pathname === "/"}
                />
              </div>
              <div className="home text-xs mt-1">Home</div>
            </div>
          </Link>

          <div
            className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
              theme
                ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
            } 
           
            mt-2  cursor-pointer  flex items-center flex-col justify-center`}
          >
            <div className="icon">
              <AiOutlinePlayCircle color={theme ? "#fff" : "#000"} />
            </div>
            <div className="home text-xs mt-1">Shorts</div>
          </div>

          <div
            className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
              theme
                ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
            } mt-2  cursor-pointer  flex items-center flex-col justify-center`}
          >
            <div className="icon">
              <MdSubscriptions color={theme ? "#fff" : "#000"} />
            </div>
            <div className="home text-[.66rem] mt-1">Subscriptions</div>
          </div>

          <div
            className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
              theme
                ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
            }

            mt-2  cursor-pointer  flex items-center flex-col justify-center`}
          >
            <div className="icon">
              <MdVideoLibrary color={theme ? "#fff" : "#000"} />
            </div>
            <div className="home text-xs mt-1">Library</div>
          </div>

          <div
            className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
              theme
                ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
            } 

            mt-2  cursor-pointer  flex items-center flex-col justify-center`}
          >
            <div className="icon">
              <MdHistory color={theme ? "#fff" : "#000"} />
            </div>
            <div className="home text-xs mt-1">History</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarItems;

{
  /* <div
          className={`hidden fixed ${
            path.pathname === "/results" ? "xl:block" : "md:block"
          }   h-full  fixed z-20 left-0  bottom-0 top-14 md:relative  py-2 items-center  translate-x-[-200px] md:translate-x-0 transition-all  `}
        >
          <div className="Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3">
            <ul>
              <AiFillHome size={20} />
              <Link to="/">
                <li className="text-sm">Home</li>
              </Link>
            </ul>
          </div>
          <div className="pl-7 pt-7">
            <ul>
              <AiOutlinePlayCircle size={20} />
              <li className="text-sm">Shorts</li>
            </ul>
          </div>
          <div className="pl-7 pt-7">
            <ul>
              <MdSubscriptions size={20} />
              <li className="text-sm">Subscription</li>
            </ul>
          </div>
          <div className="pt-7 pl-7">
            <ul>
              <MdWatchLater size={20} />
              <li className="text-sm">WatchLater</li>
            </ul>
          </div>
          <div className="pl-7 pt-7">
            <ul>
              <ImNewspaper size={20} />
              <li className="text-sm">News</li>
            </ul>
          </div>
          <div className="pt-7 pl-7">
            <ul>
              <MdVideoLibrary size={20} />
              <li className="text-sm">Library</li>
            </ul>
          </div>
        </div> */
}
