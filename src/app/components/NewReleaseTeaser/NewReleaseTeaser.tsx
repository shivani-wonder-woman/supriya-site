"use client";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import styles from "./NewReleaseTeaser.module.css";
import { client } from "../../../../prismicio";
// interface TeaserItem {
//   image: { url: string; alt?: string };
//   link: { url: string };
// }

const NewReleaseTease: FC = () => {
  const handleWatchNow = () => {
    if (clientImage.linkUrl) {
      window.open(clientImage.linkUrl, "_blank", "noopener,noreferrer");
    }
  };

  const [clientImage, setClientImage] = useState<{
    url: string;
    alt: string;
    linkUrl: string;
  }>({
    url: "",
    alt: "",
    linkUrl: "",
  });

  useEffect(() => {
    const fetchClientImage = async () => {
      try {
        const response = await client.getAllByType("newreleaseteaser");

        if (response.length > 0 && response[0].data.image?.url) {
          setClientImage({
            url: response[0].data.image.url,
            alt: response[0].data.image.alt || "Client Image",
            linkUrl: response[0].data.link?.url || "#",
          });
        }
      } catch (error) {
        console.error("Error fetching client image from Prismic:", error);
      }
    };

    fetchClientImage();
  }, []);

  return (
    <div className={styles.teaseContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>New Release Teaser</h1>
        <div className={styles.description}>
          12-year-old Shun Sasaki, who conducts free tours twice a month and
          tells foreigners in English what happened 80 years ago. Shun speaks
          about his great-grandmother, an atomic bomb survivo, and urges the
          world to stop war.
        </div>
        <button onClick={handleWatchNow} className={styles.watchButton}>
          Watch Now
        </button>
      </div>
      <div className={styles.imageContainer}>
        {clientImage.url && (
          <a
            href={clientImage.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={clientImage.url}
              alt={clientImage.alt || "Client Image"}
              width={0}
              height={0}
              sizes="100vw"
              className={styles.clientImage}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default NewReleaseTease;
