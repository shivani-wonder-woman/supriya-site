"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./MainContent.module.css";
import Carousel from "../CardCarousel/CardCarousel";
import { client } from "../../../../prismicio";
import { asText } from "@prismicio/helpers";

interface ArticleItem {
  id: string;
  image: { url: string; alt?: string };
  heading: string;
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
interface ShortVideo {
  id: string;
  shortVideoImage: { url: string; alt?: string };
  shortVideoTitle: string;
  shortVideoDescription: string;
  shortVideoLink: { url: string };
  shortVideoReleaseDate: string;
}

const MainContent: FC = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [podcastVideo, setPodcastVideo] = useState<PodcastVideo[]>([]);
  const [shortVideo, setShortVideo] = useState<ShortVideo[]>([]);

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
            podcastReleaseDate: doc.data.podcastreleasedate,
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
            podcastReleaseDate: doc.data.podcastreleasedate,
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
  useEffect(() => {
    const fetchShortVideo = async () => {
      try {
        const response = await client.getAllByType("shortvideo");
        console.log("Raw Prismic response for shortvideo:", response);

        const mappedShortVideo = response.map(
          (doc): ShortVideo => ({
            id: doc.id,
            shortVideoImage: {
              url: doc.data.shortvideoimage?.url || "",
              alt: doc.data.shortvideoimage?.alt || "",
            },
            shortVideoTitle: asText(doc.data.shortvideotitle) || "",
            shortVideoDescription: asText(doc.data.shortvideodescription) || "",
            shortVideoLink: { url: doc.data.shortvideolink?.url || "#" },
            shortVideoReleaseDate: doc.data.shortvideoreleasedate,
          })
        );
        console.log("mappedShortVideo", mappedShortVideo);

        setShortVideo(mappedShortVideo);
      } catch (error) {
        console.error("Error fetching podcastVideo from Prismic:", error);
      }
    };

    fetchShortVideo();
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className={styles.topSection}>
        <div className={styles.heading}>
          <h2>Video Podcasts</h2>
        </div>
        {podcastVideo.length > 0 ? (
          <Carousel
            data={podcastVideo.map((video) => ({
              id: video.id,
              image: video.podcastImage,
              category: video.podcastCategory,
              title: video.videoDescription,
              link: video.podcastLink,
              date: video.podcastReleaseDate,
            }))}
            viewAllLink="/Videos"
          />
        ) : (
          <p>Loading videos...</p>
        )}
      </div>

      <div className={styles.middleSection}>
        <div className={styles.heading}>
          <h2>Short Videos</h2>
        </div>
        {shortVideo.length > 0 ? (
          <Carousel
            data={shortVideo.map((video) => ({
              id: video.id,
              image: video.shortVideoImage,
              category: video.shortVideoTitle,
              title: video.shortVideoDescription,
              link: video.shortVideoLink,
              date: video.shortVideoReleaseDate,
            }))}
            viewAllLink="/Videos"
          />
        ) : (
          <p>Loading Shortvideos...</p>
        )}
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.heading}>
          <h2>Articles</h2>
        </div>
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
