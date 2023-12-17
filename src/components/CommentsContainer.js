import React from "react";
import { useSelector } from "react-redux";

const commentsData = [
  {
    name: "Karuna Eroji",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Karuna Eroji",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Karuna Eroji",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Karuna Eroji",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Karuna Eroji",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Karuna Eroji",
                    text: "lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Karuna Eroji",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Karuna Eroji",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Karuna Eroji",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Karuna Eroji",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const { name, text, replies } = data;
  return (
    <div
      className={`flex shadow-sm p-1   rounded-lg my-1 ${
        theme ? "bg-[#0c0c0c] text-white" : " border bg-gray-100 "
      }`}
    >
      <img
        className={`w-12 h-12 ${
          theme ? "w-8 h-8 mt-2 rounded-2xl" : "#000 w-8 h-8 mt-2"
        }`}
        alt="user"
        src={
          theme
            ? "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
            : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        }
      />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="text-lg font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
      {/* <Comment data={commentsData[0]} /> */}
    </div>
  );
};

export default CommentsContainer;
