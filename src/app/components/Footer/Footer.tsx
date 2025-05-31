import React, { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.section}>
          <h3 className={styles.heading}>Contacts</h3>
          <p className={styles.text}>Phone: +1 234 567 890</p>
          <p className={styles.text}>Email: contact@yoursite.com</p>
          <p className={styles.text}>Address: 123 Street, City, Country</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.heading}>Follow Us</h3>
          <p className={styles.text}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              📘 Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              📸 Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              ▶️ YouTube
            </a>{" "}
            |{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              🐦 Twitter
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
