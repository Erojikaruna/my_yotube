import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="p-4 ">
        <iframe
          className="pl-4 pt-16  "
          width="1200"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-row gap-3 justify-between">
          <div className="flex flex-row gap-5">
            <img
              className="w-[150px] pl-6 hover:scale-95 cursor-pointer transition-all"
              src="https://cdn.pixabay.com/photo/2021/07/17/09/33/subscribe-6472631_1280.png"
              alt="subscribe"
            />
            <button className="rounded-2xl h-10 cursor-pointer hover:scale-95 bg-black text-white p-2 px-4 mt-3 transition-all">
              join
            </button>
          </div>
          <div className="flex flex-row gap-10 mr-7">
            <BiLike className="hover:scale-90 transition-all mt-3" size={30} />
            <BiDislike
              className="hover:scale-90 transition-all mt-3"
              size={30}
            />
            <RiShareForwardLine
              className="hover:scale-90 transition-all mt-3"
              size={30}
            />
            <BsDownload
              className="hover:scale-90 transition-all mt-3"
              size={30}
            />
          </div>
        </div>
        <CommentsContainer />
      </div>
    </>
  );
};

export default WatchPage;
