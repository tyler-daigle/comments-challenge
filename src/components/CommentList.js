import { useState, useContext } from "react";
import { userContext } from "../UserContext";

import Comment from "./Comment";

import styles from "../style/CommentList.module.css";

export default function CommentList({ commentList }) {
  const { username } = useContext(userContext);

  // reply works but shows multiples for replies to replies
  return (
    <ul className={styles.commentList}>
      {commentList.map((comment) => (
        <li className={styles.commentListItem} key={comment.id}>
          <Comment currentUser={username} comment={comment} />

          {comment.replies && comment.replies.length !== 0 && (
            <div className={styles.repliesContainer}>
              <CommentList commentList={comment.replies} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
