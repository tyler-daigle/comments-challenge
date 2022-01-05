import avatarPlaceHolder from "../images/avatars/image-amyrobson.png";
import styles from "../style/Avatar.module.css";

export default function Avatar({ image }) {
  return <img className={styles.userAvatar} src={avatarPlaceHolder} />;
}
