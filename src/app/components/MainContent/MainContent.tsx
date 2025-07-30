"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./MainContent.module.css";
import Carousel from "../CardCarousel/CardCarousel";
import { videoData } from "../Data/Data";
import { client } from "../../../../prismicio";
import { asText } from "@prismicio/helpers";

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

interface PodcastVideo {
  id: string;
  podcastImage: { url: string; alt?: string };
  podcastCategory: string;
  videoDescription: string;
  podcastLink: { url: string };
  podcastReleaseDate: string;
}

const MainContent: FC = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [podcastVideo, setPodcastVideo] = useState<PodcastVideo[]>([]);

  // Fetch blogpost data
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await client.getAllByType("blogpost");
        console.log("Raw Prismic response for blogpost:", response);

        const mappedData = response.map(
          (doc): ArticleItem => ({
            id: doc.id,
            image: {
              url: doc.data.image?.url || "",
              alt: doc.data.image?.alt || "",
            },
            heading: asText(doc.data.heading) || "",
            description: asText(doc.data.description) || "",
            link: { url: doc.data.link?.url || "#" },
            author: asText(doc.data.author) || "Unknown Author",
            date: doc.data.date,
            category: asText(doc.data.category) || "General",
          })
        );
        console.log("mappedData....", mappedData);

        setArticles(mappedData);
      } catch (error) {
        console.error("Error fetching articles from Prismic:", error);
      }
    };

    fetchArticles();
  }, []);

  // Fetch videopodcast data
  useEffect(() => {
    const fetchPodcastVideo = async () => {
      try {
        const response = await client.getAllByType("videopodcast");
        console.log("Raw Prismic response for videopodcast:", response);

        const mappedVideoData = response.map(
          (doc): PodcastVideo => ({
            id: doc.id,
            podcastImage: {
              url: doc.data.podcastimage?.url || "",
              alt: doc.data.podcastimage?.alt || "",
            },
            podcastCategory: asText(doc.data.podcastcategory) || "",
            videoDescription: asText(doc.data.videodescription) || "",
            podcastLink: { url: doc.data.podcastlink?.url || "#" },
            podcastReleaseDate: doc.data.podcastreleaseDate,
          })
        );
        console.log("mappedVIdeoData", mappedVideoData);

        setPodcastVideo(mappedVideoData);
      } catch (error) {
        console.error("Error fetching podcastVideo from Prismic:", error);
      }
    };

    fetchPodcastVideo();
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className={styles.topSection}>
        <h2>Video Podcasts</h2>
        {podcastVideo.length > 0 ? (
          <Carousel data={podcastVideo} viewAllLink="/Videos" />
        ) : (
          <p>Loading videos...</p>
        )}
      </div>

      <div className={styles.topSection}>
        <h2>Video Snippets</h2>
        <Carousel data={videoData} viewAllLink="/Videos" />
      </div>

      <div className={styles.bottomSection}>
        <h2>Articles</h2>
        {articles.length > 0 ? (
          <Carousel data={articles} viewAllLink="/Articles" />
        ) : (
          <p>Loading articles...</p>
        )}
      </div>
    </section>
  );
};

export default MainContent;
