"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./CardCarousel.module.css";

function Responsive() {
  const settings = {
    dots: false, // <-- Hide dots
    arrows: true, // <-- Show arrows
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time (adjust as needed)
    slidesToScroll: 1, // Scroll one card at a time
    swipe: false, // <-- Disable swipe to move (optional)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {/* Hardcoded cards, no dynamic mapping */}
        <div className={styles.card}>
          <img
            src="/thumbnails/video1.jpg"
            alt="Video 1"
            className={styles.thumbnail}
          />
          <h3 className={styles.title}>Video 1</h3>
        </div>
        <div className={styles.card}>
          <img
            src="/thumbnails/video2.jpg"
            alt="Video 2"
            className={styles.thumbnail}
          />
          <h3 className={styles.title}>Video 2</h3>
        </div>
        <div className={styles.card}>
          <img
            src="/thumbnails/video3.jpg"
            alt="Video 3"
            className={styles.thumbnail}
          />
          <h3 className={styles.title}>Video 3</h3>
        </div>
        <div className={styles.card}>
          <img
            src="/thumbnails/video4.jpg"
            alt="Video 4"
            className={styles.thumbnail}
          />
          <h3 className={styles.title}>Video 4</h3>
        </div>
        {/* Add more cards manually here if you want */}
      </Slider>
    </div>
  );
}

export default Responsive;
