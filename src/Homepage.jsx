import Images from "./damaris/Images";
import Footer from "./jakub/Footer";
import Header from "./jakub/Header";
import SearchBar from "./david/SearchBar";
import Author from "./joe-components/Author";

export default function Homepage() {

    return (
        <>

            <Header />
            <SearchBar />
            <Author />
            <Images/>
            <Footer />

        </>
    )
}