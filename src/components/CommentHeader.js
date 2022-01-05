import styles from "../style/CommentHeader.module.css";
import avatarPlaceHolder from "../images/avatars/image-amyrobson.png";

export default function CommentHeader({ comment }) {
  return (
    <div className={styles.commentHeader}>
      <img className={styles.userAvatar} src={avatarPlaceHolder} />
      <span className={styles.userName}>{comment.user.username}</span>
      <span className={styles.postedDate}>{comment.createdAt}</span>
    </div>
  );
}
