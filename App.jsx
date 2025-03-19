import { Outlet } from "react-router";
import Navbar from "./src/components/Navbar";
import LanguageProvider from "./src/store/LanguageContext";
import './src/style.scss'


export default function App() {
    return (
        <LanguageProvider>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </LanguageProvider>
    );
}