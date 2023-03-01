import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome, FaItunesNote } from "react-icons/fa";
import {
  MdSensors,
  MdSubscriptions,
  MdOutlineSlowMotionVideo,
  MdOutlineWatchLater,
  MdMovieCreation,
  MdVideoLibrary,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { HiFire, HiShoppingBag } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { GiFilmStrip } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="sticky  top-0  z-10 translate-[-50%]  bg-white text-black py-5 px-2 md:relative   overflow-y-auto h-full">
      <div className=" flex flex-col px-5">
        <IconContext.Provider
          value={{
            size: "1rem",
            color: "black",
            margin: "1rem",
            padding: "1rem",
            display: "inline-flex",
          }}
        >
          <ul className="flex flex-col ">
            <li className="h-9">
              <Link to="/">
                <FaHome style={{ display: "inline-flex" }} />
                Home
              </Link>
            </li>
            <li className="h-9">
              <MdOutlineSlowMotionVideo style={{ display: "inline-flex" }} />
              Shorts
            </li>
            <li className="h-9">
              <MdSubscriptions style={{ display: "inline-flex" }} />
              Subscription
            </li>
            <li className="h-9">
              <MdOutlineWatchLater style={{ display: "inline-flex" }} />{" "}
              WatchLater
            </li>
          </ul>
          <hr className="border-black my-4" />
          <h1 className="font-bold text-black h-9">Subscription</h1>
          <ul>
            <li className="h-9">
              <FaItunesNote style={{ display: "inline-flex" }} />
              Music
            </li>
            <li className="h-9">
              <MdOutlineSportsVolleyball style={{ display: "inline-flex" }} />
              Sports
            </li>
            <li className="h-9">
              <SiYoutubegaming style={{ display: "inline-flex" }} />
              Gaming
            </li>
            <li className="h-9">
              <GiFilmStrip style={{ display: "inline-flex" }} />
              Movies
            </li>
          </ul>
          <hr className="border-black my-4" />
          <h1 className="font-bold text-black h-10">Explore</h1>
          <ul>
            <li className="h-9">
              <HiFire style={{ display: "inline-flex" }} />
              Trending
            </li>
            <li className="h-9">
              <GiFilmStrip style={{ display: "inline-flex" }} />
              Films
            </li>
            <li className="h-9">
              <MdSensors style={{ display: "inline-flex" }} />
              Live
            </li>
            <li className="h-9">
              <ImNewspaper style={{ display: "inline-flex" }} />
              News
            </li>
            <li className="h-9">
              <HiShoppingBag style={{ display: "inline-flex" }} />
              Shopping
            </li>

            <li className="h-9">
              <MdVideoLibrary style={{ display: "inline-flex" }} />
              Library
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Sidebar;

// /* {/* <>
// <div className=" p-7 shadow-lg w-40 ">
//   <div className="">
//     <ul className="font-semibold  ">
//       <li className="h-24  ">
//         <Link to="/">
//           <img className="w-60 px-3 h-10 " alt="home" src={home} />
//           Home
//         </Link>
//       </li>
//       <img className="px-6" alt="shorts" src={shorts} />
//       <li className="h-16">Shorts</li>
//       <img className="px-8" alt="subscribe" src={subscribe} />
//       <li className="h-16">Subscription</li>
//       <img className="px-8" alt="watchlater" src={watchlater} />
//       <li className="h-16">WatchLater</li>
//     </ul>
//   </div>
//   <div>
//     <hr />
//     <ul className="text-lg">
//       <li className="h-10">Library</li>
//       <li className="h-10">History</li>
//       <li className="h-10">WatchLater</li>
//       <li className="h-10">Likedvideos</li>
//     </ul>
//   </div>
//   <div>
//     <hr />
//     <ul className="text-lg">
//       <h1 className="font-bold h-10">Explore</h1>
//       <li className="h-10">Trending</li>
//       <li className="h-10">Music</li>
//       <li className="h-10">Shopping</li>
//       <li className="h-10">Live</li>
//       <li className="h-10">Gaming</li>
//       <li className="h-10">News</li>
//       <li className="h-10">Sport</li>
//       <li className="h-10">Learning </li>
//       <li v>Fashion & beauty</li>
//     </ul>
//   </div>
// </div>
// </> */} */

/*{/* */
