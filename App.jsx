import { Outlet } from "react-router";
import Navbar from "./src/components/Navbar";
import './src/style.scss'


export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
}