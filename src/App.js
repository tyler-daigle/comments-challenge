import { useState, useEffect /*useContext*/ } from "react";
// import { SERVER_URL, SERVER_PORT } from "./config";
import UserContext from "./UserContext";
// import { userContext } from "./UserContext";
import CommentList from "./components/CommentList";
import CreateReply from "./components/CreateReply";
import DeleteDialog from "./components/DeleteDialog";
import "./App.css";

import commentsData from "./temp_data/data.json";
let nextId = 20;

function createReply(text, user) {
  const reply = {
    id: nextId++,
    content: text,
    createdAt: "Today",
    score: 0,
    user: {
      image: {
        png: "./images/avatars/image-juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
      username: user,
    },
    replies: [],
  };

  return reply;
}

export default function App() {
  const [commentList, setCommentList] = useState([]);

  const addComment = (commentText, parentCommentId, currentUser) => {
    // have to find the comment in the json data.
    // It is not really setup for efficient searching.
    const updatedComments = [...commentList];
    const parentComment = (() => {
      for (let i = 0; i < updatedComments.length; i++) {
        if (updatedComments[i].id === parentCommentId) {
          return updatedComments[i];
        } else if (updatedComments[i].replies) {
          const replies = updatedComments[i].replies;
          for (let j = 0; j < replies.length; j++) {
            if (replies[j].id === parentCommentId) {
              return replies[j];
            }
          }
        }
      }
      // if we get here it was not found...
      return undefined;
    })();
    if (parentComment) {
      if (!parentComment.hasOwnProperty("replies")) {
        parentComment.replies = [];
      }
      parentComment.replies.push(createReply(commentText, currentUser));
      console.log(
        `Adding reply to comment ${parentComment.id}: ${parentComment.content}`
      );
    }
    setCommentList(updatedComments);
  };

  // useEffect(() => {
  //   const loadData = async function () {
  //     try {
  //       const response = await fetch(`${SERVER_URL}:${SERVER_PORT}/comments`);
  //       const json = await response.json();
  //       setCommentList(json);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   loadData();
  // }, []);

  useEffect(() => {
    const { comments } = commentsData;
    setCommentList(comments);
  }, []);

  return (
    <UserContext>
      <CommentList commentList={commentList} addComment={addComment} />
      <CreateReply type="send" />
      <About />
      <DeleteDialog />
    </UserContext>
  );
}
