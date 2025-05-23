import React, { FC } from "react";
import styles from "./MainContent.module.css";
import Responsive from "../CardCarousel/CardCarousel";

const MainContent: FC = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.topSection}>
        <h2>Videos</h2>
        <Responsive />
      </div>
      <div className={styles.bottomSection}>
        <h2>Articles</h2>
        <Responsive />
      </div>
    </section>
  );
};

export default MainContent;
