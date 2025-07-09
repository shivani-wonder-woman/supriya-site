"use client";
import React, { FC } from "react";
import styles from "./MainContent.module.css";
import Carousel from "../CardCarousel/CardCarousel";
import { videoData, articleData } from "../Data/Data";

const MainContent: FC = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.topSection}>
        <h2>Video Podcasts</h2>
        <Carousel data={videoData} viewAllLink="/Videos" />
      </div>
      <div className={styles.topSection}>
        <h2>Video Snippets</h2>
        <Carousel data={videoData} viewAllLink="/Videos" />
      </div>
      <div className={styles.bottomSection}>
        <h2>Articles</h2>
        <Carousel data={articleData} viewAllLink="/Articles" />
      </div>
    </section>
  );
};

export default MainContent;
