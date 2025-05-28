"use client";

import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderOptions } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import styles from "./HeaderCarousel.module.css";
import { useRef, useEffect } from "react";
import Image from "next/image";

// Autoplay plugin
function autoplayPlugin(delay: number = 3000) {
  return (slider: any) => {
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

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// 🔁 UPDATED: Temporary team data with placeholder images
const teamMembers: TeamMember[] = [
  {
    name: "Aaron Loeb",
    role: "Founder",
    image: "https://via.placeholder.com/150", // <-- Placeholder image
  },
  {
    name: "Adeline Palmerston",
    role: "Manager",
    image: "https://via.placeholder.com/150", // <-- Placeholder image
  },
  {
    name: "Daniel Gallego",
    role: "Co-Manager",
    image: "https://via.placeholder.com/150", // <-- Placeholder image
  },
];

// Main component
export default function HeaderCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "custom",
      drag: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 15 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 15 },
        },
      },
      animation: {
        duration: 1500,
        easing: (t: number) => t * (2 - t),
      },
    } as KeenSliderOptions,
    [autoplayPlugin(3000)]
  );

  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <div
      className={styles.carouselWrapper}
      role="region"
      aria-label="Team members carousel"
    >
      <button
        onClick={prev}
        className={styles.arrowLeft}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {[...teamMembers, ...teamMembers].map((member, i) => (
          <div
            key={i}
            className={`keen-slider__slide ${styles.card}`}
            role="group"
            aria-label={`Team member ${member.name}`}
          >
            <Image
              src={member.image}
              alt={member.name}
              className={styles.image}
              width={150}
              height={150}
              priority={i < 3}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
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
