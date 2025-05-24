"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./CardCarousel.module.css";
import Link from "next/link";

interface CarouselItem {
  id: number;
  label: string;
  title: string;
  date: string;
  time: string;
}

interface CarouselProps {
  data: CarouselItem[];
  viewAllLink: string;
}

const Carousel: React.FC<CarouselProps> = ({ data, viewAllLink }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
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
        {data?.map((item) => (
          <div key={item.id} className={`keen-slider__slide ${styles.slide}`}>
            <div className={styles.videoPlaceholder}>
              <span className={styles.playIcon}>▶</span>
              <p className={styles.comingSoon}>Video Coming Soon</p>
            </div>
            <div className={styles.info}>
              <span className={styles.label}>{item.label}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.meta}>
                {item.date} | {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className={`${styles.navButton} ${styles.left}`}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className={`${styles.navButton} ${styles.right}`}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
