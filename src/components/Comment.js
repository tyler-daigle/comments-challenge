import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import VoteButton from "./VoteButton";
import styles from "../style/Comment.module.css";
import CommentHeader from "./CommentHeader";

export default function Comment({ comment }) {
  const [numVotes, setNumVotes] = useState();

  useEffect(() => {
    setNumVotes(comment.score);
  }, []);

  const incVotes = () => setNumVotes(numVotes + 1);
  const decVotes = () => {
    if (numVotes > 0) {
      setNumVotes(numVotes - 1);
    }
  };

  // TODO: do check for current user and set the "you" badge and the edit and delete buttons
  return (
    <div className={styles.commentContainer}>
      <CommentHeader comment={comment} />
      <p className={styles.commentText}>{comment.content}</p>
      <div className={styles.commentControls}>
        <VoteButton
          numberVotes={numVotes}
          incVotes={incVotes}
          decVotes={decVotes}
        />
        <button type="button" className={styles.replyButton}>
          <FontAwesomeIcon icon={faReply} /> Reply
        </button>
      </div>
    </div>
  );
}
