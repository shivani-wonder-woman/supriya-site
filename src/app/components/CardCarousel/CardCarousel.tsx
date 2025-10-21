"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./CardCarousel.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

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
  date?: string;
  category?: string;
}

interface CarouselProps {
  data: CarouselItem[];
  viewAllLink?: string;
}

const Carousel: React.FC<CarouselProps> = ({ data, viewAllLink }) => {
  const [isReady, setIsReady] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<
    Record<string, boolean>
  >({});

  const toggleDescription = (id: string) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1440px)": {
        slides: {
          perView: 3.2,
          spacing: 14,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2.5,
          spacing: 12,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2.3,
          spacing: 10,
        },
      },

      "(max-width: 540px)": {
        slides: {
          perView: 1.4,
          spacing: 9,
        },
      },
      "(max-width: 425px)": {
        slides: {
          perView: 1.5,
          spacing: 8,
        },
      },

      "(max-width: 375px)": {
        slides: {
          perView: 1.3,
          spacing: 7,
        },
      },
      "(max-width: 320px)": {
        slides: {
          perView: 1.2,
          spacing: 5,
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
        {data.map((item) => {
          const isExpanded = expandedDescriptions[item.id];

          return (
            <div key={item.id} className={`keen-slider__slide ${styles.slide}`}>
              <a
                href={item.link?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                {item.video?.url ? (
                  <video
                    src={item.video.url}
                    controls
                    className={styles.media}
                  />
                ) : item.image?.url ? (
                  <div className={styles.mediaWrapper}>
                    <Image
                      src={item.image.url}
                      alt={item.image.alt || "Article Image"}
                      width={500}
                      height={300}
                      className={styles.media}
                      priority
                    />
                  </div>
                ) : (
                  <div className={styles.videoPlaceholder}>
                    <span className={styles.playIcon}>▶</span>
                    <p className={styles.comingSoon}>
                      {item.video ? "Media Coming Soon" : "Image Not Available"}
                    </p>
                  </div>
                )}

                <div className={styles.info}>
                  <span className={styles.category}>
                    {item.category || item.label || ""}
                  </span>
                  <h3 className={styles.title}>
                    {item.heading || item.title || ""}
                  </h3>
                  <p className={styles.meta}>
                    {item.date}
                    {item.time ? ` | ${item.time}` : ""}
                  </p>

                  {item.description && (
                    <div className={styles.descriptionWrapper}>
                      <p
                        className={`${styles.description} ${
                          isExpanded ? styles.full : styles.truncated
                        }`}
                      >
                        {item.description}
                      </p>
                      {item.description.length > 100 && (
                        <button
                          className={styles.readMoreBtn}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleDescription(item.id);
                          }}
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </a>
            </div>
          );
        })}
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
