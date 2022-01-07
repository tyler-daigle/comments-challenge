import { useContext, useState } from "react";
import { userContext } from "../UserContext";
import Avatar from "./Avatar";
import styles from "../style/CreateReply.module.css";

export default function CreateReply({
  type,
  okHandler,
  cancelHandler,
  addComment,
  commentId,
}) {
  const [replyTextArea, setReplyTextArea] = useState("");

  const { username, image } = useContext(userContext);
  const addCommentHandler = () => {
    console.log("adding a comment...");
    addComment(replyTextArea, commentId, username);
    okHandler();
  };

  return (
    <div className={styles.createReplyContainer}>
      <textarea
        className={styles.replyTextarea}
        placeholder="Add a comment..."
        value={replyTextArea}
        onChange={(e) => setReplyTextArea(e.target.value)}
      ></textarea>

      <div className={styles.replyControlsContainer}>
        <Avatar image={image} />
        <div>
          {cancelHandler && (
            <button onClick={cancelHandler} className={styles.cancelButton}>
              Cancel
            </button>
          )}
          <button onClick={addCommentHandler} className={styles.sendButton}>
            {type.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}
