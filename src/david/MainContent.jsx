import { Route, Routes } from "react-router-dom";
import Header from "../jakub/Header";
import SearchBar from "./SearchBar";
import Author from "../joe-components/Author";
import ImgRandom from "../damaris/imgRandom";
import Images from "../damaris/Images";

//! Dont forget to add COMPONENTS TO ROUTES

export default function MainContent(){



    return(
            <Routes>

                <Route path="/" element={ <ImgRandom /> } />
                <Route path="/about-us" element={ <Images />} />
                {/* <Route path="/contact" element= { <ImageDetail /> } /> */}
                <Route path="/author/:authorName" element= { <Author /> } />

            </Routes>
    )
}