import { useState } from "react";
import Comment from "./Comment";
import styles from "../style/CommentList.module.css";

// TODO: Move the collapsing to the <li>
export default function CommentList({ commentList }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <ul className={styles.commentList}>
      {commentList.map((comment) => (
        <li className={styles.commentListItem} key={comment.id}>
          <Comment comment={comment} />
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
