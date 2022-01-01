import { useState, useEffect } from "react";
import { SERVER_URL } from "./config";
import CommentList from "./components/CommentList";
import "./App.css";

export default function App() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const loadData = async function () {
      try {
        const response = await fetch(`${SERVER_URL}/comments`);
        const json = await response.json();
        setCommentList(json);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <CommentList commentList={commentList} />
    </div>
  );
}
