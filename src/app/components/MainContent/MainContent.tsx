"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./MainContent.module.css";
import Carousel from "../CardCarousel/CardCarousel";
import { videoData } from "../Data/Data";
import { client } from "../../../../prismicio";
import * as prismicH from "@prismicio/helpers";

interface ArticleItem {
  id: string;
  image: { url: string; alt?: string };
  heading: string;
  description: string;
  link: { url: string };
  author: string;
  date: string;
  category: string;
}
const MainContent: FC = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await client.getAllByType("blogpost");
        console.log("Raw Prismic response:", response);

        const mappedData = response.map(
          (doc): ArticleItem => ({
            id: doc.id,
            image: {
              url: doc.data.image?.url || "",
              alt: doc.data.image?.alt || "",
            },
            heading: prismicH.asText(doc.data.heading),
            description: prismicH.asText(doc.data.description),
            link: { url: doc.data.link?.url || "#" },
            author: doc.data.author || "Unknown Author",
            date: doc.data.date,
            category: doc.data.category || "General",
          })
        );

        setArticles(mappedData);
      } catch (error) {
        console.error("Error fetching articles from Prismic:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className={styles.topSection}>
        <h2>Video Podcasts</h2>
        <Carousel data={videoData} viewAllLink="/Videos" />
      </div>
      <div className={styles.topSection}>
        <h2>Video Snippets</h2>
        <Carousel data={videoData} viewAllLink="/Videos" />
      </div>
      <div className={styles.bottomSection}>
        <h2>Articles</h2>
        <Carousel data={articles} viewAllLink="/Articles" />
      </div>
    </section>
  );
};

export default MainContent;
