import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import VoteButton from "./VoteButton";
import styles from "../style/Comment.module.css";
import CommentHeader from "./CommentHeader";
import CreateReply from "./CreateReply";
import DeleteDialog from "./DeleteDialog";

export default function Comment({ comment, currentUser, addComment }) {
  const [numVotes, setNumVotes] = useState();
  const [showReply, setShowReply] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const replyClickHandler = () => setShowReply(true);
  const cancelHandler = () => setShowReply(false);
  const okHandler = () => setShowReply(false);

  useEffect(() => {
    setNumVotes(comment.score);
  }, [comment]);

  const openDialog = () => setDialogOpen(true);
  const dialogCancel = () => setDialogOpen(false);
  const dialogOk = () => {
    console.log("deleting");
    setDialogOpen(false);
  };

  const incVotes = () => setNumVotes(numVotes + 1);
  const decVotes = () => {
    if (numVotes > 0) {
      setNumVotes(numVotes - 1);
    }
  };

  return (
    <div>
      {dialogOpen && (
        <DeleteDialog
          open={dialogOpen}
          okHandler={dialogOk}
          cancelHandler={dialogCancel}
        />
      )}

      <div className={styles.commentContainer}>
        <CommentHeader comment={comment} currentUser={currentUser} />

        <p className={styles.commentText}>
          {comment.replyingTo && <ReplyingTo username={comment.replyingTo} />}{" "}
          {comment.content}
        </p>

        <VoteButton
          numberVotes={numVotes}
          incVotes={incVotes}
          decVotes={decVotes}
        />

        <div className={styles.commentControls}>
          {currentUser === comment.user.username ? (
            <div className={styles.editControlsContainer}>
              <button
                onClick={openDialog}
                className={styles.deleteButton + " " + styles.controlButton}
              >
                <FontAwesomeIcon icon={faTrash} />
                <span className={styles.buttonText}>Delete</span>
              </button>
              <button
                className={styles.editButton + " " + styles.controlButton}
              >
                <FontAwesomeIcon icon={faPen} />
                <span className={styles.buttonText}>Edit</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={replyClickHandler}
              className={styles.replyButton}
            >
              <FontAwesomeIcon icon={faReply} /> Reply
            </button>
          )}
        </div>
      </div>
      {showReply && (
        <CreateReply
          type="reply"
          okHandler={okHandler}
          cancelHandler={cancelHandler}
          commentId={comment.id}
          addComment={addComment}
        />
      )}
    </div>
  );
}

function ReplyingTo({ username }) {
  return <span className={styles.replyingTo}>@{username}</span>;
}
