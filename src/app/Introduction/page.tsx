import React from "react";
import styles from "./Introduction.module.css";
export default function TeaserPage() {
  return (
    <main className={styles.container}>
      <div className={styles.overlay}>
        <img
          src="/backgroundImage.png"
          alt="flower branch"
          className={styles.flower}
        />
        <div className={styles.content}>
          <div className={styles.bio}>
            <h1>Bio</h1>
          </div>
          <div className={styles.achievements}>
            <h1>achievements</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
