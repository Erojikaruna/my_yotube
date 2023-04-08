import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlinePlayCircle } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 w-20 mt-20 fixed">
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
