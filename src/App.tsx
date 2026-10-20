import styled from "styled-components";
import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Footer from "./components/Footer";
import Credits from "./pages/Credits";

const Content = styled.div`
    display: flex;
    width: 85%;
    margin: 0 auto;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const router = createBrowserRouter([
    {
        path: "*",
        element: (
            <>
                <Header />
                <Content>
                    <Navigation />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/achievements" element={<Achievements />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/credits" element={<Credits />} />
                        </Routes>
                    </Main>
                </Content>
                <Footer />
            </>
        ),
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}