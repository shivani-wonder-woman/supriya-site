import React, { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.left}>
          {/* Left content, e.g. logo or site name */}
          <h1>MySite</h1>
        </div>

        <div>{/* Right content, e.g. navigation or buttons */}</div>
      </div>

      <div className={styles.bottom}>
        {/* Bottom content, e.g. tagline or search bar */}
        <p className={styles.tagline}>
          Welcome to the ultimate movie experience!
        </p>
      </div>
    </header>
  );
};

export default Header;
