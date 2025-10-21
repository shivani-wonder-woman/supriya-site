"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "./components/Header/Header";
import NewReleaseTeaser from "./components/NewReleaseTeaser/NewReleaseTeaser";
import MainContent from "./components/MainContent/MainContent";

// Separate component that uses useSearchParams
function HomeContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Handle anchor scrolling when navigating from other pages
    const hash = window.location.hash;
    if (hash) {
      // Wait for the page to fully load, then scroll to the anchor
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <div>
      <Header />
      <NewReleaseTeaser />
      <MainContent />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
