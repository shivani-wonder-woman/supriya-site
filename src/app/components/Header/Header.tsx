import React, { FC } from "react";
import styles from "./Header.module.css";
import Responsive from "../CardCarousel/CardCarousel";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.left}>
          {/* Client image will go here */}
          <div className={styles.imagePlaceholder}>Client Image</div>
        </div>

        <div className={styles.right}>
          {/* Client introduction */}
          <div className={styles.intro}>
            <h2>Hello, I'm Supriya</h2>
            <p>
              I'm passionate about sharing movie updates, trailers, and
              articles. Stay tuned for exciting content!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <h2>Achievements</h2>
        <Responsive />
      </div>
    </header>
  );
};

export default Header;
