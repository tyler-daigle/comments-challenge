import styles from "../style/DeleteDialog.module.css";
import { useRef, useEffect } from "react";

export default function DeleteDialog({ okHandler, cancelHandler, open }) {
  const deleteDialogRef = useRef();
  useEffect(() => {
    if (open) {
      deleteDialogRef.current.showModal();
    }
  }, [open]);

  return (
    <dialog ref={deleteDialogRef}>
      <h2 className={styles.dialogHeader}>Delete Comment</h2>
      <p>
        Are you sure you want to delete this comment? This will remove the
        command and can't be undone.
      </p>
      <div className={styles.dialogButtonContainer}>
        <button className={styles.cancelButton} onClick={cancelHandler}>
          NO, CANCEL
        </button>
        <button className={styles.deleteButton} onClick={okHandler}>
          YES, DELETE
        </button>
      </div>
    </dialog>
  );
}
