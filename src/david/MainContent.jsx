import { Route, Routes } from "react-router-dom";
import Header from "../jakub/Header";
import SearchBar from "./SearchBar";

//! Dont forget to add COMPONENTS TO ROUTES

export default function MainContent(){



    return(
            <Routes>

                <Route path="/" element={ <Homepage /> } />
                <Route path="/about-us" element={ <AuthorDetail />} />
                <Route path="/contact" element= { <ImageDetail /> } />

            </Routes>
    )
}