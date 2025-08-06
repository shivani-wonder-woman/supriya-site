"use client";

import React, { FC, useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import HeaderCarousel from "./HeaderCarousel/HeaderCarousel";
import { asText } from "@prismicio/helpers";
import { client } from "../../../../prismicio";

interface IntroPicItems {
  id: string;
  image: { url: string; alt?: string };
  heading: string;
}

const Header: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [introPic, setIntroPic] = useState<IntroPicItems[]>([]);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchIntroPics = async () => {
      try {
        const response = await client.getAllByType("introcards");
        console.log("RawwwwwPrismic response for blogpost:", response);

        const mappedData = response.map(
          (doc): IntroPicItems => ({
            id: doc.id,
            image: {
              url: doc.data.image?.url || "",
              alt: doc.data.image?.alt || "",
            },
            heading: asText(doc.data.heading) || "",
          })
        );

        console.log("mappedDataaaaa....", mappedData);
        setIntroPic(mappedData);
      } catch (error) {
        console.error("Error fetching introPic from Prismic:", error);
      }
    };

    fetchIntroPics();
  }, []);

  return (
    <div className={styles.top}>
      <div className={styles.textBlock}>
        <div
          className={`${styles.introduction} ${
            isExpanded ? styles.expanded : ""
          }`}
        >
          <p>
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
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className={styles.headerCarousel}>
          {introPic.length > 0 ? (
            <HeaderCarousel data={introPic} />
          ) : (
            <p>Loading introPics...</p>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.clientImageWrapper}>
          <Image
            src="/clientImage.png"
            alt="Client Image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.clientImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
