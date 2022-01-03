import {useState, useEffect} from "react";
import VoteButton from "./VoteButton";

export default function Comment({ comment }) {
  const [collapsed, setCollapsed] = useState(false);
  const [numVotes, setNumVotes] = useState();

  useEffect(() => {
    setNumVotes(comment.score);
  }, []);

  const incVotes = () => setNumVotes(numVotes + 1);
  const decVotes = () => setNumVotes(numVotes - 1);

  return (
    <div className="commentContainer">
      <span onClick={() => setCollapsed(!collapsed)}>Comment</span>
      {!collapsed &&
        <div>          
          <p>{comment.content}</p>
          <VoteButton numberVotes={numVotes} incVotes={incVotes} decVotes={decVotes} />
        </div>
      }
    </div>
  );
};