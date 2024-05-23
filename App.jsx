import Navbar from "./src/components/Navbar";
import HomePage from "./src/components/HomePage";
import Skills from "./src/components/Skills";
import Projects from "./src/components/Projects";
import AboutMe from "./src/components/AboutMe";
import Contact from "./src/components/Contact";


export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <HomePage />
                <Skills />
                <Projects />
                <AboutMe />
                <Contact />
            </main>
        </>
    );
}