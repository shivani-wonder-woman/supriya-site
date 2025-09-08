"use client";
import { useRouter } from "next/navigation";
import styles from "./NewReleaseTeaser.module.css";

const NewReleaseTease = () => {
  const router = useRouter();

  const handleWatchNow = () => {
    router.push("/TeaserVideo");
  };

  return (
    <div className={styles.teaseContainer}>
      <div className={styles.overlayContent}>
        <h1 className={styles.title}>New Release Teaser</h1>
        <button onClick={handleWatchNow} className={styles.watchButton}>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default NewReleaseTease;
