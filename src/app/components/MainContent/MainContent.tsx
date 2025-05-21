import React, { FC } from "react";
import styles from "./MainContent.module.css";
import Responsive from "../CardCarousel/CardCarousel";

const MainContent: FC = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.topSection}>
        <h2>Top Section</h2>
        <Responsive />
        <p>This is the top section content.</p>
      </div>
      <div className={styles.bottomSection}>
        <h2>Bottom Section</h2>
        <p>This is the bottom section content.</p>
      </div>
    </section>
  );
};

export default MainContent;
