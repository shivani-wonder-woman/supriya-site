"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isContactPage = pathname === "/Contact";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

          <div className={styles.joinPodcast}>
            <Link href="/Contact" className={styles.navItem}>
              Join Our Podcast
            </Link>
          </div>
        </div>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        type="button"
      >
        <span
          className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}
        ></span>
      </button>

      <span />
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/Videos" onClick={closeMenu}>
              Video
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/Videos" onClick={closeMenu}>
              Short Video
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/Articles" onClick={closeMenu}>
              Articles
            </Link>
          </li>
        </ul>
      </nav>

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
