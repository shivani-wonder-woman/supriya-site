import React, { FC } from "react";
import Image from "next/image";
import styles from "./NewReleaseTeaser.module.css";

const NewReleaseTeaser: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <h2 className={styles.title}>New Release Teaser</h2>
      <p className={styles.subtitle}>Video will be added here soon...</p>
    </section>
  );
};

export default NewReleaseTeaser;
