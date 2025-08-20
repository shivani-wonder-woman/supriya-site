"use client";

import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.right}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logoImage.png"
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
            className={styles.logoImage}
          />
        </div>
      </div>
      <h4 className={styles.navItem}>
        <Link href="/Contact">Join Our Podcast</Link>
      </h4>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Videos">Video</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Videos">Short Video</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Articles">Articles</Link>
        </li>
      </ul>
    </div>
  );
}
