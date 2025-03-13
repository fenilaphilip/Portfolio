import { NavLink } from "react-router";

export default function Navbar() {

    return (
        <>
            {/* <div className="bubbles">
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
            </div> */}
            <nav className="navbar navbar-expand">
                <div className="container justify-content-md-end">
                    <ul className="navbar-nav mx-5 gap-3" >
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active p-0" aria-current="page">
                                <h6><strong>Home</strong></h6>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link p-0">
                                <h6><strong>About</strong></h6>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link p-0">
                                <h6><strong>Projects</strong></h6>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        </>
    );
}
