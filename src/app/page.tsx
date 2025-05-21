import Header from "./components/Header/Header";
import NewReleaseTeaser from "./components/NewReleaseTeaser/NewReleaseTeaser";
import MainContent from "./components/MainContent/MainContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      <Header />
      <NewReleaseTeaser />
      <MainContent />
    </div>
  );
}
