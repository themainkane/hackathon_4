import { Route, Routes } from "react-router-dom";

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