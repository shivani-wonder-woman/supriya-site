"use client";
import Image from "next/image";

import React, { FC, useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import styles from "./NewReleaseTeaser.module.css";
import { asText } from "@prismicio/helpers";
import { client } from "../../../../prismicio";

const NewReleaseTease = () => {
  const [error, setError] = useState("");
  const [clientImage, setClientImage] = useState<{ url: string; alt: string }>({
    url: "",
    alt: "",
  });
  const router = useRouter();

  const handleWatchNow = () => {
    router.push("/TeaserVideo");
  };
  useEffect(() => {
    const fetchClientImage = async () => {
      try {
        const response = await client.getAllByType("newreleaseteaser");

        if (response.length > 0 && response[0].data.image?.url) {
          setClientImage({
            url: response[0].data.image.url,
            alt: response[0].data.image.alt || "Client Image",
          });
        }
      } catch (error) {
        console.error("Error fetching client image from Prismic:", error);
        setError("Failed to load client image. Please try again later.");
      }
    };

    fetchClientImage();
  }, []);

  return (
    <div className={styles.teaseContainer}>
      <div className={styles.imageContainer}>
        {clientImage.url && (
          <Image
            src={clientImage.url}
            alt={clientImage.alt || "Client Image"}
            width={500}
            height={300}
            sizes="100vw"
            className={styles.clientImage}
          />
        )}
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>New Release Teaser</h1>
        <div className={styles.description}>
          12-year-old Shun Sasaki, who conducts free tours twice a month and
          tells foreigners in English what happened 80 years ago. Shun speaks
          about his great-grandmother, an atomic bomb survivor, and urges the
          world to stop war.
        </div>
        <button onClick={handleWatchNow} className={styles.watchButton}>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default NewReleaseTease;
