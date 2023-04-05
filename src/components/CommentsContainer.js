import React from "react";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
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
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm w-[600px] bg-gray-100 p-1   rounded-lg my-1">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
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
