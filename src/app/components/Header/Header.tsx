import React, { FC } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.textBlock}>
          <p>
            &quot;I&apos;m launching a brand-new podcast focused on film,
            creativity, and powerful conversations. Join me as I bring stories
            to life, one episode at a time.&quot;
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.clientImageWrapper}>
            <Image
              src="/images/client.webp"
              alt="Client Image"
              fill
              className={styles.clientImage}
              priority
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Achievements</h2>
      </div>
    </div>
  );
};

export default Header;
