import { useContext } from "react";
import Comment from "./Comment";
import styles from "../style/CommentList.module.css";
import { userContext } from "../UserContext";

export default function CommentList({ commentList }) {
  const { username } = useContext(userContext);

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
