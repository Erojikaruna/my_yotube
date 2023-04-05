import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const { viewCount } = info?.statistics;

  return (
    <div className="p-2  w-60 h-70 shadow-lg ">
      <img
        className="rounded-lg h-[100px] w-[300px] font-serif"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul className="text-white">
        <li className=" text-xs font-sans py-1">{title}</li>
        <li className="text-xs text-neutral-600">{channelTitle}</li>
        <li className="text-sm">
          {viewCount.length > 3 &&
            viewCount.length < 7 &&
            viewCount.slice(0, -3) + "K views"}
          {viewCount.length > 6 &&
            (viewCount.slice(0, -5) / 10).toFixed(1) + "M views"}
        </li>

        <li className="text-xs">{publishedAt}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
