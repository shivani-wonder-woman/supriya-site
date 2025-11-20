"use client";

import React, { FC, useState, useEffect } from "react";
import styles from "./Header.module.css";
import { client } from "../../../../prismicio";
import Image from "next/image";

const Header: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [clientImage, setClientImage] = useState<{ url: string; alt: string }>({
    url: "",
    alt: "",
  });

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchClientImage = async () => {
      try {
        const response = await client.getAllByType("myimage");

        if (response.length > 0 && response[0].data.image?.url) {
          setClientImage({
            url: response[0].data.image.url,
            alt: response[0].data.image.alt || "Client Image",
          });
        }
      } catch (error) {
        console.error("Error fetching client image from Prismic:", error);
      }
    };

    fetchClientImage();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.clientImage}>
        {clientImage.url && (
          <Image
            src={clientImage.url}
            alt={clientImage.alt}
            width={500}
            height={500}
            className={styles.zoomImage}
          />
        )}
      </div>
      <div className={styles.intro}>
        <div className={styles.podcast}>
          <div className={styles.title}>The Podcast</div>
          <div className={styles.subtitle}>CHAI TIME WITH SUPRIYA</div>
        </div>
        <div
          className={`${styles.introduction} ${
            isExpanded ? styles.expanded : ""
          }`}
        >
          <p className={styles.zoomParagraph}>
            Over a cup of steaming chai, some of the best stories come to life —
            and that’s what I’m chasing with my YouTube podcast, “Chai Time With
            Supriya.” After more than a decade as a journalist in Japan with
            Kyodo News and Bloomberg, I’m now channeling my passion for
            storytelling into meaningful conversations on culture, technology,
            and health — bridging voices across borders and languages. When I’m
            not recording, I lead media and international communications at a
            venture fund investing in major tech startups across Japan and
            India. I also independently support Indian businesses entering the
            Japanese market — often switching between Hindi, English, and
            Japanese in a single day. Born in India and raised in Japan from the
            age of 15, I’ve grown up navigating cultures. I completed high
            school in Japan, studied in India for my bachelor’s, and returned
            for a master’s at Tokyo University of Foreign Studies. My journalism
            career began in 2014 at Kyodo News, where I covered everything from
            social issues to financial markets in both English and Japanese.
            After nearly a decade, I joined Bloomberg to report on transport,
            autos, and airlines — tracking Japan’s evolving mobility landscape.
          </p>
          <button className={styles.readMoreBtn} onClick={toggleText}>
            {isExpanded ? "Read Less" : "Read More About Supriya Singh"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Header;
