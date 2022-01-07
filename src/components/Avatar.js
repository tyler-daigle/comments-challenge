import styles from "../style/Avatar.module.css";

export default function Avatar({ image }) {
  return (
    <img
      alt="User Avatar"
      className={styles.userAvatar}
      src={image.substring(1)}
    />
  );
}
