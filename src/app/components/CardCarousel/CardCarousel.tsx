"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./CardCarousel.module.css";
import Link from "next/link";
import React, { useState } from "react";

// Unified type for both videos and articles
interface CarouselItem {
  id: string;
  label?: string;
  title?: string;
  time?: string;
  image?: { url: string; alt?: string };
  video?: { url: string };
  heading?: string;
  description?: string;
  link?: { url: string };
  author?: string;
  date: string;
  category?: string;
}

interface CarouselProps {
  data: CarouselItem[];
  viewAllLink: string;
}

const Carousel: React.FC<CarouselProps> = ({ data, viewAllLink }) => {
  const [isReady, setIsReady] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 425px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
    created() {
      setIsReady(true);
    },
  });

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.topRow}>
        <div></div>
        <Link href={viewAllLink || "/"} className={styles.viewAllLink}>
          View All
        </Link>
      </div>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {data.map((item) => (
          <div key={item.id} className={`keen-slider__slide ${styles.slide}`}>
            <Link href={item.link?.url || "#"} className={styles.cardLink}>
              {item.video?.url ? (
                <video src={item.video.url} controls className={styles.media} />
              ) : item.image?.url ? (
                <img
                  src={item.image.url}
                  alt={item.image.alt || "Article Image"}
                  className={styles.media}
                />
              ) : (
                <div className={styles.videoPlaceholder}>
                  <span className={styles.playIcon}>▶</span>
                  <p className={styles.comingSoon}>Media Coming Soon</p>
                </div>
              )}
              <div className={styles.info}>
                <span className={styles.category}>
                  {item.category || item.label || ""}
                </span>
                <h3 className={styles.title}>
                  {item.heading || item.title || ""}
                </h3>
                <p className={styles.description}>{item.description || ""}</p>
                <p className={styles.meta}>
                  {item.date}
                  {item.author ? ` | ${item.author}` : ""}
                  {item.time ? ` | ${item.time}` : ""}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={() => instanceRef.current?.prev()}
        className={`${styles.navButton} ${styles.left}`}
        aria-label="Previous"
        disabled={!isReady}
      >
        ‹
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className={`${styles.navButton} ${styles.right}`}
        aria-label="Next"
        disabled={!isReady}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
