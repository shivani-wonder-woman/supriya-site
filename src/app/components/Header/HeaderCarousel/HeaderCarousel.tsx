"use client";

import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderInstance, KeenSliderHooks } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import styles from "./HeaderCarousel.module.css";
import Image from "next/image";

interface IntroPicItems {
  id: string;
  image: { url: string; alt?: string };
  heading: string;
}

interface HeaderCarouselProps {
  data: IntroPicItems[];
}

function autoplayPlugin(delay: number = 3000) {
  return (slider: KeenSliderInstance<object, object, KeenSliderHooks>) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, delay);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
}

export default function HeaderCarousel({ data }: HeaderCarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: 5.2,
        spacing: 10,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 3.4, spacing: 10 },
          mode: "free-snap",
        },
        "(max-width: 768px)": {
          slides: { perView: 2.7, spacing: 10 },
          mode: "free-snap",
        },
        "(max-width: 425px)": {
          slides: { perView: 3, spacing: 8 },
          mode: "free-snap",
        },
        "(max-width: 375px)": {
          slides: { perView: 2.5, spacing: 8 },
          mode: "free-snap",
        },
      },
      defaultAnimation: {
        duration: 1000,
      },
      dragSpeed: 1.5,
      renderMode: "performance",
    },
    [autoplayPlugin(500)]
  );

  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <div
      className={styles.carouselWrapper}
      role="region"
      aria-label="Article carousel"
    >
      <button
        onClick={prev}
        className={styles.arrowLeft}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {data.map((item, i) => (
          <div
            key={item.id}
            className={`keen-slider__slide ${styles.card}`}
            role="group"
            aria-label={`Article ${item.heading}`}
          >
            <Image
              src={item.image.url}
              alt={item.image.alt || item.heading}
              className={styles.image}
              width={200}
              height={120}
              priority={i < 3}
            />
            <h3>{item.heading}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className={styles.arrowRight}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}
