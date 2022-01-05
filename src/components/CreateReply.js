import { useContext } from "react";
import { userContext } from "../UserContext";
import Avatar from "./Avatar";
import styles from "../style/CreateReply.module.css";

export default function CreateReply({ type, okHandler, cancelHandler }) {
  const { username, image } = useContext(userContext);

  return (
    <div className={styles.createReplyContainer}>
      <textarea
        className={styles.replyTextarea}
        placeholder="Add a comment..."
      ></textarea>

      <div className={styles.replyControlsContainer}>
        <Avatar image={image} />
        <div>
          {cancelHandler && (
            <button onClick={cancelHandler} className={styles.cancelButton}>
              Cancel
            </button>
          )}
          <button onClick={okHandler} className={styles.sendButton}>
            {type.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}
