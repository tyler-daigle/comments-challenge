import styles from "../style/VoteButton.module.css";

export default function VoteButton({ numberVotes, incVotes, decVotes }) {
  return (
    <div className={styles.voteButtonContainer}>
      <button
        className={styles.voteButton}
        type="button"
        onClick={() => incVotes()}
      >
        +
      </button>
      <span className={styles.voteTotal}>{numberVotes}</span>
      <button
        className={styles.voteButton}
        type="button"
        onClick={() => decVotes()}
      >
        -
      </button>
    </div>
  );
}
