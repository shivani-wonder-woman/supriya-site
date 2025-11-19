"use client";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import styles from "./NewReleaseTeaser.module.css";
import { client } from "../../../../prismicio";

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
    description: string;
  }>({
    url: "",
    alt: "",
    linkUrl: "",
    description: "",
  });

  useEffect(() => {
    const fetchClientImage = async () => {
      try {
        const response = await client.getAllByType("newreleaseteaser");
        console.log("Prismic response:", response);
        console.log("newrelease data:", response[0].data);

        if (response.length > 0 && response[0].data.image?.url) {
          const data = response[0].data; // ✅ FIXED

          setClientImage({
            url: response[0].data.image.url,
            alt: response[0].data.image.alt || "Client Image",
            linkUrl: response[0].data.link?.url || "#",
            description: data.description_of_teaser?.[0]?.text || "",
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
        <div className={styles.description}>{clientImage.description}</div>

        <button onClick={handleWatchNow} className={styles.watchButton}>
          Watch Now
        </button>
      </div>
      <div className={styles.imageContainer}>
        {clientImage.url && (
          <Image
            src={clientImage.url}
            alt="teaser image"
            width={500}
            height={300}
            className={styles.clientImage}
          />
        )}
      </div>
    </div>
  );
};

export default NewReleaseTease;
