"use client";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./NewReleaseTeaser.module.css";
import { client } from "../../../../prismicio";
import { asText } from "@prismicio/helpers";
interface TeaserItem {
  image: { url: string; alt?: string };
  link: { url: string };
}

const NewReleaseTease: FC = () => {
  const [teaserVideo, setTeaserVideo] = useState<TeaserItem[]>([]);

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
          tells foreigners in English what happened 80 years ago. 12-year-old
          Shun Sasaki, who conducts free tours twice a month and tells
          foreigners in English what happened 80 years ago.
        </div>
        <button onClick={handleWatchNow} className={styles.watchButton}>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default NewReleaseTease;
