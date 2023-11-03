
import Footer from "./jakub/Footer";
import Header from "./jakub/Header";
import SearchBar from "./david/SearchBar";
import MainContent from "./david/MainContent";
import ImgRandom from "./damaris/imgRandom";
import Author from "./joe-components/Author";


export default function Homepage() {
  return (
    <>
      <Header />
      <SearchBar />
      <MainContent />
      <ImgRandom/>
      <Footer />
    </>
  );
}
