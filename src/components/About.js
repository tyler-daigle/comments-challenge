import styles from "../style/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <p>
        This page was created for the{" "}
        <a href="https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9">
          Frontendmentor
        </a>{" "}
        Comments section challenge.
      </p>

      <p>
        I created the page using React and CSS modules for all the styling. The
        page uses Grid and Flexbox to achieve the responsive design laid out in
        the design files. Some of the items in the comments are positioned
        differently based on whether the user is viewing it on mobile or
        desktop.
      </p>

      <p>
        The app doesn't work 100%. You can add replies to other comments, but
        you cannot edit or delete them. There is no backend to this app,
        everything is just loaded from a static object and replies you create
        will not exist if you refresh the page. The app was mostly built for the
        design practice.
      </p>

      <p>
        You can view the code at{" "}
        <a href="https://github.com/tyler-daigle/comments-challenge">Github</a>.
      </p>
    </div>
  );
}
