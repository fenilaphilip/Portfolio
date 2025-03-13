import { NavLink } from "react-router";

export default function Navbar() {

    return (
        <>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            <nav className="navbar navbar-expand  p-1" style={{
                backgroundColor: "#803b7a"
            }}>
                <div className="container justify-content-md-left ">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/contact" className="nav-link" >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav >
        </>
    );
}
