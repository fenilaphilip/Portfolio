import { NavLink } from "react-router";

export default function Navbar() {

    return (
        <nav id="menu" className="navbar navbar-expand-md bg-#5c2056" >
            <div className="container fixed-top ">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/projects">
                    Projects
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </div>
        </nav >
    );
}