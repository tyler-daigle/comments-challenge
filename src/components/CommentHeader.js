import styles from "../style/CommentHeader.module.css";
import Avatar from "./Avatar";

export default function CommentHeader({ comment, currentUser }) {
  return (
    <div className={styles.commentHeader}>
      <Avatar image={comment.user.image.png} />

      <span className={styles.userName}>{comment.user.username}</span>
      {currentUser === comment.user.username && (
        <span className={styles.youBadge}>you</span>
      )}
      <span className={styles.postedDate}>{comment.createdAt}</span>
    </div>
  );
}
