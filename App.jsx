import { Outlet } from "react-router";
import Navbar from "./src/components/Navbar";



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