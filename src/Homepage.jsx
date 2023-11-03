import Images from "./damaris/Images";
import Footer from "./jakub/Footer";
import Header from "./jakub/Header";
import SearchBar from "./david/SearchBar";
import ImgRandom from "./damaris/imgRandom";
import MainContent from "./david/MainContent";

export default function Homepage() {
  return (
    <>
      <h1>Homepage</h1>

      <Header />
      <SearchBar />
      <MainContent />
      <Footer />
    </>
  );
}
