import React, { FC } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: FC = function Footer() {
  return (
    <div className={styles.footer}>
      <section className={styles.section}>
        <h3 className={styles.heading}>Contacts</h3>
        <p className={styles.text}>Phone: +81 80-4003-1989</p>
        <p className={styles.text}>Email: supriya.shin9@gmail</p>
        <p className={styles.text}> Japan</p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>Follow Us</h3>
        <p className={styles.text}>
          <a
            href="https://www.facebook.com/supriya.singh.96"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaFacebook /> Facebook
          </a>
          {" | "}
          <a
            href="https://www.instagram.com/chaitimewithsupriya/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaInstagram /> Instagram
          </a>
          {" | "}
          <a
            href="https://www.youtube.com/@ChaiTimeWithSupriya/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaYoutube /> YouTube
          </a>
          {" | "}
          <a
            href="https://x.com/Supriya_Japan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaTwitter /> Twitter
          </a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
