import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaItunesNote } from "react-icons/fa";
import { BiLike, BiHistory } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import {
  MdSensors,
  MdSubscriptions,
  MdOutlineSlowMotionVideo,
  MdOutlineWatchLater,
  MdVideoLibrary,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { HiFire, HiShoppingBag } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { GiFilmStrip } from "react-icons/gi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGear,
  faFlag,
  faQuestionCircle,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className=" p-5 shadow-lg w-48 bg-black text-white relative">
      <div className=" ">
        <ul>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <div className="flex flex-col pl-1 justify-center">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <Link className=" pl-2" to="/">
                Home
              </Link>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <MdOutlineSlowMotionVideo className="h-6" />

              <span className=" pl-2 font-semi-bold">Shorts</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <MdSubscriptions className="h-6" />

              <span className=" pl-2 font-semi-bold">Subscription</span>
            </div>
          </li>
          <hr className="border  border-white  my-3" />
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <MdVideoLibrary className="h-6" />

              <span className=" pl-2 font-semi-bold">Library</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <BiHistory className="h-6" />

              <span className=" pl-2 font-semi-bold">History</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
              <RiVideoLine className="h-6" />

              <span className=" pl-2 font-semi-bold">Yourvideos</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <MdOutlineWatchLater className="h-6" />

              <span className=" pl-2 font-semi-bold">Watch Later</span>
            </div>
          </li>

          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
              <BiLike className="h-6" />

              <span className=" pl-2 font-semi-bold">Liked videos</span>
            </div>
          </li>
          <hr className="border-white my-4" />
          <h2 className="text-start font-bold">Explore</h2>

          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <HiFire className="h-6" />

              <span className=" pl-2 font-semi-bold">Trending</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <HiShoppingBag className="h-6" />

              <span className=" pl-2 font-semi-bold">Shopping</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <FaItunesNote className="h-6" />

              <span className=" pl-2 font-semi-bold">Music</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <GiFilmStrip className="h-6" />

              <span className=" pl-2 font-semi-bold">Films</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <MdSensors className="h-6" />

              <span className=" pl-2 font-semi-bold">Live</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
              <SiYoutubegaming className="h-6" />

              <span className=" pl-2 font-semi-bold">Gaming</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <ImNewspaper className="h-6" />

              <span className=" pl-2 font-semi-bold">News</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <MdOutlineSportsVolleyball className="h-6" />

              <span className=" pl-2 font-semi-bold">Sports</span>
            </div>
          </li>
          <hr className="border-white my-2" />
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <div className="h-7">
                <FontAwesomeIcon icon={faGear} />
              </div>

              <span className=" pl-2 font-semi-bold">Settings</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <div className="h-7">
                <FontAwesomeIcon icon={faFlag} />
              </div>

              <span className=" pl-2 font-semi-bold">Report History</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
              <div className="h-7">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </div>

              <span className=" pl-2 font-semi-bold">Help</span>
            </div>
          </li>
          <li>
            <div className="mx-2 py-2 rounded-lg flex  justify-start hover:bg-zinc-800 hover:rounded-lg cursor-pointer">
              <div className="h-7">
                <FontAwesomeIcon icon={faMessage} />
              </div>

              <span className=" pl-2 font-semi-bold">SendFeedback</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ClosedSidebar = () => {
  return (
    <>
      <div className="mr-2">
        <div className="w-20 top-16 z-10 fixed mr-3 px-2 ">
          <ul>
            <li className="py-1 ">
              <div className=" hover:bg-slate-300  px-3 py-2 text-center">
                <FontAwesomeIcon icon={faHome} />
                Home
              </div>
            </li>
            <li className="py-1">
              <div className="text-center text-md hover:bg-slate-300 ">
                <div className="    px-6 py-2 text-xl">
                  <MdOutlineSlowMotionVideo />
                </div>
                Shorts
              </div>
            </li>
            <li className="py-1 ">
              <div className="hover:bg-neutral-500">
                <div className="px-6  py-1  text-md">
                  <MdSubscriptions />
                </div>
                Subscription
              </div>
            </li>
            <li className="py-2">
              <div className="text-center hover:bg-neutral-500">
                <div className="px-6 py-1  text-md">
                  <MdVideoLibrary />
                </div>
                Library
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
