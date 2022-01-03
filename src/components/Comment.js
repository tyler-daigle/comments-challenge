import { useState, useEffect } from "react";
import VoteButton from "./VoteButton";
import styles from "../style/Comment.module.css";
import avatarPlaceHolder from "../images/avatars/image-amyrobson.png";

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
  // TODO: extract the commentHeader and commentControls to separate components.
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentHeader}>
        <img className={styles.userAvatar} src={avatarPlaceHolder} />
        <span className={styles.userName}>{comment.user.username}</span>
        <span className={styles.postedDate}>{comment.createdAt}</span>
      </div>
      <p className={styles.commentText}>{comment.content}</p>
      <div className={styles.commentControls}>
        <VoteButton
          numberVotes={numVotes}
          incVotes={incVotes}
          decVotes={decVotes}
        />
        <button type="button" className={styles.replyButton}>
          ↩️ Reply
        </button>
      </div>
    </div>
  );
}
