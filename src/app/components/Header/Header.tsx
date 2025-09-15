"use client";

import React, { FC, useState, useEffect } from "react";
import styles from "./Header.module.css";
import { client } from "../../../../prismicio";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [clientImage, setClientImage] = useState<{ url: string; alt: string }>({
    url: "",
    alt: "",
  });
  const router = useRouter();

  const handleReadMore = () => {
    router.push("/Introduction");
  };

  useEffect(() => {
    const fetchClientImage = async () => {
      try {
        const response = await client.getAllByType("myimage");

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
    <main className={styles.container}>
      <div className={styles.overlay}>
        <img
          src="/backgroundImage.png"
          alt="flower branch"
          className={styles.flower}
        />
        <img
          src="/desktopBackground.png"
          alt=" deskt top flower branch"
          className={styles.desktopFlower}
        />
        <div className={styles.content}>
          <div className={styles.bio}>
            <h1>Bio</h1>
          </div>
          <div className={styles.achievements}>
            <h1>Achievements</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
