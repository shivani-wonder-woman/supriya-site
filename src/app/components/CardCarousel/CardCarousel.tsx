"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./CardCarousel.module.css";

const responsive = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const videoItems = [
    {
      id: 1,
      thumbnail: "/thumbnails/video1.jpg",
      title: "slide-1",
    },
    {
      id: 2,
      thumbnail: "/thumbnails/video2.jpg",
      title: "slide-2",
    },
    {
      id: 3,
      thumbnail: "/thumbnails/video3.jpg",
      title: "slide-3",
    },
    {
      id: 4,
      thumbnail: "/thumbnails/video4.jpg",
      title: "slide-4",
    },
  ];

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {videoItems.map((video) => (
          <div key={video.id} className={styles.card}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className={styles.thumbnail}
            />
            <p className={styles.title}>{video.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default responsive;
