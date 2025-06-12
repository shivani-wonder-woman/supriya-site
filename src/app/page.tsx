import Header from "./components/Header/Header";
import NewReleaseTeaser from "./components/NewReleaseTeaser/NewReleaseTeaser";
import MainContent from "./components/MainContent/MainContent";

export default function Home() {
  return (
    <div>
      <Header />
      <NewReleaseTeaser />
      <MainContent />
    </div>
  );
}
