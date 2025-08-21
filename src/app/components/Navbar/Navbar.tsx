"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isContactPage = pathname === "/Contact";

  return (
    <div className={styles.navbar}>
      <div className={`${styles.right} ${isContactPage ? styles.hidden : ""}`}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logoImage.png"
            alt="logo"
            width={80}
            height={40}
            style={{ objectFit: "contain" }}
            className={styles.logoImage}
          />
        </div>
        <div className={styles.joinPodcast}>
          <h4 className={styles.navItem}>
            <Link href="/Contact">Join Our Podcast</Link>
          </h4>
        </div>
      </div>
      <div className={styles.navListWrapper}>
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
    </div>
  );
}
