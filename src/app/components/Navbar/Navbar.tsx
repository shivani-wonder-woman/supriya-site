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
            <h4 className={styles.navItem}>
              <Link href="/Contact">Join Our Podcast</Link>
            </h4>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div
          className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}
        ></div>
        <div
          className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}
        ></div>
        <div
          className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ""}`}
        ></div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
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
      </div>

      {/* Desktop Navigation */}
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
