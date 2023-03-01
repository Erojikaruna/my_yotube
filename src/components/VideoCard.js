import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 m-2 w-60 shadow-lg ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="text-black">
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        <li>{statistics.likeCount} likes</li>
        <li>{publishedAt}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
