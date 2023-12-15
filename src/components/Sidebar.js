import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiSolidVideos, BiSolidShoppingBag } from "react-icons/bi";
import { MdSubscriptions, MdPodcasts } from "react-icons/md";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if (!isMenuOpen) return <SidebarItems />;

  return (
    <div className="sidebar fixed bottom-0 left-0 h-screen right-0 z-30 md:h-full w-[215px] ml-6 top-12 overflow-hidden overflow-y-scroll py-4 translate-x-[-240px] md:translate-x-0 transition-all">
      <div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <Link to="/">
              <AiFillHome size="25" />
            </Link>
          </span>
          <span>Home</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <BiSolidVideos size="25" />
          </span>
          <span>Shorts</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <MdSubscriptions size="25" />
          </span>
          <span>Subscriptions</span>
        </div>
      </div>
      <hr className="my-5 border-gray-500" />
      <h1>Explore</h1>
      <div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <MdLocalFireDepartment size="25" />
          </span>
          <span>Trending</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <BiSolidShoppingBag size="25" />
          </span>
          <span>Shopping</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <CgMusicNote size="25" />
          </span>
          <span>Music</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <FiFilm size="25" />
          </span>
          <span>Films</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <MdLiveTv size="25" />
          </span>
          <span>Live</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <IoGameControllerSharp size="25" />
          </span>
          <span>Gaming</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <ImNewspaper size="25" />
          </span>
          <span>News</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <GiDiamondTrophy size="25" />
          </span>
          <span>Sport</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <RiLightbulbLine size="25" />
          </span>
          <span>Learning</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <GiEclipse size="25" />
          </span>
          <span>Fashion & beauty</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <MdPodcasts size="25" />
          </span>
          <span>Podcasts</span>
        </div>
      </div>
      <hr className="my-5 border-gray-500" />
      <div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <FiSettings size="25" />
          </span>
          <span>Settings</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <AiOutlineFlag size="25" />
          </span>
          <span>Report history</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <FiHelpCircle size="25" />
          </span>
          <span>Help</span>
        </div>
        <div className="flex p-2 w-48 rounded-xl items-center hover:bg-gray-200">
          <span className="mr-4">
            <RiFeedbackLine size="25" />
          </span>
          <span>Send feedback</span>
        </div>
      </div>
      <hr className="my-5 border-gray-500" />
      <div className="text-black/[0.5] text-[12px]">Clone by: Aruna</div>
    </div>
  );
};

// const ClosedSidebar = () => {
//   return (
//     <>
//       <div className="mr-2">
//         <div className="w-20 top-16 z-10 fixed mr-3 px-2 ">
//           <ul>
//             <li className="py-1 ">
//               <div className=" hover:bg-slate-300  px-3 py-2 text-center">
//                 <FontAwesomeIcon icon={faHome} />
//                 Home
//               </div>
//             </li>
//             <li className="py-1">
//               <div className="text-center text-md hover:bg-slate-300 ">
//                 <div className="    px-6 py-2 text-xl">
//                   <MdOutlineSlowMotionVideo />
//                 </div>
//                 Shorts
//               </div>
//             </li>
//             <li className="py-1 ">
//               <div className="hover:bg-neutral-500">
//                 <div className="px-6  py-1  text-md">
//                   <MdSubscriptions />
//                 </div>
//                 Subscription
//               </div>
//             </li>
//             <li className="py-2">
//               <div className="text-center hover:bg-neutral-500">
//                 <div className="px-6 py-1  text-md">
//                   <MdVideoLibrary />
//                 </div>
//                 Library
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

export default Sidebar;
