"use client";

import React, { FC, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import HeaderCarousel from "./HeaderCarousel/HeaderCarousel";

const Header: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.top}>
      <div className={styles.textBlock}>
        <div
          className={`${styles.introduction} ${
            isExpanded ? styles.expanded : ""
          }`}
        >
          <p>
            Welcome to my brand-new podcast! Here, we dive into stories about
            film, creativity, and meaningful conversations. Stay tuned for
            exciting episodes coming your way. &quot;I&apos;m launching a
            brand-new podcast focused on film, creativity, and powerful
            conversations. Join me as I bring stories to life, one episode at a
            time.&quot;Because every story deserves to be heard — I&apos;m launching
            a captivating podcast that celebrates film, creativity, and powerful
            voices. Tune in, be inspired, and own your narrative. Because you&apos;re
            worth the conversation.
          </p>
          <button className={styles.readMoreBtn} onClick={toggleText}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className={styles.headerCarousel}>
          <HeaderCarousel />
        </div>
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
  );
};

export default Header;
