import { useState, useEffect } from "react";
import { SERVER_URL, SERVER_PORT } from "./config";
import UserContext from "./UserContext";
import CommentList from "./components/CommentList";
import CreateReply from "./components/CreateReply";
import "./App.css";

export default function App() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const loadData = async function () {
      try {
        const response = await fetch(`${SERVER_URL}:${SERVER_PORT}/comments`);
        const json = await response.json();
        setCommentList(json);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <UserContext>
      <CommentList commentList={commentList} />
      <CreateReply type="send" />
    </UserContext>
  );
}
