import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact/contact";
import PageNotFound from "./pages/PageNotFound/pageNotFound";

export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="about-me" element={<AboutMe />}></Route>
                    <Route path="project" element={<Project />}></Route>
                    <Route path="certificate" element={<Certificate />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}